# 原型链


说实在的我在实际工作中很少用到原型链，顶多在自建的对象原型上或者预定义对象原型上（比如Array.prototype）添加个方法，但我又一直记不住原型链。在学习总结之后，我我决定把种种特例拆开来记忆，就像小学学习乘除法时将0和1特殊记忆。

# 必须了解的概念
1. 只有函数才有prototype属性
2. 所有对象都有_ _proto _ _属性,它不是ECMA规范定义的，但绝大部分浏览器都实现了
3. JavaScript中万物皆对象，函数也是对象，所以函数既有prototype又有_ _proto _ _属性
4. 一个对象的_ _proto _ _属性指向它的构造函数的prototype（原型），将这句话带入图中就更好理解和记忆
## 不同类型的对象原型链图
1. Object对象
```js
let a = { name:"小明",age:20 }//通过字面量创建的对象
let b = new Object()//通过构造函数创建的对象
```
这类Object对象的原型链最简单，如下图：
Object对象的原型链

2. Function对象
```js
let c = function() {}//函数表达式
let d = new Function()//通过构造函数创建的函数
```  
这类的Function对象的原型链：
Function类型的对象的原型链
3. 其他对象
```js
let e = new Array()//预定义类型的对象
class Cat {
 constructor(){}
}
let f = new Cat()//通过其他function new出的对象
```
其他自定义、预定义类型的对象的原型链
最后两个图中，从typeof Function.prototype === function可以看出Function.prototype也是一个函数对象，所以它也有prototype属性，而它的prototype属性是undefined，也是特殊的一个地方