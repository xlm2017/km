// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

 

// 示例 1：

// 输入：s = "bbbab"
// 输出：4
// 解释：一个可能的最长回文子序列为 "bbbb" 。
// 示例 2：

// 输入：s = "cbbd"
// 输出：2
// 解释：一个可能的最长回文子序列为 "bb" 。
 

// 提示：

// 1 <= s.length <= 1000
// s 仅由小写英文字母组成

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  let len = s.length;
  let dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(-1);    
  }
  console.log("dp:", dp);

  let count = 0;
  for(let i = len - 1; i >= 0; i--){
    // for (let j = 0; j < len; j++) {
    for (let j = i; j < len; j++) {
      count++   
      let str = s.slice(i, j + 1);
      // console.log("str:", str, i, j);
      if(str.length === 1){
        dp[i][j] = 1;
      }else if(str.length === 2){
        if(str[0] === str[1]){
          dp[i][j] = 2;
        }else{
          dp[i][j] = 1;
        }
      }else{
        // console.log("str:", str, dp, i, j);
        if(s[i] === s[j]){
          console.log("str:", str, dp, i, j, dp[i-1][j+1]);
          if(i - 1 >=0 && j + 1 < len){
            dp[i][j] = dp[i-1][j+1] + 2;
          }
        }else{
          if(i + 1 < len && j - 1 >= 0){
            dp[i][j] = Math.max(dp[i][j-1], dp[i+1][j]);
          }
        }
      }
    }
  }
  // console.log("count:", count);
  console.log("dp:", dp);

  let arr = dp.flat();
  return Math.max(...arr);
};

let s1 = 'bbbab';
// 4 
// let s1 = 'abbc';

console.log(longestPalindromeSubseq(s1));





// 只有一点可怜的已知信息 ???

// dp[i][j]   //  以 i 开头, 以 j 结尾 的子序列 , 最长的回文序列为 dp[i][j]

// 接着推理

// dp[i-1][j+1]   // 如果两端相等, 则 dp[i-1][j+1] = dp[i][j] + 2;    



// 重点推理第一步
//  dp[i][j]  子序列  ===>  最长的 回文的子序列