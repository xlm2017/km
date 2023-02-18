// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。



// 示例 1：

// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
// 示例 2：

// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 3：

// 输入：nums = [1,2,3]
// 输出：3


// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000



/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  // 构造两个数组, 一个去头, 一个去尾
  let dp1 = new Array(nums.length - 1);
  let dp2 = new Array(nums.length - 1);
  let nums1 = nums.slice(1); // 去头
  let nums2 = nums.slice(0, -1); // 去尾
  dp1[0] = nums1[0];
  dp2[0] = nums2[0];
  dp1[1] = Math.max(nums1[0], nums1[1]);
  dp2[1] = Math.max(nums2[0], nums2[1]);
  for (let i = 2; i < nums1.length; i++) {
    const element = nums1[i];
    dp1[i] = Math.max(dp1[i - 2] + element, dp1[i - 1]);
  }
  for (let i = 2; i < nums2.length; i++) {
    const element = nums2[i];
    dp2[i] = Math.max(dp2[i - 2] + element, dp2[i - 1]);
  }
  console.log("dp:", dp1, dp2);
  return Math.max(dp1.pop(), dp2.pop());
};

let arr1 = [2, 7, 9, 3, 1];  // 11
console.log(rob(arr1));