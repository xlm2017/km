// 给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。

 

// 示例 1：

// 输入：n = 10
// 输出：4
// 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
// 示例 2：

// 输入：n = 0
// 输出：0
// 示例 3：

// 输入：n = 1
// 输出：0
 

// 提示：

// 0 <= n <= 5 * 106

var countPrimes = function(n) {
  const isPrime = new Array(n).fill(1);
  const primes = [];
  for (let i = 2; i < n; ++i) {
      if (isPrime[i]) {
          primes.push(i);
      }
      for (let j = 0; j < primes.length && i * primes[j] < n; ++j) {
          isPrime[i * primes[j]] = 0;
          if (i % primes[j] === 0) {
              break;
          }
      }
  }
  return primes.length;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/count-primes/solutions/507273/ji-shu-zhi-shu-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


