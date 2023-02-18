

// let total = addCurry(1)(2)(3)(4) // 同时支持addCurry(1)(2, 3)(4)该方式调用


// let total = add(1)(2)(3)(4) // 同时支持addCurry(1)(2, 3)(4)该方式调用

// 不定长函数

function addFun (...arg) {
  console.log(arg);
  // [1,2,3]
}

addFun(1, 2, 3);