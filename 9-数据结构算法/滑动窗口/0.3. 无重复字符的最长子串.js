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

  console.log("原字符串:", s);
  if (s.length < 2) {
    return s.length;
  }

  // 滑动窗口前指针
  let k = 0;
  let maxLen = 1;
  let sum = 1;
  for (let i = 1; i < s.length; i++) {
    const element = s[i];
    let sub = s.slice(k, i);
    console.log("子串定位:", k, i, sub);
    let index = sub.indexOf(element)
    if (index === -1) {
      sum++;
    } else {
      if (maxLen < sum) {
        maxLen = sum;
      }
      sum = i - k - index;
      k = k + index + 1;
    }
    console.log("当前子串:", i, sub, element, k, sum, maxLen);
  }
  if (maxLen < sum) {
    maxLen = sum;
  }
  return maxLen;
};

let str = 'pwwkew';  // 3
str = 'bbbbb';
str = 'abcabcbb';   // 3
str = 'au';   // 2
str = 'blqsearxxxbiwqa';   // 8

console.log("pwwkew:", lengthOfLongestSubstring('pwwkew'));
console.log("bbbbb:", lengthOfLongestSubstring('bbbbb'));
console.log("au:", lengthOfLongestSubstring('au'));
console.log("blqsearxxxbiwqa:", lengthOfLongestSubstring('blqsearxxxbiwqa'));
