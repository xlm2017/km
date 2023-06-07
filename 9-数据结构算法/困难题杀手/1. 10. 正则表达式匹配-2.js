/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-04-19 14:19:12
 * @LastEditTime: 2023-04-21 14:37:47
 * @LastEditors: xlm
 */



// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

 
// 示例 1：

// 输入：s = "aa", p = "a"
// 输出：false
// 解释："a" 无法匹配 "aa" 整个字符串。
// 示例 2:

// 输入：s = "aa", p = "a*"
// 输出：true
// 解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
// 示例 3：

// 输入：s = "ab", p = ".*"
// 输出：true
// 解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 

// 提示：

// 1 <= s.length <= 20
// 1 <= p.length <= 20
// s 只包含从 a-z 的小写字母。
// p 只包含从 a-z 的小写字母，以及字符 . 和 *。
// 保证每次出现字符 * 时，前面都匹配到有效的字符


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s == null || p == null) return false;

  const sLen = s.length, pLen = p.length;

  const dp = new Array(sLen + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
  }
  // base case
  dp[0][0] = true;
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
  }
  // 迭代
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {

      if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == "*") {
        if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
};


// let s = 'aa';
// let p = 'a*';
// true

// let s = 'aab';
// let s = 'aaaaaabc';
let s = 'aaaaaabcd';
let p = 'a*bc';


console.log(isMatch(s, p)); 


