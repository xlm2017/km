// 输入：nums = [3,4,5,1,2]
// 输出：true
// 解释：[1,2,3,4,5] 为有序的源数组。
// 可以轮转 x = 3 个位置，使新数组从值为 3 的元素开始：[3,4,5,1,2] 。


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let n = nums.length, x = 0;
  for (let i = 1; i < n; ++i) {
    if (nums[i] < nums[i - 1]) {
      x = i;
      break;
    }
  }
  if (x === 0) {
    return true;
  }
  for (let i = x + 1; i < n; ++i) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return nums[0] >= nums[n - 1];
};

// let nums1 = [2, 1, 3, 4]
// false

// let nums1 = [1, 2, 3]
// true

// let nums1 = [3, 4, 5, 1, 2]
// true

let nums1 = [1, 1, 1]
// true
console.log(check(nums1));