// 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。

// 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

 

// 示例 1:

// 输入:s = "abccccdd"
// 输出:7
// 解释:
// 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
// 示例 2:

// 输入:s = "a"
// 输入:1
// 示例 3：

// 输入:s = "aaaaaccc"
// 输入:7
// 提示:

// 1 <= s.length <= 2000
// s 只由小写 和/或 大写英文字母组成

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if(!obj[s[i]]){
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }   
  }
  let arr = Object.values(obj).sort((a,b)=>b-a);
  
  // console.log(arr);
  
  let sum = 0;
  let first = true;
  let second = true;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
      sum = sum + arr[i];
    } else {
      if(first){
        sum = sum + arr[i];
        first = false;
      }else{
        sum = sum + arr[i] - 1;
        second = false;
      }
    }
  }
  return sum;
};

let s1 = 'abccccdd';

console.log(longestPalindrome(s1));