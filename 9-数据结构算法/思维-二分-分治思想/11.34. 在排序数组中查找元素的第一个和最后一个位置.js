// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if(!nums.length){
    return [-1, -1];
  }
  let ans = [-1, -1];
  let left = 0;
  let right = nums.length - 1;

  // 迭代查找右侧的边界
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if(nums[mid] === target && (mid === nums.length - 1 || nums[mid + 1] > target)){
      ans[1] = mid;
      break;
    }
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  left = 0;
  // right = nums.length - 1;
  // 迭代查找左侧边界
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if(nums[mid] === target && (mid === 0 || nums[mid - 1] < target)){
      ans[0] = mid;
      break;
    }
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return (ans[0] === -1 || ans[1] === -1) ? [-1, -1] : ans;
};


let nums = [5,7,7,8,8,10], target = 8;
//[3, 4]

console.log(searchRange(nums, target));