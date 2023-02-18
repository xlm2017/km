// 给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。

// 每步 可以删除任意一个字符串中的一个字符。



// 示例 1：

// 输入: word1 = "sea", word2 = "eat"
// 输出: 2
// 解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
// 示例  2:

// 输入：word1 = "leetcode", word2 = "etco"
// 输出：4


// 提示：

// 1 <= word1.length, word2.length <= 500
// word1 和 word2 只包含小写英文字母


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

  // 类似1143题, 最长公共子序列

  const m = word1.length, n = word2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    const c1 = word1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = word2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  const lcs = dp[m][n];
  return m - lcs + n - lcs;

  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/delete-operation-for-two-strings/solutions/1015796/liang-ge-zi-fu-chuan-de-shan-chu-cao-zuo-14uw/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

};


let word1 = "sea", word2 = "eat";
// 2

console.log(minDistance(word1, word2));