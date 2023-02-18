// 给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。

// 本题中，将空字符串定义为有效的 回文串 。



// 示例 1:

// 输入: s = "A man, a plan, a canal: Panama"
// 输出: true
// 解释："amanaplanacanalpanama" 是回文串
// 示例 2:

// 输入: s = "race a car"
// 输出: false
// 解释："raceacar" 不是回文串


// 提示：

// 1 <= s.length <= 2 * 105
// 字符串 s 由 ASCII 字符组成

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLocaleLowerCase();
  if (s.length === 1) {
    return true;
  }
  let i = 0;
  let j = s.length - 1;
  // var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
  var reg = new RegExp(/[0-9a-zA-Z]/);
  var reg1 = new RegExp(/\s/);
  while (j - i >= 1) {
    if (!reg.test(s[i])) {
      console.log("非字母和数字i:", s[i]);
      i++;
      continue;
    }
    if (!reg.test(s[j])) {
      console.log("非字母和数字j:", s[j]);
      j--;
      continue;
    }
    if (s[i] !== s[j]) {
      console.log(i, j);
      return false;
    } else {
      console.log('相等:', i, j);
      i++;
      j--;
    }
  }
  return true;
};


let str = 'race a car';
console.log("结果:", isPalindrome(str));