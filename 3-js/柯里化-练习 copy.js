


function add (...arg) {
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
  // fn.toString = () => {
  //   console.log("sum-toString")
  //   return sum;
  // }
  fn.valueOf = () => {
    console.log("sum-valueOf")
    return sum;
  }
  // d.toString()

  // fn.prototype.toString = () => {
  //   return sum;
  // }
  return fn;
}

// let c = add(1)(2);
// console.log(c);

let d = add(1, 2);
console.log("d:", d);
// console.log("d-toString:", d.toString());