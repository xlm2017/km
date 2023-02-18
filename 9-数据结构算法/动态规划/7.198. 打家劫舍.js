// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
// 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，
// 一夜之内能够偷窃到的最高金额。



// 示例 1：

// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2：

// 输入：[2,7,9,3,1]
// 输出：12
// 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。


// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    // 假设有两家, 如何偷?
    // dp[i] = Math.max();
    if (i === 1) {
      dp[i] = Math.max(dp[0], element);
      continue;
    }
    dp[i] = Math.max(dp[i - 2] + element, dp[i - 1]);
  }
  return dp[dp.length - 1];
};

// let arr1 = [1, 2, 3, 1];   // 4
let arr1 = [2, 7, 9, 3, 1];   // 12
console.log("结果:", rob(arr1));