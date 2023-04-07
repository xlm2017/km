/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-28 15:11:48
 * @LastEditTime: 2023-03-28 15:16:28
 * @LastEditors: xlm
 */


// let str = `translateX(${self.left + (self.width)/2 - 15 - 10}px)`


let str = 'translateX(34px)';

// let reg = /translateX\(\d+px\)/g
// translateX(34px)

let reg = /\d+/g

console.log(reg.exec(str)[0]);