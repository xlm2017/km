function father () {
  this.name = '狮子'
  this.weight = 400
  this.say = function say () {
    console.log("我是狮子")
  }
}

console.log("has", father.hasOwnProperty('__proto__'));

// console.dir(father)

console.log(father.prototype)
// VM151:11 {constructor: ƒ}constructor: ƒ father()arguments: nullcaller: nulllength: 0name: "father"prototype: {constructor: ƒ}[[FunctionLocation]]: VM151:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2][[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: （…）get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

console.log(father.__proto__)
// VM139:2 ƒ () { [native code] }

let one = new father()

console.log(one.__proto__)
// console.log(one.__proto__)
// VM143:2 {constructor: ƒ}constructor: ƒ father()arguments: nullcaller: nulllength: 0name: "father"prototype: {constructor: ƒ}[[FunctionLocation]]: VM112:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2][[Prototype]]: Object

console.log("实例原型链:", one.__proto__ === father)   // false
console.log("实例原型链:", one.__proto__ === father.prototype.constructor)  // false
console.log("实例原型链:", one.__proto__ === father.__proto__.constructor)  // false
console.log("实例原型链:", one.__proto__ === one.constructor)  // false
console.log("实例原型链:", one.__proto__ === father.constructor)  // false

console.log("实例原型链:", one.__proto__ === father.prototype)  // true



console.log("函数的原型链:", father.__proto__ === Function)  // false
console.log("函数的原型链:", father.__proto__ === Function.constructor)  // false
console.log("函数的原型链:", father.__proto__ === Function.prototype)  // true



console.log("函数的原型:", father.prototype === Function) // false
console.log("函数的原型:", father.prototype === Object)  // false
console.log("函数的原型:", father.prototype === null)   // false
console.log("函数的原型:", father.prototype === father)  // false
console.log("函数的原型:", father.prototype === Object.create(null))  // false
console.log("函数的原型:", father.prototype === Function.constructor) // false
console.log("函数的原型:", father.prototype === father.constructor) // false
console.log("函数的原型:", father.prototype === Object.__proto__)  // false



console.log("函数的构造函数:", father.constructor === father)  // false
console.log("函数的构造函数:", father.constructor === Function) // true

console.log("函数的原型的构造函数:", father.prototype.constructor === father) // true
console.log("函数的原型的构造函数的构造函数:", father.prototype.constructor.constructor === Function) // true
console.log("函数的原型的构造函数的构造函数的原型的构造函数:", father.prototype.constructor.prototype.constructor === father) // true







// Object.prototype (en-US) 的 __proto__  属性
// 是一个访问器属性（一个 getter 函数和一个 setter 函数）, 暴露了通过它访问的对象的内部[[Prototype]] (一个对象或 null)。

// 关键字

// 构造器 (对象模板, 创建对象)
// 实例  (通过构造器或者字面量创建的对象)  
// 访问器属性