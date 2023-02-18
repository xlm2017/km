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
  let arr = [];
  let total = 0;
  // let searchMap = {};
  for (let i = 0; i < words.length; i++) {
    const element = words[i];

    // for (let j = 0; j < element.length - 1; j++) {
    //   const ch1 = element[j];
    //   const ch2 = element[j + 1];
    //   if (s.indexOf(ch1) === -1) {
    //     continue;
    //   }
    //   if (!searchMap[ch1]) {
    //     searchMap[ch1] = j;
    //   }
    //   if (s.indexOf(ch1) >= s.indexOf(ch2)) {
    //     sum--
    //     break;
    //   }
    // }


    // 双指针
    let j = 0;
    let z = 0;
    let searchMap = {};
    while (z < element.length) {
      if (!searchMap[element[z]]) {
        searchMap[element[z]] = 0
      } else {
        searchMap[element[z]] = z + 1
      }
      if (s.indexOf(element[z], searchMap[element[j]]) === -1) {
        console.log("sum--", j, z);
        sum--;
        break;
      }
      let index = s.indexOf(element[j], searchMap[element[j]]);
      j = index;
      z++;
    }
    // arr.push(element);
  }
  // console.log(arr);
  return sum;
};

let s1 = "abcde";
let words1 = ["a", "bb", "acd", "ace"];
// 3 "a", "acd", "ace"。
// console.log(numMatchingSubseq(s1, words1));


let s2 = "dsahjpjauf";
let words2 = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"];
// 3 "a", "acd", "ace"。
console.log(numMatchingSubseq(s2, words2));