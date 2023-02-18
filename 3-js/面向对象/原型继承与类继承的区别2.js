1.原型链继承：子类型的原型对象 = 超类型的实例

复制代码
function SuperType() {
    this.colors = ["red", "blue", "green"];
}
function SubType() {
}
//继承了 SuperType 
SubType.prototype = new SuperType();
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black" 
var instance2 = new SubType();
alert(instance2.colors); //"red,blue,green,black"
复制代码
问题：

　　a.由于包含引用类型值的原型属性会被所有实例共享，而字符串型、数值型则不被共享，所以对 instance1.colors 的修改，instance2.colors 也会被修改；基本类型没有这个问题：

复制代码
function SuperType(){ 
 this.color = "red";
} 
function SubType(){ 
} 
//继承了 SuperType
SubType.prototype = new SuperType(); 
var instance1 = new SubType(); 
instance1.color = "black"; 
alert(instance1.color); //black
var instance2 = new SubType(); 
alert(instance2.color); //red
复制代码
　　b.在创建子类型的实例时，不能向超类型的构造函数中传递参数

 

2.借用构造函数：通过使用 apply()和 call()方法也可以在（将来）新创建的对象上执行构造函数

复制代码
function SuperType(){ 
 this.colors = ["red", "blue", "green"]; 
} 
function SubType(){ 
 //继承了 SuperType 
 SuperType.call(this); 
} 
var instance1 = new SubType(); 
instance1.colors.push("black"); 
alert(instance1.colors); //"red,blue,green,black" 
var instance2 = new SubType(); 
alert(instance2.colors); //"red,blue,green"
复制代码
通过使用 call()方法（或 apply()方法也可以），我们实际上是在（未来将要）新创建的 SubType 实例的环境下调用了 SuperType 构造函数。这样一来，就会在新 SubType 对象上执行 SuperType()函数中定义的所有对象初始化代码。结果，SubType 的每个实例就都会具有自己的 colors 属性的副本了。
问题：如果仅仅是借用构造函数，那么也将无法避免构造函数模式存在的问题——方法都在构造函数中定义，因此函数复用就无从谈起了。而且，在超类型的原型中定义的方法，对子类型而言也是不可见的，结果所有类型都只能使用构造函数模式。考虑到这些问题，借用构造函数的技术也是很少单独使用的。

 

3.组合继承：指的是将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式。其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。

复制代码
function SuperType(name){ 
 this.name = name; 
 this.colors = ["red", "blue", "green"]; 
} 
SuperType.prototype.sayName = function(){ 
 alert(this.name);
}; 
function SubType(name, age){ 
 //继承属性
 SuperType.call(this, name); 
 this.age = age; 
} 
//继承方法
SubType.prototype = new SuperType(); 
SubType.prototype.constructor = SubType; 
SubType.prototype.sayAge = function(){ 
 alert(this.age); 
}; 
var instance1 = new SubType("Nicholas", 29); 
instance1.colors.push("black"); 
alert(instance1.colors); //"red,blue,green,black" 
instance1.sayName(); //"Nicholas"; 
instance1.sayAge(); //29 
var instance2 = new SubType("Greg", 27); 
alert(instance2.colors); //"red,blue,green" 
instance2.sayName(); //"Greg"; 
instance2.sayAge(); //27
复制代码
组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为 JavaScript 中最常用的继承模式
因此，使用继承时优先使用组合继承

 

4. class继承

在 ES6 中，我们可以使用 class 去实现继承，并且实现起来很简单

复制代码
 1 class Parent {
 2   constructor(value) {
 3     this.val = value
 4   }
 5   getValue() {
 6     console.log(this.val)
 7   }
 8 }
 9 class Child extends Parent {
10   constructor(value) {
11     super(value)
12     this.val = value
13   }
14 }
15 let child = new Child(1)
16 child.getValue() // 1
17 child instanceof Parent // true
复制代码
class 实现继承的核心在于使用 extends 表明继承自哪个父类，并且在子类构造函数中必须调用 super，因为这段代码可以看成 Parent.call(this, value)。

当然了，之前也说了在 JS 中并不存在类，class 的本质就是函数。

