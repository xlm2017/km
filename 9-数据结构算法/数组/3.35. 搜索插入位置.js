// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。



// 示例 1:

// 输入: nums = [1, 3, 5, 6], target = 5
// 输出: 2
// 示例 2:

// 输入: nums = [1, 3, 5, 6], target = 2
// 输出: 1
// 示例 3:

// 输入: nums = [1, 3, 5, 6], target = 7
// 输出: 4


// 提示:

// 1 <= nums.length <= 10^4
//   - 10^4 <= nums[i] <= 10^4
// nums 为 无重复元素 的 升序 排列数组
//   - 10^4 <= target <= 10^4



// 二分插入

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let length = nums.length;
  let start = 0;
  let end = length - 1;
  if (target > nums[end]) {
    return end + 1;
  }
  if (target < nums[0]) {
    return 0;
  }
  if (nums.length === 2) {
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (target > element) {
        if (i == 0) {
          if (nums[i + 1] < target) {
            return 3;
          } else {
            return 1;
          }
        }
      } else if (target === element) {
        return i;
      } else {
        return i;
      }
    }
  }

  let center = Math.floor(length / 2);
  console.log('c:', center);
  while (true) {
    if (nums[center] === target) {
      return center;
    } else if (target > nums[center]) {

      if (center === start) {
        return center + 1;
      } else if (center === end) {
        return end + 1;
      }

      start = center;
      center = Math.floor((center + end) / 2);

    } else if (target < nums[center]) {

      if (center === start) {
        return center - 1;
      } else if (center === end) {
        return end - 1;
      }

      end = center;
      center = Math.floor((center + start) / 2);
    }
    console.log(start, center, end);
  }
};


// let arr1 = [1, 3, 4, 6]
// let target1 = 5


// let arr1 = [1, 3, 5, 6]
// let target1 = 2
// let target1 = 7


let arr1 = [1, 4]
// let target1 = 1
let target1 = 2
console.log(searchInsert(arr1, target1));