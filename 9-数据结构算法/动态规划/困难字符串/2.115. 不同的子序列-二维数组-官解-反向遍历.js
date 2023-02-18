// 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

// 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

// 题目数据保证答案符合 32 位带符号整数范围。



// 示例 1：

// 输入：s = "rabbbit", t = "rabbit"
// 输出：3
// 解释：
// 如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
// rabbbit
// rabbbit
// rabbbit
// 示例 2：

// 输入：s = "babgbag", t = "bag"
// 输出：5
// 解释：
// 如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag


// 提示：

// 0 <= s.length, t.length <= 1000
// s 和 t 由英文字母组成

var numDistinct = function (s, t) {
  const m = s.length, n = t.length;

  if (m < n) {
    return 0;
  }
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  //  s[i] 表示 从下标 i 到末尾的子字符串
  //  t[j] 表示 从下标 j 到末尾的子字符串
  //  dp[i][j] 表示在 s[i]的子序列中 t[j]出现的个数。
  

  // 初始化
  for (let i = 0; i <= m; i++) {
    dp[i][n] = 1;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] == t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
      } else {
        dp[i][j] = dp[i + 1][j];
      }
    }
  }

  return dp[0][0];
};




let s = "babgbag", t = "bag";
// 5

console.log(numDistinct(s, t));

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/distinct-subsequences/solutions/661122/bu-tong-de-zi-xu-lie-by-leetcode-solutio-urw3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。