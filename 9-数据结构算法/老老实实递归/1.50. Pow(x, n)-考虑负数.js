// 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。



// 示例 1：

// 输入：x = 2.00000, n = 10
// 输出：1024.00000
// 示例 2：

// 输入：x = 2.10000, n = 3
// 输出：9.26100
// 示例 3：

// 输入：x = 2.00000, n = -2
// 输出：0.25000
// 解释：2-2 = 1/22 = 1/4 = 0.25


// 提示：

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n 是一个整数
// 要么 x 不为零，要么 n > 0 。
// -104 <= xn <= 104



/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0 || n == 1) {
    return n == 0 ? 1 : x
  } else if (n < 0) {
    return myPow(1 / x, Math.abs(n))
  } else {
    return n % 2 == 0 ? myPow(x * x, n / 2) : myPow(x * x, Math.floor(n / 2)) * x
  }
};


// let x = 2.10000, n = 3
// 输出：9.26100


let x = 2.00000, n = -2;
// 0.25

console.log(myPow(x, n));