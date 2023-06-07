

// 当一个字符串 s 包含的每一种字母的大写和小写形式 同时 出现在 s 中，就称这个字符串 s 是 美好 字符串。
// 比方说，"abABB" 是美好字符串，因为 'A' 和 'a' 同时出现了，且 'B' 和 'b' 也同时出现了。
// 然而，"abA" 不是美好字符串因为 'b' 出现了，而 'B' 没有出现。

// 给你一个字符串 s ，请你返回 s 最长的 美好子字符串 。如果有多个答案，请你返回 最早 出现的一个。
// 如果不存在美好子字符串，请你返回一个空字符串。



// 示例 1：

// 输入：s = "YazaAay"
// 输出："aAa"
// 解释："aAa" 是一个美好字符串，因为这个子串中仅含一种字母，其小写形式 'a' 和大写形式 'A' 也同时出现了。
// "aAa" 是最长的美好子字符串。
// 示例 2：

// 输入：s = "Bb"
// 输出："Bb"
// 解释："Bb" 是美好字符串，因为 'B' 和 'b' 都出现了。整个字符串也是原字符串的子字符串。
// 示例 3：

// 输入：s = "c"
// 输出：""
// 解释：没有美好子字符串。
// 示例 4：

// 输入：s = "dDzeE"
// 输出："dD"
// 解释："dD" 和 "eE" 都是最长美好子字符串。
// 由于有多个美好子字符串，返回 "dD" ，因为它出现得最早。


// 提示：

// 1 <= s.length <= 100
// s 只包含大写和小写英文字母。


/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  let start = s.length;  // 目标子串的起始位置
  let maxLength = 1;   // 最长的目标子串

  let left = 0, right = 0;

  let arr = [];  // 当前窗口
  for (; right < s.length; right++) {
    arr.push(s[right]);
    let str = s.substring(left, right + 1);
    console.log("str:", str); 

    if(str.length > 1){
      if(str.length > maxLength){
        // let set = new Set();
        // for (let k = 0; k < str.length; k++) {
        //   set.add(str[k].charCodeAt());     
        // }
        // console.log('初始:', arr[0], start);
        while (true) {
          let startNum = arr[0].charCodeAt();
          let isSame = arr.every((item, index)=>{
            return Math.abs(startNum - item.charCodeAt()) === 32 || Math.abs(startNum - item.charCodeAt()) === 0;
          })
          if(isSame){
            if(arr.length > maxLength){
              start = left;
              maxLength = arr.length;
              // console.log("相同:", start, maxLength);
            }
            break;
          }
          // 移除第一个
          arr.shift();
          left++;
        }
      }
    }
  }
  
  console.log("结果:", start, maxLength);
  if(start === s.length) return "";
  return s.substring(start, start + maxLength);
};


// let s = "YazaAay";
// "aAa"

let s = "cChH";
// "cChH"


console.log(longestNiceSubstring(s));