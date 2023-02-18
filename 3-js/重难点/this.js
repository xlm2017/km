// this的默认绑定, this指向全局对象, foo是直接使用不带任何修饰的函数引用进行调用的,只能使用默认绑定
// 严格模式下, 不能将全局对象用于默认绑定, 会被绑定到undefined上
var a = 2;
function foo() {
  console.log(this.a)
}
foo()
console.log(a)  // 2 // 浏览器宽松模式环境下


