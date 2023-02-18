

URL模块包含分析和解析 URL 的工具。调用 require('url') 来访问模块

# var url = require('url');



# node 16版本以上

const {
  Blob,
  resolveObjectURL,
} = require('node:buffer');

const blob = new Blob(['hello']);
const id = URL.createObjectURL(blob);

// later...

const otherBlob = resolveObjectURL(id);
console.log(otherBlob.size);