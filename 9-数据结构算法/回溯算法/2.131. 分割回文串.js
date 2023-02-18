// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。



// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 2：

// 输入：s = "a"
// 输出：[["a"]]


// 提示：

// 1 <= s.length <= 16
// s 仅由小写英文字母组成


/**
 * @param {string} s
 * @return {string[][]}
 */


// 判断回文串
function isOkSub (s) {
  if (s.length === 1) {
    return true;
  }
  let i = 0;
  let j = s.length - 1;


  while (j - i >= 1) {
    if (s[i] !== s[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}
let str = "ab";
console.log(`${str}--是否是回文串:`, isOkSub(str));


