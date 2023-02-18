// 给你一个字符串 s，最多 可以从中删除一个字符。

// 请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。



// 示例 1：

// 输入：s = "aba"
// 输出：true
// 示例 2：

// 输入：s = "abca"
// 输出：true
// 解释：你可以删除字符 'c' 。
// 示例 3：

// 输入：s = "abc"
// 输出：false

// 提示：

// 1 <= s.length <= 10^5
// s 由小写英文字母组成

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (s.length <= 2) {
    return true;
  }
  let bool = true;
  let i = 0;
  let j = s.length - 1;
  let isDel = 0;
  // j - i >= 1
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      // 删除当前的s[i] 或者 s[j]
      if (isDel === 1) {
        // return false;
        isDel = 2;
        break;
      }
      isDel = 1
      i++;
    }
  }
  i = 0;
  j = s.length - 1;
  let isDel2 = 0;
  // j - i >= 1
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      // 删除当前的s[i] 或者 s[j]
      if (isDel2 === 1) {
        // return false;
        isDel2 = 2;
        break;
      }
      isDel2 = 1
      j--;
    }
  }


  if (isDel === isDel2 && isDel === 2) {
    return false;
  }

  return true;
};

let s = "abc";
console.log(validPalindrome(s));