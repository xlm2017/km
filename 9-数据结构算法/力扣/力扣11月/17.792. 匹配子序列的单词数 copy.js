// 给定字符串 s 和字符串数组 words, 返回  words[i] 中是s的子序列的单词个数 。

// 字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是none)，而不改变其余字符的相对顺序。

// 例如， “ace” 是 “abcde” 的子序列。


// 示例 1:

// 输入: s = "abcde", words = ["a","bb","acd","ace"]
// 输出: 3
// 解释: 有三个是 s 的子序列的单词: "a", "acd", "ace"。
// Example 2:

// 输入: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
// 输出: 2


// 提示:

// 1 <= s.length <= 5 * 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 50
// words[i]和 s 都只由小写字母组成。

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let sum = words.length;
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    // 双指针
    // 母板字符串的下标
    let j = 0;
    // 目标字符串的下标
    let z = 0;
    while (z < element.length) {
      let index = s.indexOf(element[z], j)
      if (index === -1) {
        console.log("sum--", j, z);
        sum--;
        break;
      } else {
        j = index + 1
      }
      z++;
    }
  }
  return sum;
};

let s1 = "abcde";
// let words1 = ["bb"];
let words1 = ["a", "bb", "acd", "ace"];
// 3 "a", "acd", "ace"。
console.log(numMatchingSubseq(s1, words1));


let s2 = "dsahjpjauf";
let words2 = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];
// 3 "a", "acd", "ace"。
// console.log(numMatchingSubseq(s2, words2));