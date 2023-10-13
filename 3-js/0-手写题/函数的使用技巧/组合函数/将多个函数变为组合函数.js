/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-10-13 10:35:12
 * @LastEditTime: 2023-10-13 10:42:03
 * @LastEditors: xlm
 */

function hyCompose(...fns) {
  var length = fns.length
  for (var i = 0; i < length; i++){
    if(typeof fns[i] !== 'function') {
      throw new TypeError('Expected arguments are functions')
    }
  }
  function compose(...args) {
    var index = 0
    var result = length ? fns[index].apply(this,args): args
    while(++index < length) {
      result  = fns[index].call(this,[result])
    }
    return result
  }
  return compose
}
 
function double(num) {
  return num*2
}
 
function square(num) {
  return num ** 2
}
 
var newFn = hyCompose(double, square)
console.log(newFn(10))