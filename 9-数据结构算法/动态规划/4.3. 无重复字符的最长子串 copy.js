// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。



// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
// 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


// 提示：

// 0 <= s.length <= 5 * 10^4
// s 由英文字母、数字、符号和空格组成

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) {
    return s.length;
  }
  let maxLen = 1;
  let dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0));
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j >= i && j < s.length; j++) {
      console.log(i, j);
      if (i === j) {
        dp[i][j] = true;
      } else {
        if (dp[i][j - 1] === true) {
          if (s.slice(i, j).indexOf(s[j]) === -1) {
            // if (s[i] !== s[j]) {
            if (maxLen < j - i + 1) {
              maxLen = j - i + 1
            }
            dp[i][j] = true
          } else {
            dp[i][j] = false
            break;
          }
        } else {
          dp[i][j] = false;
          break;
        }
      }
    }
  }
  return maxLen;
};



// let str = 'pwwkew';
// let str = 'bbbbb';
let str = 'abcabcbb';
console.log("最大无重复子串:", lengthOfLongestSubstring(str));