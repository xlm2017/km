/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-18 17:28:20
 * @LastEditTime: 2023-04-26 10:31:12
 * @LastEditors: xlm
 */
function foo(){// 第16行
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


foo.getName()//2
//foo是一个函数，也可以说是一个对象，所以它也可以挂载一些属性和方法，18行在其上挂载了一个getName方法
//执行的结果是

getName()//4
//21行有一个全局函数，全局函数声明提前后被20行的getName覆盖，所以输出4

foo().getName()//1
//foo()执行完成后，将全局的getName也就是window.getName给更改后返回this，而在这里this执行的就是window，所以最后执行的就是window.getName，所以输出1

getName()//1
//在上面已经更改全局的getName，所以依然是1

new foo.getName()//2
//new 操作符在实例化构造器的时候，会执行构造器函数，也就是说，foo.getName会执行，输出2

new foo().getName()//3
//new操作符的优先级较高，所以会先new foo()得到一个实例，然后再执行实例的getName方法,这个时候，实例的构造器里没有getName方法，就会执行构造器原型上的getName方法

new new foo().getName()//3
//先执行new foo()得到一个实例，然后在new 这个实例的getName方法,这个时候会执行这个方法，所以输出3

//除了本地对象的方法，其他的函数都能new


// new的优先级较高