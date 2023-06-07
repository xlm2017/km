/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-04-24 11:47:40
 * @LastEditTime: 2023-04-24 11:50:08
 * @LastEditors: xlm
 */


function foo(){
  getName = function(){console.log(1)}
  return this
}
foo.getName = function(){
  console.log(2)
}
foo.prototype.getName = function(){
  console.log(3)
}
var getName = function(){
  console.log(4)
}
function getName(){
  console.log(5)
}

console.log('new:', new foo.getName());   // 2