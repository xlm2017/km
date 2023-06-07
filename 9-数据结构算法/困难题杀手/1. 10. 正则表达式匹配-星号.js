/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-04-19 14:19:12
 * @LastEditTime: 2023-04-19 18:37:32
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
  let sLength = s.length;
  let pLength = p.length;
  let dp = new Array(sLength).fill(new Array(pLength).fill(false));
  for (let i = 0; i < sLength; i++) {
    for (let j = 0; j < pLength; j++) {
      if(i - 1 >= 0 && dp[i-1][j-1] === false){
        dp[i][j] = false;
        continue;
      }  
      if(s[i] !== p[j]){
        if(p[j] === '*'){
          dp[i][j] = true;
          // j++;
        }
      }else{
        dp[i][j] = true;
      }   
    }
  }
  console.log("dp:", dp);
  return dp[sLength - 1][pLength - 1];
};


// let s = 'aa';
// let p = 'a*';
// true

// let s = 'aab';
// let s = 'aaaaaabc';
let s = 'aaaaaabcd';
let p = 'a*bc';


console.log(isMatch(s, p)); 


