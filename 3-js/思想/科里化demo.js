
// 需求的原始版本
const getSum = (a, b, c) => {
  let res = a + b + c;
  console.log('res:', res);
  return res;
};

getSum(1, 2, 3);



// n 表示参数个数, 临时使用版本
function getSum2 (...arg) {
  let length = arg.length;

}

// getSum2(1)(2)(3);
// getSum2(1, 2)(3);
// getSum2(1)(2, 3);





// 抽象封装, 通用版本
function curry (fn) {

}

let getSum3 = curry(getSum);


// getSum3(1)(2)(3);
// getSum3(1, 2)(3);
// getSum3(1)(2, 3);