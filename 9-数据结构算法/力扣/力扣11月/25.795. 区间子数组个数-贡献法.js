// 给你一个整数数组 nums 和两个整数：left 及 right 。找出 nums 中连续、非空且其中最大元素在范围 [left, right] 内的子数组，并返回满足条件的子数组的个数。

// 生成的测试用例保证结果符合 32-bit 整数范围。



// 示例 1：

// 输入：nums = [2,1,4,3], left = 2, right = 3
// 输出：3
// 解释：满足条件的三个子数组：[2], [2, 1], [3]
// 示例 2：

// 输入：nums = [2,9,2,5,6], left = 2, right = 8
// 输出：7


// 提示：

// 1 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^9
// 0 <= left <= right <= 10^9


/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  console.log('nums:', nums, left, right, '\n');
  let sum = 0;
  let last1 = -1;
  let last2 = -1;

  return sum;
};

// let nums = [2, 1, 4, 3];
// let left = 2;
// let right = 3;
// [2], [2, 1], [3]
// 3


// let nums = [2, 9, 2, 5, 6];
// let left = 2;
// let right = 8;
// 7

let nums = [73, 55, 36, 5, 55, 14, 9, 7, 72, 52];
let left = 32;
let right = 69;
// 22
console.log(numSubarrayBoundedMax(nums, left, right));
