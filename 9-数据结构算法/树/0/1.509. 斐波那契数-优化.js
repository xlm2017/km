// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1


/**
 * @param {number} n
 * @return {number}
 */

// 无脑递归, 超时
var fib = function (n) {

  // 记忆化递归, 记忆已经求解的状态
  let arr = new Array(n + 1).fill(-1);
  function f (n) {
    if (n <= 1) {
      return n;
    }
    if (arr[n] != -1) {
      return arr[n];
    }
    let sum = f(n - 1) + f(n - 2);
    arr[n] = sum;
    return sum;
  }
  return f(n);
};

let n1 = 3;
// 2

console.log(fib(n1));