// 给你一个整数数组 nums 和两个整数 indexDiff 和 valueDiff 。

// 找出满足下述条件的下标对 (i, j)：

// i != j,
// abs(i - j) <= indexDiff
// abs(nums[i] - nums[j]) <= valueDiff
// 如果存在，返回 true ；否则，返回 false 。

 

// 示例 1：

// 输入：nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
// 输出：true
// 解释：可以找出 (i, j) = (0, 3) 。
// 满足下述 3 个条件：
// i != j --> 0 != 3
// abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
// abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
// 示例 2：

// 输入：nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
// 输出：false
// 解释：尝试所有可能的下标对 (i, j) ，均无法满足这 3 个条件，因此返回 false 。
 

// 提示：

// 2 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 1 <= indexDiff <= nums.length
// 0 <= valueDiff <= 109


var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j - i <= indexDiff && j < nums.length; j++) {
      if(Math.abs(nums[j] - nums[i]) <= valueDiff){
        return true;
      }
    } 
  }
  return false; 
};


let nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3;
// false

// let nums = [1,2,3,1], indexDiff = 3, valueDiff = 0;
// true


console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff));