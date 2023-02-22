/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-22 15:52:32
 * @LastEditTime: 2023-02-22 15:57:48
 * @LastEditors: xlm
 */


// ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。

// 它是一个字节数组，通常在其他语言中称为“byte array”。你不能直接操作 ArrayBuffer 中的内容；而是要通过类型化数组对象或 DataView 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。

// ArrayBuffer() (en-US) 构造函数创建一个以字节为单位的给定长度的新 ArrayBuffer。你也可以从现有的数据（例如，从 Base64 字符串或者从本地文件）获取数组缓冲区。

// ArrayBuffer 是一个可转移对象。



  const fileReader = new FileReader();

  fileReader.addEventListener("load",(event)=>{
    const arrayBuffer = event.target.result;
    //...
  })

  fileReader.readAsArrayBuffer(file);

  // 或者, 注意兼容性

  const arrayBuffer = await file.arrayBuffer();


  // 网络获取
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'xxxxx');

  xhr.responseType = 'arraybuffer';

  xhr.onload = function(e) {
    if (this.status == 200) {
      const arrayBuffer = xhr.response;
    }
  };
  xhr.send();



  // 获取 blob

  //此处的arrayBuffer指的是TypedArray
  const blob = new Blob([arrayBuffer.buffer],{type:"xxx/xxx"});


  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'xxxxx');

  xhr.responseType = 'blob';

  xhr.onload = function(e) {
    if (this.status == 200) {
      const blob = xhr.response;
    }
  };

  xhr.send();


  //视频同理
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");

  audio.setAttribute("src",url);

  audio.play();




  // File是继承于Blob的，大部分你都可以直接当成Blob对象使用。包括
  URL.createObjectURL(file);

  file.arrayBuffer();




//   ArrBuffer转Buffer
// 使用Buffer.from

const buf = Buffer.from(arrayBuffer.buffer);
// Buffer转ArrayBuffer
// Buffer的实例维护了一个属性buffer,亦即ArrayBuffer

const arrayBuffer2 = buf.buffer