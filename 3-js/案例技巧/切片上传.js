import { ExclamationCircleOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Form, Modal, Progress, Upload, message, Tooltip } from 'antd';
import Axios from 'axios';
import React, { Fragment, useRef, useState } from 'react';
import SparkMd5 from 'spark-md5';
import * as api from 'common/lib/services';
import * as utils from '../../utils/index'
import { Icon } from 'common';
import { EditableTable } from '../../components';
// 分片文件大小
const CHUNK_SIZE = 1024 * 1024;

// 最大并发上传数量
const maxUploadFileNumber = 3;
// 剩余接口通道
let remainingFileNumber = 3;

const CancelToken = Axios.CancelToken;
interface FileItem {
    uid: string;
    name: string;
    percent: number;
    code?: string;
    size: number;
    gcategory: string;
    fileMd5?: string;
    fileExist?: boolean;
    sliceKey?: string;
    chunkList?: any[];
    file?: any;
    revision?: string;
    description?: string;
    sizeText?: string;
    parseModel?: string;
    gpriority?: number;
    progress?: string;
}
interface FileChunkItem {
    file: any;
    fileName?: string;
    gsource?: string;
    fileMd5?: string;
    fileExist?: boolean;
    sliceKey?: string;
    slice?: boolean;
    type?: string;
    totalChunks?: number;
    chunkNumber?: number;
    currentChunkSize?: number;
    currentChunkStart?: string;
    percentage?: number;
}

export const UploadModal = (props: {
    parentId: string;
    moduleType: string;
    getTableDatas: () => void;
}) => {
    const { parentId, moduleType, getTableDatas } = props;
    const [form] = Form.useForm();
    const appKey = utils.getItem('appKey')
    const modelDb = utils.getItem(appKey)
    // 上传弹窗
    const [uploadModalVisiable, setUploadModalVisiable] = useState<boolean>(false);
    // 上传的数据
    const [fileList, setFileList] = useState<FileItem[]>([]);
    // progress、status(success、exception、pause、active)
    const [progressData, setProgressData] = useState({}); 
    // 进度条数据备份
    const progressRef = useRef({}); 
    // 取消上传事件
    const cancelTokenData: any = useRef([]); 
    // 是否可以上传
    let fileListData: any = {};
    // 切片数据
    let fileChunkArr = {};

    //确定
    const handleOk = () => {
        handleCancel();
    };

    //关闭弹窗
    const handleCancel = () => {
        setUploadModalVisiable(false);
    };

    //全部清除
    const clearAll = () => {
        [...fileList].forEach(({uid}) => {
            cancelUpload(uid)
        });
        remainingFileNumber = 3;
        setProgressData([]);
        progressRef.current = []
        setFileList([])
        // 取消上传事件
        cancelTokenData.current = []; 
        // 上传数据备份
        fileListData = {};
        // 切片数据
        fileChunkArr = {};
    };

    /**
     * 删除 根据uid 去删除文件 并取消上传
     * @param currentId  uid
     */
    const deleteFile = (currentId: string) => {
        cancelUpload(currentId);
        let newList = [...fileList]
        // 从表格中删除该项
        newList.splice(newList.findIndex(({uid}) => uid === currentId), 1)
        setFileList(newList)
    };

    // 获取需要上传的文件列表
    const beforeUpload = (e: any, list: any) => {
        let newList: any = [];
        for (let i = 0; i < list.length; i++) {
            const element = [...list][i];
            if (fileList.findIndex((item) => item.name === element.name) !== -1) {
                message.info(`${element.name}已选择`)
                continue
            }
            newList.push({
                name: element.name,
                uid: element.uid,
                size: element.size,
                file: element,
                revision: 0,
            });
        }
        newList = fileList.concat(newList)
        setFileList(newList);
        return false;
    };

    // 循环进行下一个请求
    const continueUploaded = (uid: string, status: any) => {
        changeProgress(uid, status)
        fileListData[uid] = {...fileListData[uid], notUpload: true}
        if (remainingFileNumber < maxUploadFileNumber) {
            remainingFileNumber++;
            handleUpload();
        }
    }

    // 上传全部文件
    const handleUpload = async() => {
        for(let i = 0; i < fileList.length; i++ ) {
            const fileItem = fileList[i]
            const { uid } = fileItem;
            if (progressRef.current[uid]?.status === "active" || progressRef.current[uid]?.status === "success" || fileListData[uid]?.notUpload) {
                // 上传过 或者正在上传的不触发切片上传
                return
            }
            remainingFileNumber--
            changeProgress(uid, {status: "active"});
            singleFileUpload(fileItem);
        }
    };

    // 单文件上传
    const singleFileUpload = async(fileItem: FileItem) => {
        let newItem = { ...fileItem };
        // 文件hash值
        let fileMd5 = ((await calculateHash(fileItem.file)) as string)
        let fileData
        try {
            // 查询该文件是否可以上传
            fileData = await api.verifyUpload(fileMd5, {
                params: {
                    name: encodeURIComponent(fileItem.name),
                    size: fileItem.size,
                    strategy: '1048576'
                }
            });  
        } catch(err: any) {
            continueUploaded(fileItem.uid, {status: "exception"})
            return
        }
        
        if (!fileData) {
            continueUploaded(fileItem.uid, {status: "exception"})
            return
        }
        
        
        const { chunkList, sliceKey, fileExist } = fileData.data;

        newItem.fileMd5 = fileMd5 + '.' + getFileType(fileItem.name);;
        newItem.sliceKey = sliceKey;
        newItem.fileExist = fileExist;
        
        if (fileExist) {
            associatedCurrentFolder(newItem);
            return;
        };

        // 过滤已上传过的文件
        const uploadedChunkJson = filterUploaded(chunkList);

        //生成文件切片 并添 加需要的属性
        let fileChunkList = createFileChunk(fileItem.file);
        let newfileChunkList: FileChunkItem[] = [];
        newfileChunkList = fileChunkList.map((item, index) => ({
                file: item.file,
                gsource: '模型管理',
                type: 'models',
                slice: true,
                sliceKey: sliceKey,
                fileMd5: `${fileMd5}-${index}`,
                fileName: fileItem.name,
                totalChunks: fileChunkList.length,
                chunkNumber: index + 1,
                percentage: uploadedChunkJson[`${fileMd5}-${index}`]
                    ? 100
                    : 0,
                currentChunkSize: item.file.size,
                currentChunkStart: ''
            }
        ));
        newItem.chunkList = newfileChunkList;
        fileChunkArr[fileItem.uid] = newfileChunkList;
        await sliceUpload(fileItem.uid, newItem, chunkList?.length || 0);
    }

    //将上传的文件关联到父文件夹下
    const associatedCurrentFolder = async(fileItem: FileItem) => {
        const { sliceKey, name, revision, code = '', description = '', gpriority = '', gcategory = '' } = fileItem;
        let data;
        if (moduleType === 'document') {
            data = {
                // file,
                sliceKey,
                name,
                revision,
                gcategory,
                code,
                description,
                gsource: '文档管理',
                gtype: 'documents',
                gmodelDB: modelDb,
                gmodelType: gpriority === 1 && gcategory ,
                gpriority: gpriority 
            }
        } else {
            data = {
                sliceKey,
                name,
                revision,
                modelDb: modelDb,
                code: code|| "",
                description: description || '',
                gsource: '模型管理',
                gtype: 'models',
                gpriority: 0 
            }
        }
        try{
            await api.associatedFolder(parentId,{
                data
            });
            getTableDatas()
            continueUploaded(fileItem.uid, {status: "success", progress: 100})
        } catch (err: any){
            continueUploaded(fileItem.uid, {status: "exception"})
        }
    }

    // 统计上传过的切片文件
    const filterUploaded = (chunkList: any[] = []) => {
        const objChunkList = {};
        chunkList.forEach((item: any) => {
            objChunkList[item.md5] = true;
        });
        return objChunkList;
    };

    // 上传切片
    const sliceUpload = async(uid: string, fileItem: FileItem, index: number) => {
        let item = fileChunkArr[uid][index];
        try {
            await api.uploadFileSlices(
                { data: item },{
                    cancelToken: new CancelToken(function executor(c) {
                        cancelTokenData.current.push({uid: uid, cancelFun: c})
                    }),
                    // 允许为上传处理进度事件
                    onUploadProgress: (e: any) => {
                        fileChunkArr[uid][index].percentage = parseInt(
                            String((e.loaded / e.total) * 100)
                        );
                        // 统计全部进度
                        computeUploadPercentage(uid, fileItem);
                    }
                }
            );
        } catch (error: any) {
            continueUploaded(fileItem.uid, {status: "exception"})
            return
        }
        try {
            if (index + 1 < fileChunkArr[uid].length) {
                // 按顺序上传
                await sliceUpload(uid, fileItem, index + 1);
            } else {
                //合并请求 挂在相应文件夹内
                associatedCurrentFolder(fileItem);
            };
        } catch (error: any) {
            continueUploaded(fileItem.uid, {status: "exception"})
        }
    };

    // 取消切片上传
    const cancelUpload = (uid: string) => {
        // 过滤出当前uid的所有切片取消方法
        let newArr = cancelTokenData.current.filter((item: {uid: string}) => item.uid === uid);
        //取消当前正在上传的切片
        newArr.length > 0 && newArr[newArr.length - 1].cancelFun("abort")
        changeProgress(uid, {status: "pause"});
        continueUploaded(uid, {status: "exception"})
    };

    //统计上传进度
    function computeUploadPercentage(uid: string, fileItem: FileItem) {
        const newSlice = fileChunkArr[uid];

        if (!newSlice.length) {
            return;
        };

        // 统计切片接口返回的进度
        let loaded = 0;
        for (let i = 0; i < newSlice.length; i++) {
            const item = newSlice[i];
            const tmp = item.currentChunkSize * item.percentage;
            loaded = loaded + tmp;
        };
        let percentage = Math.floor((loaded / fileItem.size) * 100) / 100; // 最新的进度
        if (percentage === 100) {
            return
        }
        if (percentage > (progressData[uid]?.progress || 0)) {
            changeProgress(uid, {status: "active", progress: percentage});
        };
    };

    // 文件切片
    const createFileChunk = (file: any, size = CHUNK_SIZE) => {
        let fileChunkList = [];
        let cur = 0;
        while (cur < file.size) {
            fileChunkList.push({ file: file.slice(cur, cur + size) });
            cur += size;
        }
        return fileChunkList;
    };

    // 获取文件的hash值
    const calculateHash = (file: any) => {
        return new Promise((resolve) => {
            let blobSlice = File.prototype.slice,
                chunkSize = 2097152, // Read in chunks of 2MB
                chunks = Math.ceil(file.size / chunkSize),
                currentChunk = 0,
                spark = new SparkMd5.ArrayBuffer(),
                fileReader = new FileReader();

            fileReader.onload = function (e: any) {
                spark.append(e.target.result); // Append array buffer
                currentChunk++;

                if (currentChunk < chunks) {
                    loadNext();
                } else {
                    let fileHash = spark.end();
                    resolve(fileHash);
                }
            };

            fileReader.onerror = function () {};

            function loadNext() {
                var start = currentChunk * chunkSize,
                    end =
                        start + chunkSize >= file.size
                            ? file.size
                            : start + chunkSize;

                fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
            }
            loadNext();
        });
    };

    // 根据文件名称获取文件类型
    const getFileType = (name: string) => {
        let index = name.lastIndexOf('.');
        return name.substr(index + 1);
    };

    // 保存单元格编辑后的文件信息
    const handleSave = (row: FileItem) => {
        const newData = [...fileList];
        const index = newData.findIndex((item) => row.uid === item.uid);
        let item = { ...newData[index], ...row };
        //取多选框的值
        if (row.parseModel) {
            item.parseModel = row.parseModel[0]
        }
        if (row.gpriority) {
            item.gpriority = row.gpriority[0]
        }
        newData.splice(index, 1, {
            ...item,
        });
        setFileList(newData);
    };

    // 修改上传进度或者上传的状态
    const changeProgress = (uid: string, item: { status?: string; progress?: number}) => {
        let newProgress = {...progressRef.current};
        newProgress[uid] = {
            ...newProgress[uid],
            ...item
        };
        progressRef.current = newProgress
        setProgressData(newProgress);
    }

    // 打开上传的modal
    const uploadDocument = () => {
        if (!parentId) {
            message.info('只能在文件夹中上传哦！');
            return;
        }
        setUploadModalVisiable(true);
    };

    let tableColumns: any[];
    if (moduleType === 'document') {
        //文档管理
        tableColumns = [
            {
                title: '名称',
                dataIndex: 'name',
                inputType: 'input',
                editable: true,
                width: 300
            },
            {
                title: '编码',
                dataIndex: 'code',
                inputType: 'input',
                editable: true,
                width: 110
            },
            {
                title:  <Tooltip placement="top" title={'仅可使用英文格式字符或特殊符号，不可包含：`~#^&|{}\\[\\]<>/?~·！#￥……&（）——|‘；：”“’。，、？{}【】以及回车换行、Tab缩进'}>
                            <span>版本 <ExclamationCircleOutlined /></span>  
                        </Tooltip>,
                dataIndex: 'revision',
                inputType: 'input',
                editable: true,
                width: 117
            },
            {
                title: '描述',
                dataIndex: 'description',
                inputType: 'input',
                editable: true,
                width: 112
            },
            {
                title: '大小',
                dataIndex: 'size',
                render: (text: number) => (utils.getfilesize(text))
            },
            {
                title: '解析模型',
                dataIndex: 'parseModel',
                inputType: 'checkbox',
                options:[{label: '是', value: 1}],
                editable: true,
                width: 162
            },
            {
                title: '优先解析',
                dataIndex: 'gpriority',
                inputType: 'checkbox',
                options:[{label: '是', value: 1}],
                editable: true,
                width: 164
            },
            {
                title: '进度',
                dataIndex: 'progress',
                render: (text: string, record: FileItem) => {
                    return (
                        <div className={"table-progress"}><Progress percent={progressData[record.uid]?.progress} status={progressData[record.uid]?.status}/></div>
                    );
                }
            },
        ];
    } else {
        // 模型管理
        tableColumns = [
            {
                title: '名称',
                dataIndex: 'name',
                inputType: 'input',
                editable: true,
                width: 300
            },
            {
                title: '编码',
                dataIndex: 'code',
                inputType: 'input',
                editable: true,
                width: 110
            },
            {
                title: '版本',
                dataIndex: 'revision',
                inputType: 'input',
                editable: true,
                width: 117
            },
            {
                title: '大小',
                dataIndex: 'size',
                render: (text: number) => (utils.getfilesize(text))
            },
            {
                title: '进度',
                dataIndex: 'progress',
                render: (text: string, record: FileItem) => {
                    const status = {

                    }
                    return (
                        <div className={"table-progress"}>
                            <Progress 
                                percent={progressData[record.uid]?.progress}
                                status={progressData[record.uid]?.status}
                            />
                        </div>
                    );
                }
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text: string, record: FileItem) => {
                    const {uid} = record
                    return (
                        <div className={"operation-icon"}>
                            {
                                progressData[uid]?.status === "active"?
                                    <Icon
                                        type={'iconicon_pauseupload-01'}
                                        onClick={()=>{
                                            changeProgress(uid, {status: "pause"})
                                            cancelUpload(uid)
                                        }}
                                    />
                                    :
                                    <Icon
                                        type={'iconicon_startuploading-01'}
                                        className={`${progressData[uid]?.status === "success"? 'pause' : ''}`}
                                        onClick={()=> {
                                            // 上传成功 不能点击该按钮
                                            if (progressData[uid]?.status === "success") {
                                                return
                                            }
                                            changeProgress(uid, {status: "active"})
                                            singleFileUpload(record)
                                        }}
                                    />
                            }
                            <Icon
                                type={'iconicon_delete'}
                                onClick={() => {deleteFile(uid)}}
                            />
                        </div>
                    );
                }
            }
        ];
    }
    
    tableColumns = tableColumns.map((col) => {
        const {editable, dataIndex, inputType, title, options } = col
        if (!editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: any) => {
                let newItem: any = {
                    record: {...record, parseModel: [record.parseModel], gpriority: [record.gpriority]},
                    editable: editable,
                    inputType: inputType,
                    dataIndex: dataIndex,
                    title: title,
                    options: options,
                    handleSave: handleSave
                }
                // console.log('record', record);
                
                if(progressData[record.uid]?.status === "success") {
                    // 上传成功后不能编辑表格
                    newItem.editable = false
                }
                if (moduleType === 'document' && dataIndex === 'gpriority') {
                    // gpriority 控制 优先解析字段 是否展示
                    newItem.isShowEdit = record.parseModel === 1? true: false;
                }
                return newItem
            }
        };
    });
    return (
        <Fragment>
            {
                moduleType === 'document' ? 
                <Button
                    type="primary"
                    icon={<Icon type={'iconicondaoruImport'} />}
                    shape="round"
                    size={'middle'}
                    onClick={uploadDocument}
                >
                    <span>导入文档</span> 
                </Button>:
                <span onClick={uploadDocument}><Icon type={'iconicon_upload'}/>本地上传</span>
            }
            <Modal
                title="导入文档"
                visible={uploadModalVisiable}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1500}
                maskClosable={false}
                footer={null}
            >
                <UploadModalContent>
                    <div className='header-box'>
                        <span>
                            <Upload
                                multiple={true}
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                            >
                                <Button
                                    icon={<Icon type={'iconicon_upload'} />}
                                    shape="round"
                                    size={'middle'}
                                    className={'select-file'}
                                >
                                    <span>选择文件</span>
                                </Button>
                            </Upload>
                            <Tooltip title={'支持模型格式包括：“rvt、ifc、obj、fbx、dae、3ds以及rvt、ifc、imodel、obj、fbx、dae、3ds格式的zip包'}>
                                <Icon type={'iconicon_questionmarktips'} style={{color: 'rgb(40, 120, 255)', marginRight: '4px'}}/>
                                <span>支持格式</span>
                            </Tooltip>
                        </span>
                        <span>温馨提示：关闭窗口，后台仍在继续上传哦~</span>
                    </div>
                    <Form form={form} component={false}>
                        <EditableTable
                            rowKey={'uid'}
                            columns={tableColumns}
                            dataSource={fileList}
                            bordered
                        />
                    </Form>
                    <div className={'footer'}>
                        <Button
                            shape="round"
                            size={'middle'}
                            onClick={clearAll}
                        >
                            <span>全部清除</span>
                        </Button>

                        <Button
                            shape="round"
                            size={'middle'}
                            onClick={handleUpload}
                            type={'primary'}
                        >
                            <span>全部上传</span>
                        </Button>
                    </div>
                </UploadModalContent>
            </Modal>
        </Fragment>
    );
};

const UploadModalContent = styled.div`    
    .table-progress{
        width: 100%;
    }
    .header-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        color: rgba(0, 0, 0, 0.65)
    }
    .select-file{
        margin-right: 20px;
    }
    .operation-icon{
        span{
            font-size: 24px;
            margin-right: 10px;
            cursor: pointer;
        }
        .pause{
            cursor: not-allowed!important;
            color: #ccc;
        }   
    } 
    .footer{
        padding: 24px;
        text-align: center;
        button{
            margin-right: 10px;
        } 
    }
`;
