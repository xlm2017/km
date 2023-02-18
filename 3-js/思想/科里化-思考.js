

// let total = addCurry(1)(2)(3)(4) // 同时支持addCurry(1)(2, 3)(4)该方式调用


// let total = add(1)(2)(3)(4) // 同时支持addCurry(1)(2, 3)(4)该方式调用

// 不定长函数

// function addFun (...arg) {
//   console.log(arg);
//   // [1,2,3]
//   return arg.reduce((total, item) => {
//     return total + item;
//   })
// }

// let res = addFun(1, 2, 3);
// console.log('res:', res);
// 6


// let add = fun();

// fun()的返回值, 可能是一个数值, 也可能是一个函数

function fun (...arg1) {
  console.log('arguments:', arguments);
  // arguments: [Arguments] { '0': 1, '1': 2, '2': 3 }
  console.log('arguments-array:', Array.from(arguments));
  console.log('arg1:', arg1);
  // 定义一个累加函数
  function add1 (arg) {
    // console.log('add1', arg);
    // // [1,2,3]
    // return arg.reduce((total, item) => {
    //   return total + item;
    // })
    if (arg.length > 1) {
      // return arg.reduce((total, item) => {
      //   return total + item;
      // })

    } else {

    }
  }

  // 函数目标, 将多个参数拆分为一个一个的

  // 如何判断 返回数字还是函数
  return add1(arg1);
}



let total3 = fun(1, 2, 3)   // 6
// console.log('total3:', total3);
// let total4 = fun(1)(2)(3)   // 6
// console.log('total4:', total4);


function addTwo (a) {
  return function (b) {
    return a + b;
  }
  // 有几次()调用, 就有几层
}

function addTwo2 (...arg1) {
  let a = arg1.reduce((total, item) => {
    return total + item;
  })
  return function (...arg2) {
    let b = arg2.reduce((total, item) => {
      return total + item;
    })
    return a + b;
  }
  // 有几次()调用, 就有几层函数
}

console.log('addTwo:', addTwo(1)(2));
// 3

console.log('addTwo-3:', addTwo2(1, 2)(3));
// 6

// 表达式可能返回数值, 可能返回函数, 取决于某个隐含条件, 一旦满足, 就可以返回数值了

// 找出这个隐含的终止返回函数的条件, 就可以表示套娃结束了, 类似递归终止


// 找到 - 最后一个调用者   ==>  统计有几个调用者   (无法统计)

// 最后一次调用, 有哪些特征? 有哪些性质? 有哪些状态?

// 如何证明函数最后一次调用 ? 

// 函数调用完之后, 如何判断 ? 