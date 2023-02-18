
// 需求的原始版本
const getSum = (a, b, c) => {
  let res = a + b + c;
  console.log('res:', res);
  return res;
};


var fn = function () {
  console.log(arguments);
  return fn.bind(null, ...arguments);
  // 如果没有es6的话我们可以这样写：
  // return Function.prototype.bind.apply(fn, [null].concat(
  //   Array.prototype.slice.call(arguments)
  // ));
}

fb = fn(1); //[1]
fb = fb(2); //[1, 2]
fb = fb(3); //[1, 2, 3]
fb = fb(4); //[1, 2, 3, 4]