// 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

// 回文字符串 是正着读和倒过来读一样的字符串。

// 子字符串 是字符串中的由连续字符组成的一个序列。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

 

// 示例 1：

// 输入：s = "abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 示例 2：

// 输入：s = "aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 

// 提示：

// 1 <= s.length <= 1000
// s 由小写英文字母组成


/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let dp = new Array(s.length).fill().map(()=>new Array(s.length).fill(false));
  console.log("dp:", dp);

  let count = 0;
  const len = s.length;

  const dp2 = new Array(len);
  for (let i = 0; i < len; i++) {
    dp2[i] = new Array(len).fill(false); // 二维矩阵
  }

  console.log("dp2:", dp2);


  let res = 0;

  // for (let i = 0; i < s.length; i++) {
  //   for (let j = i; j < s.length; j++) {
  //     console.log(s[i], s[j]);
  //     let str = s.slice(i, j+1);
  //     console.log("子串:", str);
   
  //   }
  // }

  for (let j = 0; j < len; j++) { // 注意扫描矩阵的方向，下面会解释
    for (let i = 0; i <= j; i++) {
      if (i == j) {   // 单个字符的情况
        dp[i][j] = true;
        count++;
      } else if (j - i == 1 && s[i] == s[j]) { // 两个字符的情况 
        dp[i][j] = true;
        count++;
      } else if (j - i > 1 && s[i] == s[j] && dp[i + 1][j - 1]) { // 多于两个字符
        dp[i][j] = true;
        count++;
      }
    }
  }
  return count;

  // return res;
};


let s = "aaa";
// 6

// let s = "abc";
// 3

console.log(countSubstrings(s));
