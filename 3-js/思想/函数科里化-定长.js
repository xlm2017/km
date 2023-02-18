// 函数柯里化概念： 
// 柯里化（Currying）是把接受多个参数的函数转变为接受一个单一参数的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。


// 定长参数
function add (a, b, c, d) {
  return [
    ...arguments
  ].reduce((a, b) => a + b)
}

function currying (fn) {
  let len = fn.length
  let args = []
  return function _c (...newArgs) {
    // 合并参数
    args = [
      ...args,
      ...newArgs
    ]
    // 判断当前参数集合args的长度是否 < 目标函数fn的需求参数长度
    if (args.length < len) {
      // 继续返回函数
      return _c
    } else {
      // 返回执行结果
      return fn.apply(this, args.slice(0, len))
    }
  }
}
let addCurry = currying(add)
// let total = addCurry(1)(2)(3)(4) // 同时支持addCurry(1)(2, 3)(4)该方式调用
// console.log(total) // 10


// let total2 = addCurry(1)(2)(3)(4)(5) // 同时支持addCurry(1)(2, 3)(4)该方式调用
// console.log(total2) // 定参数长度, 报错了

let total3 = addCurry(1)(2)(3)
console.log(total3) // 长度不够, 返回了函数