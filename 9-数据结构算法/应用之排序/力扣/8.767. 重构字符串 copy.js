

// 给定一个字符串 s ，检查是否能重新排布其中的字母，使得两相邻的字符不同。

// 返回 s 的任意可能的重新排列。若不可行，返回空字符串 "" 。

 

// 示例 1:

// 输入: s = "aab"
// 输出: "aba"
// 示例 2:

// 输入: s = "aaab"
// 输出: ""
 

// 提示:

// 1 <= s.length <= 500
// s 只包含小写字母

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  let obj = {}
  for(let i = 0; i < s.length; i++){
      obj[s[i]] = obj[s[i]] ? ++obj[s[i]] : 1;
  }
  let len = s.length;
  for(let key in obj){
      if(obj[key] > Math.ceil(len / 2)){
        return "";
      }
  }
  let arr = Object.entries(obj);
  let str = '';
  if(arr.length === 1){
    return s;
  }
  while(true){
   arr.sort((a,b)=>{
      return b[1] - a[1];
   })
   console.log("arr:", arr);
   if(arr[0][1] === 0){
    return str;
   }
   if(arr[1][1] > 0){
       str += arr[0][0]
       str += arr[1][0]
       arr[0][1]--;
       arr[1][1]--;
       continue;
   }
   if(arr[0][1] > 0){
       str += arr[0][0];
       return str;
   }
   
  }
};


let s = 'abbabbaaab';

// ababababab

console.log(reorganizeString(s));


// 暴力, 5% 过