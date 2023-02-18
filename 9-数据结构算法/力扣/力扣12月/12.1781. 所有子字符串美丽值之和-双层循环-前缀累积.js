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
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let obj = {};
    if(obj[s[i]]){
      obj[s[i]]++;
    }else{
      obj[s[i]] = 1;
    }
    for (let j = i + 1; j < s.length; j++) {
      let str = s.slice(i, j + 1);
      if(obj[s[j]]){
        obj[s[j]]++;
      }else{
        obj[s[j]] = 1;
      }
      // console.log('str:', str);
      // console.log('obj:', obj);

      let max = 1;
      let min = 0;
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          const element = obj[key];
          if(element > max){
            max = element;
          }
          if(!min){
            min = element;
          }
          if(element < min){
            min = element;
          }
        }
      }
      sum = sum + (max - min);
      // console.log('美丽子串:', str, max, min);

    }
    // console.log('\n');
  }

  return sum;
};

let s1 = "aabcb";
// 5

console.log(beautySum(s1));
