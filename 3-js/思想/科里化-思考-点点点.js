

// let total = addCurry(1)(2)(3)(4) // 同时支持addCurry(1)(2, 3)(4)该方式调用


// let total = add(1)(2)(3)(4) // 同时支持addCurry(1)(2, 3)(4)该方式调用

// 不定长函数

function addFun (...arg) {
  console.log('参数:', arg);
  // [1,2,3]
  return arg.reduce((total, item) => {
    return total + item;
  })
}

let res = addFun(1, 2, 3);
console.log('res:', res);
// 6


