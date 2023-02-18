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
  // 动态规划解决
  let len = s.length
  if (s.length <= 1) {
    return s;
  }
  // let arr = [len][len];   // 初始化一个二维数组容器

  // 引用类型的数据结构, 改值会有问题
  // var dp = new Array(len).fill(new Array(len).fill(-1));

  // 初始化二维数组
  let dp = new Array(len).fill().map(() => new Array(len).fill(-1));

  console.log("初始化值:", dp)
  let maxStr = s[0];
  for (let j = 0; j < s.length; j++) {
    for (let i = j; i >= 0; i--) {
      if (i === j) {
        console.log("相等:", i, j)
        dp[i][j] = true;
      } else if (j - i === 1) {
        // 说明只有两个数, 只需要比较一次
        console.log("只有两个字符:", s.slice(i, j + 1), i, j);
        if (s[i] === s[j]) {
          if (maxStr.length < j + 1 - i) {
            maxStr = s.slice(i, j + 1)
          }
          dp[i][j] = true;
          console.log("两个字符比较-相等:", i, j, dp[i][j]);
        } else {
          dp[i][j] = false;
        }
      } else {
        console.log("多字符比较:", i, j, s[i], s[j]);
        // 查看上一次的比较结果
        console.log("查看上一次的比较结果:", dp[i + 1][j - 1]);
        if (dp[i + 1][j - 1] === true) {
          if (s[i] === s[j]) {
            if (maxStr.length < j + 1 - i) {
              maxStr = s.slice(i, j + 1)
            }
            dp[i][j] = true;
          } else {
            dp[i][j] = false;
          }
        } else {
          dp[i][j] = false;
        }
      }
    }
  }
  console.log("最大回文子串:", maxStr);
  return dp;
};



let str = 'cbbd';
// let str = 'cabbadec';   // abba
// let str = 'babad';   // bab
// let str = 'bb';   // bb
console.log("最大的长度:", longestPalindrome(str));




