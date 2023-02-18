// 给你一个混合字符串 s ，请你返回 s 中 第二大 的数字，如果不存在第二大的数字，请你返回 - 1 。

// 混合字符串 由小写英文字母和数字组成。



// 示例 1：

// 输入：s = "dfa12321afd"
// 输出：2
// 解释：出现在 s 中的数字包括[1, 2, 3] 。第二大的数字是 2 。
// 示例 2：

// 输入：s = "abc1111"
// 输出：-1
// 解释：出现在 s 中的数字只包含[1] 。没有第二大的数字。


// 提示：

// 1 <= s.length <= 500
// s 只包含小写英文字母和（或）数字。



/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let max1 = null;
  let max2 = null;
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(parseFloat(s[i]))) {
      if (max1 !== null) {
        if (max2 !== null) {
          if (s[i] * 1 > max1) {
            max2 = max1;
            max1 = s[i] * 1;
          } else if (s[i] * 1 === max1) {
            continue;
          } else if (s[i] * 1 > max2) {
            max2 = s[i] * 1;
          }
        } else {
          if (s[i] * 1 > max1) {
            max2 = max1;
            max1 = s[i] * 1;
          }
        }
      } else {
        max1 = s[i] * 1;
      }
    }
  }
  return max2 === null ? -1 : max2;
};

// let s1 = 'dfa12321afd'
// let s1 = 'ck077'


let s1 = 'sjhtz8344'

console.log(secondHighest(s1));