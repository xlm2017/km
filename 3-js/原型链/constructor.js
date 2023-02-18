
// 所有对象（使用 Object.create(null) 创建的对象除外）都将具有 constructor 属性。
// 在没有显式使用构造函数的情况下，创建的对象（例如对象和数组文本）将具有 constructor 属性，这个属性指向该对象的基本对象构造函数类型。

const o = {}
o.constructor === Object // true

const o1 = new Object
o1.constructor === Object // true

const a = []
a.constructor === Array // true

const a1 = new Array
a1.constructor === Array // true

const n = new Number(3)
n.constructor === Number // true
