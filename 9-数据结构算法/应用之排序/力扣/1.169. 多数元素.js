// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

// 示例 1：

// 输入：nums = [3,2,3]
// 输出：3
// 示例 2：

// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2
 

// 提示：
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if(nums.length == 1) return nums[0];
  // 一半以上
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if(obj[nums[i]]){
      obj[nums[i]]++
    }else{
      obj[nums[i]] = 1
    }    
  }
  let len = nums.length % 2 === 0 ? nums.length / 2 + 1 : (nums.length + 1) / 2;
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if(obj[key] >= len){
        return key;
      }
    }
  }
};

let nums1 = [2,2,1,1,1,2,2];
// 2

console.log(majorityElement(nums1));