// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
//              1,2,2,3,3,4
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1
 

// 提示：

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 10^4
 

// 进阶：

// 你能将算法的时间复杂度降低到 O(n log(n)) 吗?


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = new Array(nums.length);
  // 长度为0时候, 最长自增的子序列的长度
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = 1;
      if(i === 3){
        // console.log('i==3,', nums[i], nums[j]);
      }
      if(nums[i] > nums[j]){
        dp[i] = Math.max(dp[j] + 1, dp[i - 1]);
      }else{
        dp[i] = dp[i];
      }
    } 
  }
  // console.log(dp);
  return Math.max(...dp);
};


let nums1 =  [0,1,0,3,2,3]  // 4


let nums2 =  [10,9,2,5,3,7,101,18]  // 4


let nums3 = [7,7,7,7,7,7,7];  // 1


let nums4 = [1,2,5,1,2,3,4];  // 4

console.log(lengthOfLIS(nums1));
console.log(lengthOfLIS(nums2));
console.log(lengthOfLIS(nums3));
console.log(lengthOfLIS(nums4));
