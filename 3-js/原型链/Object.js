
// Object两个属性

Object.prototype.constructor








Object.prototype.__proto__

// 已废弃: 该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

// Object.prototype (en-US) 的 __proto__  属性是一个访问器属性（一个 getter 函数和一个 setter 函数）, 
// 暴露了通过它访问的对象的内部[[Prototype]] (一个对象或 null)。

// __proto__ 的读取器 (getter) 暴露了一个对象的内部 [[Prototype]] 。对于使用对象字面量创建的对象，这个值是 Object.prototype (en-US)。
// 对于使用数组字面量创建的对象，这个值是 Array.prototype。对于 functions，这个值是Function.prototype (en-US)。
// 对于使用 new fun 创建的对象，其中 fun 是由 js 提供的内建构造器函数之一 (Array, Boolean, Date, Number, Object, String 等等），
// 这个值总是 fun.prototype。对于用 JS 定义的其他 JS 构造器函数创建的对象，这个值就是该构造器函数的 prototype 属性。

//   __proto__ 的设置器 (setter) 允许对象的 [[Prototype]] 被变更。
//   前提是这个对象必须通过 Object.isExtensible() 判断为是可扩展的，
//   如果不可扩展，则会抛出一个 TypeError 错误。要变更的值必须是一个 object 或null，提供其它值将不起任何作用。

// __proto__ 属性是 Object.prototype (en-US) 一个简单的访问器属性，
// 其中包含了 get（获取）和 set（设置）的方法，任何一个 __proto__ 的存取属性都继承于 Object.prototype (en-US)，
// 但一个访问属性如果不是来源于 Object.prototype (en-US) 就不拥有 __proto__ 属性，
// 譬如一个元素设置了其他的 __proto__ 属性在 Object.prototype (en-US) 之前，将会覆盖原有的 Object.prototype (en-US)。