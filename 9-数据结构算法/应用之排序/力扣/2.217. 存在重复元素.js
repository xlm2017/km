// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 

// 示例 1：

// 输入：nums = [1,2,3,1]
// 输出：true
// 示例 2：

// 输入：nums = [1,2,3,4]
// 输出：false
// 示例 3：

// 输入：nums = [1,1,1,3,3,4,3,2,4,2]
// 输出：true
 

// 提示：

// 1 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // let set = new Set(nums);
  // return set.size !== nums.length;


  // nums.sort((a,b)=>a-b);
  // for(let i = 1; i < nums.length; i++){
  //     if(nums[i] === nums[i-1]){
  //         return true;
  //     }
  // }
  // return false;


  

};

let nums1 = [1,2,3,1];

console.log(containsDuplicate(nums1));