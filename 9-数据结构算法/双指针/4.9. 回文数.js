// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 例如，121 是回文，而 123 不是。


// 示例 1：

// 输入：x = 121
// 输出：true
// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 - 121 。 从右向左读, 为 121 - 。因此它不是一个回文数。
// 示例 3：

// 输入：x = 10
// 输出：false
// // 解释：从右向左读, 为 01 。因此它不是一个回文数。

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  x = x + ''
  let length = x.length;
  let mid = Math.floor(length / 2);
  let left = null;
  let right = null;
  if (length % 2 === 0) {
    // 偶数取中间两位
    left = mid - 1
    right = mid
  } else {
    left = mid - 1
    right = mid + 1
  }
  while (left >= 0) {
    if (x[left] === x[right]) {
      left--;
      right++;
    } else {
      console.log("不是回文串")
      return false;
    }
  }
  return true;
};

let num1 = 121
console.log(isPalindrome(num1));