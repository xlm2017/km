// 给你一个字符串 s，找到 s 中最长的回文子串。

// 回文的定义 正读和反读都相同的字符序列为“回文”，
// 如“abba”、“abccba”是“回文”，“abcde”和“ababab”则不是“回文”。


// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"


// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 中心扩散法

  let res = s[0];
  for (let i = 1; i < s.length; i++) {
    let index = 1;
    // 以 element 为中心, 奇数子串
    console.log("当前循环:", s, i, s[i], (i - index) >= 0 && (i + index) <= s.length - 1);
    while ((i - index) >= 0 && (i + index) <= s.length - 1) {
      if (s[i - index] === s[i + index]) {
        let str1 = s.slice(i - index, i + index + 1);
        console.log("奇数-新的值:", str1);
        if (str1.length > res.length) {
          res = str1;
        }
        index++;
      } else {
        console.log("退出循环");
        break;
      }
    }
  }

  for (let i = 0; i < s.length; i++) {
    let index = 1;
    // 以element 以及element右侧相邻的元素为中心, 偶数子串
    while (index >= 0 && (i + index) <= s.length - 1) {
      if (s[index] === s[i + index]) {
        let str1 = s.slice(index, i + index + 1);
        console.log("偶数-新的值:", str1);
        if (str1.length > res.length) {
          res = str1;
        }
        index++;
      } else {
        break;
      }
    }
  }

  return res;
};



// let str = 'cbbd';
let str = 'cabbadec';   // abba
// let str = 'babad';   // bab
// let str = '"bb"';   // bb
console.log("最大的长度:", longestPalindrome(str));






