/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-10-13 10:33:51
 * @LastEditTime: 2023-10-13 10:34:41
 * @LastEditors: xlm
 */

// 简单组合函数

function double(num) {
  return num*2
}
 
function square(num) {
  return num **2
}
 
function composeFn(m, n) {
  return function (count) {
    return n(m(count))
  }
}
 
var newFn = composeFn(double, square)
console.log(newFn(10))


