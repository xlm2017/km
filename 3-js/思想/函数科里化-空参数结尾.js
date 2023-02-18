// 函数柯里化概念： 
// 柯里化（Currying）是把接受多个参数的函数转变为接受一个单一参数的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。


// 函数参数个数不定长的柯里化解决方案
function add (...args) {
  return args.reduce((a, b) => a + b)
}

function currying (fn) {
  let args = []
  return function _c (...newArgs) {
    if (newArgs.length) {
      args = [
        ...args,
        ...newArgs
      ]
      return _c
    } else {
      return fn.apply(this, args)
    }
  }
}

let addCurry = currying(add)
// 注意调用方式的变化
console.log(addCurry(1)(2)(3)(4, 5)())

// console.log(addCurry(1)(2)(3)(4, 5)()(1))  // 报错()有过了
console.log(addCurry(1)(2)(3)(4, 5)(1))  // 不正确, 返回的仍然是函数
