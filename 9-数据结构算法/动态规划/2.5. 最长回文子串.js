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
  // 暴力法, 找出所有的子串组合, 先找长串
  // 类似滑动窗口
  if (s.length == 1) {
    return s;
  }
  let res = [];
  function calcSub (str) {
    let len = str.length;
    let res = [];
    while (len > 1) {
      for (let i = 0; i < str.length; i++) {
        if (str.length >= len + i) {
          res.push(str.slice(i, len + i));
        } else {
          len--;
          break;
        }
      }
    }

    return res;
  }
  res = calcSub(s);
  let flag = false
  console.log("结果:", res);
  for (let i = 0; i < res.length; i++) {
    const element = res[i];
    let index = 0;
    let len = element.length;
    while (index < Math.floor(len / 2)) {
      console.log("element:", element);
      if (element[index] !== element[len - 1 - index]) {
        break;
      } else {
        console.log("比较:", i, element[index], element[len - 1 - index], index, len);
        index++
        if (len % 2 === 0) {
          if (index > Math.floor((len - 1) / 2)) {
            return element;
          }
        } else {
          if (index === Math.floor((len - 1) / 2)) {
            return element;
          }
        }
        // if (index > Math.floor((len - 1) / 2)) {
        //   console.log("返回符合条件的:", index);
        //   flag = true
        //   return element;
        // }
      }
    }
  }
  if (!flag) {
    return s[0];
  }
};



let str2 = 'cabbadec';
console.log(str2.slice(0, 1), str2.slice(-1));         // c  c
console.log(str2.slice(1, 2), str2.slice(-2, -1));     // a  e


// let str = 'cbbd';
// let str = 'cabbadec';
let str = 'babad';   // bab
console.log("最大长度:", longestPalindrome(str));








let str3 = 'cabbadec';

function calcSub (str) {
  let len = str.length;
  let res = [];
  while (len > 1) {
    for (let i = 0; i < str.length; i++) {
      if (str.length >= len + i) {
        res.push(str.slice(i, len + i));
      } else {
        len--;
        break;
      }
    }
  }

  return res;
}

// console.log("计算子串:", calcSub(str3));