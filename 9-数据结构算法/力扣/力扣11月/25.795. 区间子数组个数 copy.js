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
  let length = 0;
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < left) {
      // 不合格的小数
      // sum = sum + length * (length + 1) / 2;
      // sum = sum + length;
      if (!stack.length) {
        sum = sum + (length + 1) * (length + 1 + 1) / 2 - 1;
      } else {
        // 取出栈顶元素
        let arr = stack[stack.length - 1];
        if (arr[1]) {
          // 大于 ---- 小于
          sum = sum + (length + 1) * (length + 1 + 1) / 2 - 1;
        } else {
          // 小于 ---- 小于
          // sum = sum + length * 2;
          sum = sum + (length + 2) * (length + 1 + 2) / 2 - 2;
        }
      }
      // 计数归0
      length = 0;
      stack.push([i, 0]);
    } else if (nums[i] <= right) {
      // 合格的数, 计数法
      length++;

      // 如果最后一个数是合格的???
      if (i === nums.length - 1) {
        if (!stack.length) {
          sum = length * (length + 1) / 2;
        } else {
          let arr = stack[stack.length - 1];
          // sum = sum + length * (length + 1) / 2;
          if (arr[1]) {
            // 大于 ---- 合格
            sum = sum + length * (length + 1) / 2;
          } else {
            // 小于 ---- 合格
            // sum = sum + length;
            sum = sum + (length + 1) * (length + 1 + 1) / 2 - 1;
          }
        }
      }
    } else {
      // 不合格的大数
      if (!stack.length) {
        sum = sum + length * (length + 1) / 2;
      } else {
        // 取出栈顶元素
        let arr = stack[stack.length - 1];
        if (arr[1]) {
          // 大于 ---- 大于
          sum = sum + length * (length + 1) / 2;
        } else {
          // 小于 ---- 大于
          sum = sum + (length + 1) * (length + 1 + 1) / 2 - 1;
        }
      }

      // 计数归0
      length = 0;
      stack.push([i, 1]);
    }

  }
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

//  14, 9, 7,连续小数, 问题更加复杂化, 不好解

// 数据量大, 回溯不可行


// Number.isInteger

// let skill = [3, 2, 5, 1, 3, 4];
// let sums = 0;
// for (let i = 0; i < skill.length; i++) {
//   sums += skill[i];
// }
// let sum = sums / (skill.length / 2);
// console.log("sum:", sum);

// let res = 0;
// for (let j = 0; j < skill.length; j++) {
//   let num2 = sums - skill[j];
//   console.log('成一次:', skill[j] * num2);
//   res = res + skill[j] * num2;

// }

// console.log("res:", res);