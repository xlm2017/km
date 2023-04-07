/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-20 20:41:39
 * @LastEditTime: 2023-03-21 11:31:50
 * @LastEditors: xlm
 */


// import * as v from './bundle3.js'
// import {getName} from './bundle3.js'

// console.log(111)
// console.log(getName())

// 使用动态导入语法（import()）代替 require() 函数。这样可以在 CommonJS 模块中使用 ES Module 文件。

import('./bundle.js').then((module) => {
  // 执行后续操作
  console.log("执行", module);
  let a = module;
  console.log("执行:", a);
}).catch((error) => {
  // 处理异常情况
});


// require is not defined in ES module scope, you can use import instead

// Error [ERR_REQUIRE_ESM]: require() of ES Module F:\aaaaa\rollup\one\bundle.js from F:\aaaaa\rollup\one\testc.cjs not supported.
// bundle.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
let a = require('./bundle.js');

console.log("a:", a);


