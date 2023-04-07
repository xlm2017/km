/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-20 20:41:39
 * @LastEditTime: 2023-03-21 11:57:45
 * @LastEditors: xlm
 */


// import * as v from './bundle.js'
// import {getName} from './bundle3.js'

import * as v from './dist/bundle2.js'
console.log(111)
console.log(v)
console.log(v.getName())

// 使用动态导入语法（import()）代替 require() 函数。这样可以在 CommonJS 模块中使用 ES Module 文件。

// import('./bundle.js').then((module) => {
//   // 执行后续操作
//   console.log("执行", module);
//   let a = module;
//   console.log("执行:", a);
// }).catch((error) => {
//   // 处理异常情况
// });


// require is not defined in ES module scope, you can use import instead
// let a = require('./bundle.js');

// console.log("a:", a);


