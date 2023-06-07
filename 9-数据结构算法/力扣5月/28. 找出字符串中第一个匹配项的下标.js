// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

 

// 示例 1：

// 输入：haystack = "sadbutsad", needle = "sad"
// 输出：0
// 解释："sad" 在下标 0 和 6 处匹配。
// 第一个匹配项的下标是 0 ，所以返回 0 。
// 示例 2：

// 输入：haystack = "leetcode", needle = "leeto"
// 输出：-1
// 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 

// 提示：

// 1 <= haystack.length, needle.length <= 104
// haystack 和 needle 仅由小写英文字符组成


var strStr = function(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;
  let s = haystack.split("");
  let p = needle.split("");
  for(let i = 0; i <= n - m; i++){
      let a = i;
      let b = 0;
      while(b < m && s[a] == p[b]){
        a++;
        b++;
      }
      if(b == m) return i;
  }
  return -1;
};






// kmp

 var strStr = function(text, pattern) {
  const n = text.length;
  const m = pattern.length;

  if (m === 0) {
    return 0;
  }

  const lps = computeLPSArray(pattern);

  let i = 0; // index for text[]
  let j = 0; // index for pattern[]

  while (i < n) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === m) {
      return i - j;
    } else if (i < n && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
};

function computeLPSArray(pattern) {
  const m = pattern.length;
  const lps = new Array(m).fill(0);

  let len = 0;
  let i = 1;

  while (i < m) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}