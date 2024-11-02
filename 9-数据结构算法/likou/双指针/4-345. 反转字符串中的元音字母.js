// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

 

// 示例 1：

// 输入：s = "hello"
// 输出："holle"
// 示例 2：

// 输入：s = "leetcode"
// 输出："leotcede"
 

// 提示：

// 1 <= s.length <= 3 * 105
// s 由 可打印的 ASCII 字符组成




/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let l = -1, r = s.length;
  s = s.split("");
  let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  while (++l < --r) {
    while (l < r && !set.has(s[l])) {
      l++
    }
    while (l < r && !set.has(s[r])) {
      r--;
    }
    if(l < r){
      [s[l], s[r]] = [s[r], s[l]]
    }
  }
  return s.join("");
};

let s = "hello"
// 输出："holle"

console.log(reverseVowels(s))





/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels2 = function(s) {
  let i =0;
  const arr = Array.from(s);
  let j = s.length-1
  while(i<j){
      while(i<s.length && !isVowel(arr[i])){
          ++i;
      }
      while(j>0 && !isVowel(arr[j])){
          --j;
      }
      if (i < j) {
          swap(arr, i, j);
          ++i;
          --j;
      }

  }
  return arr.join('')

};
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const isVowel = (ch) => {
  return "aeiouAEIOU".indexOf(ch) >= 0;
}