// 一个正整数如果能被 a 或 b 整除，那么它是神奇的。

// 给定三个整数 n , a , b ，返回第 n 个神奇的数字。因为答案可能很大，所以返回答案 对 10^9 + 7 取模 后的值。



// 示例 1：

// 输入：n = 1, a = 2, b = 3
// 输出：2
// 示例 2：

// 输入：n = 4, a = 2, b = 3
// 输出：6


// 提示：

// 1 <= n <= 10^9
// 2 <= a, b <= 4 * 10^4


/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  let MOD = 10 ** 9 + 7;
  if (a === b) {
    return (a * n) % MOD;
  } else {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    if (max % min === 0) {
      return Math.min(min * n) % MOD;
    } else {
      // 两个数互质, 需要排除掉公倍数

      // 也不一定互斥, 例于 6, 8

    }
  }
};
let n = 5, a = 2, b = 3;
// 8
// 2, 3, 4, 6, 8, 9, 10, 12


// let n = 5, a = 2, b = 4;
// 2, 4, 6, 8, 10
// 10
console.log("结果:", nthMagicalNumber(n, a, b));

console.log(2 % 3);  // 2


// 执行超时

