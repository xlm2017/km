


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
  const table = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    // 'ABC'.codePointAt(1);          // 66
    // '\uD800\uDC00'.codePointAt(0); // 65536
    // 'XYZ'.codePointAt(42); // undefined
    table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
  }
  for (let i = 0; i < t.length; ++i) {
    table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
    if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
      return false;
    }
  }
  return true;
};

let s = "anagram", t = "nagaram";

console.log(isAnagram(s, t));

// 字母与数字之间的转化

