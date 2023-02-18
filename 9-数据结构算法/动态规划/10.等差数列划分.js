// 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。

// 例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
// 给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。

// 子数组 是数组中的一个连续序列。



// 示例 1：

// 输入：nums = [1,2,3,4]
// 输出：3
// 解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。
// 示例 2：

// 输入：nums = [1]
// 输出：0


// 提示：

// 1 <= nums.length <= 5000
// -1000 <= nums[i] <= 1000


/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  if (nums.length <= 2) {
    return 0;
  }
  let dp = new Array(nums.length);
  dp[0] = 0;
  dp[1] = 0;
  let sum = 0;
  let tempN = 0;
  // 阶段和
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp[i] = 1
      if (dp[i - 1] === 0) {
        tempN = 3;
      } else {
        tempN++;
      }
      if (i === nums.length - 1) {
        console.log("最后一个元素--等差:", sum, tempN)
        sum = sum + (tempN - 1) * (tempN - 2) / 2;
      }
    } else {
      dp[i] = 0;
      if (dp[i - 1] = 1) {
        if (tempN) {
          sum = sum + (tempN - 1) * (tempN - 2) / 2;
          tempN = 0;
        }
      }
    }
  }
  console.log("dp:", dp)
  return sum;
};


// let nums = [1, 2, 3, 4];   // 3
// let nums = [1, 2, 3, 4, 3, 2];  // 4

// let nums = [1, 2, 3, 4, 5, 6, 5, 4, 3, 3, 4, 5, 6];   // 16
let nums = [1, 2, 3, 4, 5, 6, 5, 4, 3, 3, 4, 5];   // 14
console.log("子数组为等差数列的个数:", numberOfArithmeticSlices(nums));