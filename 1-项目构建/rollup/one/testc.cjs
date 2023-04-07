/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-20 20:41:39
 * @LastEditTime: 2023-03-21 11:31:50
 * @LastEditors: xlm
 */


// import { getName } from './bundle2.js'

let v = require('./bundle2.js')

console.log(111, v)
console.log(v.getName())

// 使用动态导入语法（import()）代替 require() 函数。这样可以在 CommonJS 模块中使用 ES Module 文件。



