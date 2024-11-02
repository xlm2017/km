



var isPalindrome = function (s) {
  let left = -1;
  let right = s.length;
  while (++left < --right) {
    if (s[left] !== s[right])return false;
  }
  return true;
};


let s = "abcba"
// 输出：true

console.log(isPalindrome(s));



