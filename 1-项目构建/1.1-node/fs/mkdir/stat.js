// 动态新建文件夹的方法
const fs = require('fs'); // 导入 fs 模块
const path = require('path'); // 导入 path 模块

// exports.mkdirs
function mkdir (pathname, callback) {
  // 需要判断是否是绝对路径（避免不必要的 bug）
  pathname = path.isAbsolute(pathname) ? pathname : path.join(__dirname, pathname);

  // 获取相对路径
  pathname = path.relative(__dirname, pathname);

  // path.sep 避免平台差异带来的 bug
  const floders = pathname.split(path.sep);

  let pre = ''; // 最终用来拼合的路径
  floders.forEach(floder => {
    try {
      // 没有异常，文件已经创建，提示用户该文件已经创建
      const _stat = fs.statSync(path.join(__dirname, pre, floder));
      const hasMkdir = _stat && _stat.isDirectory();
      if (hasMkdir) {
        callback // && callback(`文件${floder}已经存在，不能重复创建，请重新创建！`)
      }
    } catch (err) {
      // 抛出异常，文件不存在则创建文件
      try {
        // 避免父文件还没有创建的时候，先创建子文件所出现的意外 bug，这里选择同步创建文件
        fs.mkdirSync(path.join(__dirname, pre, floder));
        callback && callback(null);
      } catch (error) {
        callback && callback(error);
      }
    }
    pre = path.join(pre, floder); // 路径拼合
  });
}


// const mkdir = require('../dao/mkdir'); // 导入自动创建文件夹的方法

// 后端动态存储文件的路径，需要前端返回一个路径
// const fileUrl = 自己动态生成一个文件夹名;
// 动态创建文件夹
// mkdir.mkdirs('../data/' + fileUrl, err => {
//   console.log(err); // 错误的话，直接打印
// });


// let fileUrl = 'zhangsan.png'
// mkdir('./data/images/' + fileUrl, err => {
//   console.log(err); // 错误的话，直接打印
// });

let array = [
  './data/images/lisi.png',
  './data/css/header/css1.css',
  './data/css/header/css2.css',
  './data/views/html/html1.html',
]

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  mkdir(element, err => {
    console.log(err); // 错误的话，直接打印
  });
}