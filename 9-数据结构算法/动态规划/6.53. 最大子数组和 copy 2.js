// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。



// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [5,4,-1,7,8]
// 输出：23


// 提示：

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104


// 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // 前值
    let pre = dp[i - 1];
    // 当前值
    let ele = nums[i];

    // 可能的最大值有哪些
    let value1 = Math.max(pre, ele);
    let value2 = 0;
    let value3 = 0;

    if (ele > 0) {
      // 如果是非连续子数组, 不能直接相加
      // value2 = pre + ele;
    }


    // 计算出最大值
    dp[i] = Math.max(value1, value2, value3);
  }
  return dp[dp.length - 1];
};


let arr0 = [-2, 1, -3, 4];
let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];  // 6

console.log("最大和:", maxSubArray(arr1));


// 分析
let arr = []
let max = 0;

arr = [-2]
max = -2

arr = [-2, 1]
max = 1

arr = [-2, 1, -3]
max = 1

arr = [-2, 1, -3, 4]                                      // 3
max = 4  // 这种情况, 中间已经隔离了-3, 最大值 1 与 4 非连续, dp[2] = 1   dp[3] != dp[2] + 4
// 假设情况, 还有一种更大的可能 [2, 8, -3, 4]   // 2 8 -3 4  = 11  2  dp[1] = 10  dp[2] = 10  dp[3] = 10  0-1
// 假设情况, 还有一种更大的可能 [-2, 8, -3, 4]  //   8 -3 4  = 9  -2  dp[1] = 8   dp[2] = 8   dp[3] = 9   1-3
// 假设情况, 还有一种更大的可能 [-2,3, -3, 4]   //        4  = 4  -2  dp[1] = 3   dp[2] = 3   dp[3] = 4   3

arr = [-2, 1, -3, 4, -1]
max = 4

arr = [-2, 1, -3, 4, -1, 2,]
max = 5

arr = [-2, 1, -3, 4, -1, 2, 1]
max = 6

arr = [-2, 1, -3, 4, -1, 2, 1, -5]
max = 6
//dp[5]的时候, 当前值为1, 计算出来为6是最大值

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
max = 6