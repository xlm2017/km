// 实现一个new
var Dog = function(name) {
  this.name = name
}
Dog.prototype.bark = function() {
  console.log('wangwang')
}
Dog.prototype.sayName = function() {
  console.log('my name is ' + this.name)
}
let sanmao = new Dog('三毛')
sanmao.sayName()
sanmao.bark()

// ...arg 多参数合并为数组
function MyNew(fn, ...arg){
  let obj = Object.create(fn.prototype)
  let res = fn.apply(obj, arg)
  return res instanceof Object ? res : obj
}
let dog = MyNew()


function _new(fn, ...arg) {
  var obj = Object.create(fn.prototype);
  fn.call(obj, ...arg);
  let result = fn();
  return Object.prototype.toString.call(result) == '[object Object]' ? result : obj;
}


/**
 *
 *
 * @param {Function} fn
 */
 function _new(fn, ...args) {
	const obj = {};
	Object.setPrototypeOf(obj, fn.prototype);
	const result = fn.apply(obj, args);
	// 根据规范，返回 null 和 undefined 不处理，依然返回obj
	return result instanceof Object ? result : obj;
}