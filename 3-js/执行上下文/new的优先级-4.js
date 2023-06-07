/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-04-24 13:38:37
 * @LastEditTime: 2023-04-24 13:42:09
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

new foo().getName()//3
//new操作符的优先级较高，所以会先new foo()得到一个实例，然后再执行实例的getName方法,这个时候，实例的构造器里没有getName方法，就会执行构造器原型上的getName方法


// 1079:21 Uncaught TypeError: (intermediate value).getName(...) is not a function
// (new foo()).getName()



// 1023:21 Uncaught TypeError: (intermediate value).getName(...) is not a function
// (new foo().getName)()



// caught TypeError: foo(...).getName(...) is not a constructor
// new (foo().getName());