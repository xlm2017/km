// 一个字符串的 美丽值 定义为：出现频率最高字符与出现频率最低字符的出现次数之差。

// 比方说，"abaacc" 的美丽值为 3 - 1 = 2 。
// 给你一个字符串 s ，请你返回它所有子字符串的 美丽值 之和。

 

// 示例 1：

// 输入：s = "aabcb"
// 输出：5
// 解释：美丽值不为零的字符串包括 ["aab","aabc","aabcb","abcb","bcb"] ，每一个字符串的美丽值都为 1 。
// 示例 2：

// 输入：s = "aabcbaa"
// 输出：17
 

// 提示：

// 1 <= s.length <= 500
// s 只包含小写英文字母。

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
  if(s.length===1){
    return 0;
  }
  let res = [];

  let ans = 0;
  // 以 s[i] 为结尾的子串
  for (let i = 1; i < s.length; i++) {
    
    for (let j = 0; j < i; j++) {
      // 
      let str = s.slice(j, i+1);
      console.log("str:", str, j, i);  

      let obj = {};
      for (let k = 0; k < str.length; k++) {
        if(obj[str[k]]){
          obj[str[k]]++
        }else{
          obj[str[k]] = 1;
        }        
      }
      let arr = Object.values(obj);
      console.log('obj:', obj, arr);
      let max = Math.max(...arr);
      let min = Math.min(...arr);
      console.log('value:', max - min);
      ans = ans + max - min;
    }

  }
  return ans;
};

let s1 = "aabcb";
// 5

console.log(beautySum(s1));

// 超出输出限制