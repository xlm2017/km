// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标。



// 示例 1：

// 输入：nums = [2, 3, 1, 1, 4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。


// 示例 2：
// 输入：nums = [3, 2, 1, 0, 4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。


// 提示：

// 1 <= nums.length <= 3 * 10^4
// 0 <= nums[i] <= 10^5



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let endIndex = nums.length - 1;
  if (endIndex === 0) {
    return true;
  } else {
    if (nums[0] === 0) {
      return false;
    }
  }
  let lastMaxIndex = 0;
  let maxIndex = nums[0];
  while (maxIndex < endIndex) {

    // 0 - lastMaxIndex 之间, 下一个 能跳最远的下标
    let max = 0;
    for (let i = lastMaxIndex + 1; i <= maxIndex; i++) {
      // console.log("i:", i, maxIndex, nums[i])
      if (nums[i] + i > max) {
        max = nums[i] + i
        lastMaxIndex = i;
      }
    }
    if (max <= maxIndex) {
      return false;
    }
    maxIndex = max;
  }
  return true;
};

// let arr1 = [2, 3, 1, 1, 4];
let arr1 = [1, 2, 3];
console.log("jieguo:", canJump(arr1));