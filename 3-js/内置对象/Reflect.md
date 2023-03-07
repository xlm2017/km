<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-03 10:56:48
 * @LastEditTime: 2023-03-03 10:57:22
 * @LastEditors: xlm
-->


Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与proxy handlers (en-US)的方法相同。Reflect不是一个函数对象，因此它是不可构造的。

# https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

Reflect.apply(target, thisArgument, argumentsList)

对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似。



# 该方法与 ES5 中Function.prototype.apply()方法类似：调用一个方法并且显式地指定 this 变量和参数列表 (arguments) ，参数列表可以是数组，或类似数组的对象。

Function.prototype.apply.call(Math.floor, undefined, [1.75]);
Copy to Clipboard
使用 Reflect.apply 方法会使代码更加简洁易懂。