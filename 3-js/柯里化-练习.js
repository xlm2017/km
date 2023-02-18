// 实现函数
// add(1); 	// 1
// add(1)(2);  	// 3
// add(1)(2)(3);  // 6
// add(1)(2, 3);   // 6
// add(1, 2)(3);   // 6
// add(1, 2, 3);   // 6




function add (...arg) {
  console.log("arg:", arg);
  return function add (...arg2) {
    console.log("arg2:", arg2);
  }
}

function add2 (...arg) {
  let sum = arg.reduce((total, item) => {
    return total + item;
  }, 0)
  function fn (...arg2) {
    let pre = 0;

    let sum2 = arg2.reduce((total, item) => {
      return total + item;
    }, 0)
    console.log("调用者:", sum2);
    return sum2 + pre;
  }
  fn.toString = () => {
    console.log("sum-toString")
    return sum;
  }
  // d.toString()

  // fn.prototype.toString = () => {
  //   return sum;
  // }
  return fn;
}

// let a = add(1, 2, 3);
// let b = add(1)(2);
// console.log(b);

// let c = add2(1)(2);
// console.log(c);

let d = add2(1, 2);
console.log("d:", d);
// console.log("d-toString:", d.toString());