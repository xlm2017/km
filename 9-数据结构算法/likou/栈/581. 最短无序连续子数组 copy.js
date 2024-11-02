// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 请你找出符合题意的 最短 子数组，并输出它的长度。



// 示例 1：

// 输入：nums = [2,6,4,8,10,9,15]
// 输出：5
// 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
// 示例 2：

// 输入：nums = [1,2,3,4]
// 输出：0
// 示例 3：

// 输入：nums = [1]
// 输出：0


// 提示：

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105


/**
 * @param {number[]} nums
 * @return {number}
 */


// 最小元素左边比它大的元素都要参与排序，最大元素右边比它小的元素都要调整


var findUnsortedSubarray = function (nums) {
  let n = nums.length;
  // 右段的最小值
  let min = nums[n - 1],
    // 左段的最大值
    max = nums[0];
  // 无序区间的左右边界 左开右闭
  let rightBorder = 0,
    leftBorder = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] < max) {
      //从左到右维持最大值，寻找右边界end
      leftBorder = i;
    } else {
      max = nums[i];
    }
    if (nums[n - i - 1] > min) {
      //从右到左维持最小值，寻找左边界begin
      rightBorder = n - i - 1;
    } else {
      min = nums[n - i - 1];
    }
  }
  return leftBorder - rightBorder + 1;
};

let nums = [2, 6, 4, 8, 10, 9, 15];
// 5


console.log(findUnsortedSubarray(nums));