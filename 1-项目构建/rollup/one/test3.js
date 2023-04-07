/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-20 20:41:39
 * @LastEditTime: 2023-03-21 11:18:56
 * @LastEditors: xlm
 */


// import * as v from './bundle3.js'
// import {getName} from './bundle3.js'

// console.log(111)
// console.log(getName())


import('./bundle3.js').then((module) => {
  // 执行后续操作
  console.log("执行", module);
}).catch((error) => {
  // 处理异常情况
});