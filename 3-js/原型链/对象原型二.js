// JS 在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做__proto__ 的内置属性，用于指向创建它的构造函数的原型对象。

// 对象 person1 有一个 __proto__属性，创建它的构造函数是 Person，构造函数的原型对象是 Person.prototype ，所以：
// person1.__proto__ == Person.prototype

let arr = [1,2,3,4,5]


Array.prototype === arr.__proto__   // true [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

typeof arr.__proto__    // 'object' 

Object.prototype.toString.call(arr.__proto__) // '[object Array]'

Array.isArray(arr.__proto__)     // true

Array.__proto__ === Function.prototype   // true
Array.constructor == Function //true

arr.prototype.__proto__   //  Cannot read properties of undefined (reading '__proto__')

Number.__proto__ === Function.prototype  // true
Number.constructor == Function //true

Boolean.__proto__ === Function.prototype // true
Boolean.constructor == Function //true

String.__proto__ === Function.prototype  // true
String.constructor == Function //true

// 所有的构造器都来自于Function.prototype，甚至包括根构造器Object及Function自身
Object.__proto__ === Function.prototype  // true
Object.constructor == Function // true

// 所有的构造器都来自于Function.prototype，甚至包括根构造器Object及Function自身
Function.__proto__ === Function.prototype // true
Function.constructor == Function //true

Array.__proto__ === Function.prototype   // true
Array.constructor == Function //true

RegExp.__proto__ === Function.prototype  // true
RegExp.constructor == Function //true

Error.__proto__ === Function.prototype   // true
Error.constructor == Function //true

Date.__proto__ === Function.prototype    // true
Date.constructor == Function //true



JavaScript中有内置(build-in)构造器/对象共计12个（ES5中新加了JSON），这里列举了可访问的8个构造器。剩下如Global不能直接访问，
Arguments仅在函数调用时由JS引擎创建，Math，JSON是以对象形式存在的，无需new。它们的proto是Object.prototype。如下

Math.__proto__ === Object.prototype  // true
Math.construrctor == Object // true

JSON.__proto__ === Object.prototype  // true
JSON.construrctor == Object //true
上面说的函数对象当然包括自定义的。如下

// 函数声明
function Person() {}
// 函数表达式
var Perosn = function() {}
console.log(Person.__proto__ === Function.prototype) // true
console.log(Man.__proto__ === Function.prototype)    // true
这说明什么呢？

** 所有的构造器都来自于 Function.prototype，甚至包括根构造器Object及Function自身。
所有构造器都继承了·Function.prototype·的属性及方法。如length、call、apply、bind**

（你应该明白第一句话，第二句话我们下一节继续说，先挖个坑：））

Function.prototype也是唯一一个typeof XXX.prototype为 function的prototype。其它的构造器的prototype都是一个对象（原因第三节里已经解释过了）。如下（又复习了一遍）：

console.log(typeof Function.prototype) // function
console.log(typeof Object.prototype)   // object
console.log(typeof Number.prototype)   // object
console.log(typeof Boolean.prototype)  // object
console.log(typeof String.prototype)   // object
console.log(typeof Array.prototype)    // object
console.log(typeof RegExp.prototype)   // object
console.log(typeof Error.prototype)    // object
console.log(typeof Date.prototype)     // object
console.log(typeof Object.prototype)   // object

噢，上面还提到它是一个空的函数，console.log(Function.prototype) 下看看（留意，下一节会再说一下这个）

知道了所有构造器（含内置及自定义）的__proto__都是Function.prototype，那Function.prototype的__proto__是谁呢？

相信都听说过JavaScript中函数也是一等公民，那从哪能体现呢？如下
console.log(Function.prototype.__proto__ === Object.prototype) // true

这说明所有的构造器也都是一个普通 JS 对象，可以给构造器添加/删除属性等。
同时它也继承了Object.prototype上的所有方法：toString、valueOf、hasOwnProperty等。（你也应该明白第一句话，第二句话我们下一节继续说，不用挖坑了，还是刚才那个坑；））

最后Object.prototype的proto是谁？
Object.prototype.__proto__ === null // true
