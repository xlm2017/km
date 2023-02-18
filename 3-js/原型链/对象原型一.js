// 普通对象与函数对象

var o1 = {}; 
var o2 =new Object();
var o3 = new f1();

function f1(){}; 
var f2 = function(){};
var f3 = new Function('str','console.log(str)');

console.log(typeof Object); //function 
console.log(typeof Function); //function  

console.log(typeof f1); //function 
console.log(typeof f2); //function 
console.log(typeof f3); //function   

console.log(typeof o1); //object 
console.log(typeof o2); //object 
console.log(typeof o3); //object

// Object prototype may only be an Object or null: undefined
let a = Object.create(null)
// a: [Object: null prototype] {}
a.n = 1
// a: [Object: null prototype] { n: 1 }
console.log("a:", a)
console.log("a-prototype:", a.prototype)


// 构造函数
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() { alert(this.name) } 
 }
 var person1 = new Person('Zaxlct', 28, 'Software Engineer');
 var person2 = new Person('Mick', 23, 'Doctor');

 console.log(person1.constructor == Person); //true
 console.log(person2.constructor == Person); //true
 console.log(typeof person1.constructor, typeof Person)
 console.log(Object.prototype.toString.call(Person))

//  我们要记住两个概念（构造函数，实例）：
// person1 和 person2 都是 构造函数 Person 的实例
// 一个公式：
// 实例的构造函数属性（constructor）指向构造函数。



// 原型对象
// 在 JavaScript 中，每当定义一个对象（函数也是对象）时候，对象中都会包含一些预定义的属性。
// 其中每个函数对象都有一个prototype 属性，这个属性指向函数的原型对象。
// （先用不管什么是 __proto__ 第二节的课程会详细的剖析）

function Person() {}
Person.prototype.name = 'Zaxlct';
Person.prototype.age  = 28;
Person.prototype.job  = 'Software Engineer';
Person.prototype.sayName = function() {
  alert(this.name);
}
  
for (const key in Person) {
  const element = Person[key];
  console.log("key:", key, element)
}

// class Student {
//   getName(){
      
//   }
// }

// for ( let key in Student ){
//   console.log(keys)
// }
// undefined
// Object.getOwnPropertyNames(Student)
// (3) ['length', 'name', 'prototype']
// Student.prototype
// {constructor: ƒ, getName: ƒ}constructor: class StudentgetName: ƒ getName()[[Prototype]]: Object
// Person.prototype
// {name: 'Zaxlct', age: 28, job: 'Software Engineer', sayName: ƒ, constructor: ƒ}age: 28job: "Software Engineer"name: "Zaxlct"sayName: ƒ ()constructor: ƒ Person()[[Prototype]]: Object


var person1 = new Person();
person1.sayName(); // 'Zaxlct'

var person2 = new Person();
person2.sayName(); // 'Zaxlct'

console.log(person1.sayName == person2.sayName); //true

// 每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性



// 那什么是原型对象呢？
// 我们把上面的例子改一改你就会明白了：

Person.prototype = {
   name:  'Zaxlct',
   age: 28,
   job: 'Software Engineer',
   sayName: function() {
     alert(this.name);
   }
}
// 原型对象，顾名思义，它就是一个普通对象（废话 = =!）。从现在开始你要牢牢记住原型对象就是 Person.prototype ，
// 如果你还是害怕它，那就把它想想成一个字母 A： var A = Person.prototype

// 在上面我们给 A 添加了 四个属性：name、age、job、sayName。其实它还有一个默认的属性：constructor

// 在默认情况下，所有的原型对象都会自动获得一个 constructor（构造函数）属性，这个属性（是一个指针）指向 prototype 属性所在的函数（Person）

// 上面这句话有点拗口，我们「翻译」一下：A 有一个默认的 constructor 属性，这个属性是一个指针，指向 Person。即：

Person.prototype.constructor == Person

// 在上面第二小节《构造函数》里，我们知道实例的构造函数属性（constructor）指向构造函数 ：person1.constructor == Person

// 这两个「公式」好像有点联系：
person1.constructor == Person
Person.prototype.constructor == Person

// person1 为什么有 constructor 属性？那是因为 person1 是 Person 的实例。

// 那 Person.prototype 为什么有 constructor 属性？？同理， Person.prototype （你把它想象成 A） 也是Person 的实例。
// 也就是在 Person 创建的时候，创建了一个它的实例对象并赋值给它的 prototype，基本过程如下：

//  var A = new Person();
//  Person.prototype = A;

// // 注：上面两行代码只是帮助理解，并不能正常运行

// 结论：原型对象（Person.prototype）是 构造函数（Person）的一个实例。

// 原型对象其实就是普通对象（但 Function.prototype 除外，它是函数对象，但它很特殊，
// 他没有prototype属性（前面说道函数对象都有prototype属性））。看下面的例子：

//  function Person(){};
//  console.log(Person.prototype) //Person{}
//  console.log(typeof Person.prototype) //Object
 console.log(typeof Function.prototype) // Function，这个特殊
//  console.log(typeof Object.prototype) // Object
 console.log(typeof Function.prototype.prototype) //undefined

// Function.prototype 为什么是函数对象呢？


//  var A = new Function ();
//  Function.prototype = A;

// 上文提到凡是通过 new Function( ) 产生的对象都是函数对象。因为 A 是函数对象，所以Function.prototype 是函数对象。
// 那原型对象是用来做什么的呢？主要作用是用于继承。举个例子：

  var Person = function(name){
    this.name = name; // tip: 当函数执行时这个 this 指的是谁？
  };
  Person.prototype.getName = function(){
    return this.name;  // tip: 当函数执行时这个 this 指的是谁？
  }
  var person1 = new person('Mick');
  person1.getName(); //Mick

// 从这个例子可以看出，通过给 Person.prototype 设置了一个函数对象的属性，那有 Person 的实例（person1）出来的普通对象就继承了这个属性。
// 具体是怎么实现的继承，就要讲到下面的原型链了。

// null 是一个独立的数据类型，为什么typeof(null)的值是"object"？

// null不是一个空引用, 而是一个原始值, 参考ECMAScript5.1中文版** 4.3.11节; 它只是期望此处将引用一个对象, 注意是"期望", 参考 null - JavaScript**.
// typeof null结果是object, 这是个历史遗留bug, 参考 typeof - JavaScript**
// 在ECMA6中, 曾经有提案为历史平凡, 将type null的值纠正为null, 但最后提案被拒了. 理由是历史遗留代码太多, 不想得罪人, 不如继续将错就错当和事老, 参考 harmony:typeof_null [ES Wiki]


