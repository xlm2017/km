


// https://leetcode.cn/problems/valid-anagram/

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

 

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false
 

// 提示:

// 1 <= s.length, t.length <= 5 * 104
// s 和 t 仅包含小写字母

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length){
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    if(obj1[s[i]]){
      obj1[s[i]]++;
    }else{
      obj1[s[i]] = 1;
    }    
    if(obj2[t[i]]){
      obj2[t[i]]++;
    }else{
      obj2[t[i]] = 1;
    }    
  }
  // console.log(obj1, obj2);
  // console.log(JSON.stringify(obj1));

  // 顺序不同的原因
  // return JSON.stringify(obj1) === JSON.stringify(obj2);
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {
      if(!obj2[key] || obj1[key] !== obj2[key]){
        return false;
      }
    }
  }
  return true;
};

let s = "anagram", t = "nagaram";

console.log(isAnagram(s, t));