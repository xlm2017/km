const _ = require('lodash');
const getSum = (a, b, c) => {
  return a + b + c;
};
console.log("lodash-curry:", _.curry);

const curried = _.curry(getSum);
console.log("curry后的新函数:", curried);

console.log(curried(1, 2, 3)); // 6
console.log(curried(1, 2)(3)); // 6
console.log(curried(1)(2)(3)); // 6


// 参数长度固定了, 超过四个参数了就会报错
console.log(curried(1, 2, 3, 4)); // 第四个参数不会被加进去

// console.log(curried(1)(2)(3)(4)); // 报错





// 柯里化解析
function curry (fn) {
  return function curryFn (...args) {
    // 判断实参和形参个数
    // 传递给curry参数小于fn参数时 返回一个函数并存储实参
    if (args.length < fn.length) {
      return function () {
        return curryFn(...args, ...arguments)
      };
    };
    return fn(...args);
  };
}
