/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-10-12 17:44:38
 * @LastEditTime: 2023-10-13 09:13:58
 * @LastEditors: xlm
 */


// 普通的add函数
function add(x, y) {
  return x + y
}

// Currying后
function curryingAdd(x) {
  return function (y) {
      return x + y
  }
}

add(1, 2)           // 3
curryingAdd(1)(2)   // 3



// 柯里化函数实现add(1, 2, 3)、add(1, 2)(3)、add(1)(2)(3) 输出 6。

// 柯里化，英语：Currying，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数并且能够返回结果的新函数的技术。






// 柯里化的作用：


// # 让函数的职责单一

// 在函数式编程中，我们希望一个函数处理的问题尽可能的单一，而不是将一大堆的处理过程交给一个函数来处理
// 那么我们是否就可以将每次传入的参数在单一的函数中进行处理，处理完后在下一个函数中再使用处理后的结果

// # 逻辑的复用
