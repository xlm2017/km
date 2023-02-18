// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。



// 示例 1：

// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。
// 示例 2：

// 输入：text1 = "abc", text2 = "abc"
// 输出：3
// 解释：最长公共子序列是 "abc" ，它的长度为 3 。
// 示例 3：

// 输入：text1 = "abc", text2 = "def"
// 输出：0
// 解释：两个字符串没有公共子序列，返回 0 。


// 提示：

// 1 <= text1.length, text2.length <= 1000
// text1 和 text2 仅由小写英文字符组成。


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {


  // 子序列, 特征刻画, 推理

  // 状态定义
  // dp[i][j] 状态表示: text1 中 text1.substring(0, i)的子串的最大公共子序列
  // dp[i][j] 状态表示: text2 中 text2.substring(0, j)的子串的最大公共子序列
  // 表示结果值,  最大的子序列长度

  // 状态初始值
  // dp[0][0] = 0
  // dp[0][j] = 0
  // dp[i][0] = 0

  // 状态转移推理
  // dp[i][j] = Math.Max(dp[i][j-1], dp[i-1][j], dp[i - 1][j - 1] + 1)


  let dp = new Array(text1.length + 1).fill().map(() => new Array(text2.length + 1).fill(0));
  console.log("初始化dp:", dp);

  for (let i = 0; i <= text1.length; i++) {
    for (let j = 0; j <= text2.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else {
        if (text1[i - 1] === text2[j - 1]) {
          dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1] + 1);
          // console.log("相等:", i, j, dp[i][j]);
        } else {
          dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
          // console.log("不相等:", i, j, dp[i][j]);
        }
      }
    }
  }
  return dp[text1.length][text2.length];
};

let str1 = 'abcde';
let str2 = 'ace';


// let str1 = 'abc';
// let str2 = 'def';
console.log("最大长度:", longestCommonSubsequence(str1, str2));