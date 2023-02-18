// 一个序列的 宽度 定义为该序列中最大元素和最小元素的差值。

// 给你一个整数数组 nums ，返回 nums 的所有非空 子序列 的 宽度之和 。由于答案可能非常大，请返回对 10^9 + 7 取余 后的结果。

// 子序列 定义为从一个数组里删除一些（或者不删除）元素，但不改变剩下元素的顺序得到的数组。例如，[3, 6, 2, 7] 就是数组[0, 3, 1, 6, 2, 2, 7] 的一个子序列。



// 示例 1：

// 输入：nums = [2, 1, 3]
// 输出：6
// 解释：子序列为[1], [2], [3], [2, 1], [2, 3], [1, 3], [2, 1, 3] 。
// 相应的宽度是 0, 0, 0, 1, 1, 2, 2 。
// 宽度之和是 6 。
// 示例 2：

// 输入：nums = [2]
// 输出：0


// 提示：

// 1 <= nums.length <= 10 ^ 5
// 1 <= nums[i] <= 10 ^ 5

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let sum = 0;
  let len = nums.length
  // let MOD = 10 ** 9 + 7;
  let MOD = Math.pow(10, 9) + 7;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i] * (Math.pow(2, i) - Math.pow(2, len - 1 - i));
    // cur = cur % MOD;
    // Cannot mix BigInt and other types, use explicit conversions
    cur = BigInt(cur);
    sum = BigInt(sum + cur);
    // sum = sum % MOD;
    sum = BigInt(sum);
  }
  sum = sum % MOD;
  return sum;
};

let arr1 = [2, 1, 3];

// 3 3 1
/**
 * 3选1,   三种  length * 1 
 * 3选2,   length * 2/2
 * 3选3, 
 */

let arr2 = [5, 69, 89, 92, 31, 16, 25, 45, 63, 40, 16, 56, 24, 40, 75, 82, 40, 12, 50, 62, 92, 44, 67, 38, 92, 22, 91, 24, 26, 21, 100, 42, 23, 56, 64, 43, 95, 76, 84, 79, 89, 4, 16, 94, 16, 77, 92, 9, 30, 13];
// 857876214
// 857876219  多5 ?
// 857876206  少8 ?
// 857876216  多2 ?
console.log("结果:", sumSubseqWidths(arr2));


// 贡献法, 每个数组元素对结果的贡献值