// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。


// 示例 1：

// 输入：x = 123
// 输出：321
// 示例 2：

// 输入：x = -123
// 输出：-321
// 示例 3：

// 输入：x = 120
// 输出：21
// 示例 4：

// 输入：x = 0
// 输出：0


// 提示：

// -231 <= x <= 231 - 1


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = x + ''
  let flag = false
  if (str[0] === '-') {
    flag = true
    str = str.slice(1);
  }
  str = str.split('').reverse().join("");
  if (flag) {
    str = '-' + str;
  }
  try {
    str = str * 1
    if (str > Math.pow(2, 31) - 1 || str < Math.pow(-2, 31)) {
      return 0;
    }
  } catch (error) {
    console.log("报错:", error)
    return 0;
  }
  return str;
};

// let x = -123
// let x = 1230
let x = 1534236469

// -321
console.log("反转结果:", reverse(x));