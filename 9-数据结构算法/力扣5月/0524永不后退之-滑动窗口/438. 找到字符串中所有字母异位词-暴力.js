// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。



// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//  示例 2:

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。


// 提示:

// 1 <= s.length, p.length <= 3 * 104
// s 和 p 仅包含小写字母


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

  // 目标起始索引
  let res = [];
  let len = p.length;
  
  // 异构词判断, 哈希
  let obj = {};
  // 字符的种类
  let kindNum = 0;
  for (let i = 0; i < p.length; i++) {
    if(obj[p[i]]){
      obj[p[i]]++;
    }else{
      obj[p[i]] = 1;
      kindNum++;
    }    
  }
  // console.log("初始状态:", obj, kindNum);

  function isOk(str) {
    let obj2 = {};
    // 字符的种类
    let kindNum2 = 0;
    for (let i = 0; i < str.length; i++) {
      if(obj2[str[i]]){
        obj2[str[i]]++;
      }else{
        obj2[str[i]] = 1;
        kindNum2++;
      }    
    }
    // console.log("str:", str, obj, obj2);
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        if(obj2[key] !== element){
          return false;
        }
      }
    }
    return true;
  }

  for (let i = len - 1; i < s.length; i++) {
    let str = s.substring(i - len + 1, i + 1);
    // console.log("str:", str);
    if(isOk(str)){
      res.push(i - len + 1);
    }
  }
  return res;
};


// let s = "cbaebabacd", p = "abc";
// [0,6]

// let s = "abab", p = "ab";
// [0, 1, 2]

let s = "cbaebabacd", p = "abc";
// [0,6]

console.log(findAnagrams(s, p));