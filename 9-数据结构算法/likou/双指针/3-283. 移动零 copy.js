// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

// 示例 1:

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 示例 2:

// 输入: nums = [0]
// 输出: [0]
 

// 提示:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let l = 0, r = nums.length - 1;
  
  for (let i = 0; i < nums.length; i++) {
    if(l < r && nums[i] === 0){
      nums.push(nums[i])
      nums.splice(i, 1)
      r--;
      i--;
    }    
  }
  
  return nums;
};


let nums = [0,1,0,3,12];
// 输出: [1,3,12,0,0]

console.log(moveZeroes(nums));


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes2 = function(nums) {
  let right=0
  let left=0
  while(right<nums.length){
      if(nums[right]!==0){
          nums[left]=nums[right]
          left++
      }
      right++
  }
  for(let i=left;i<nums.length;i++){
      nums[i]=0
  }
  return nums
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes3 = function(nums) {
  let slow = 0, fast = 0
  while(fast < nums.length) {
      if(nums[fast] == 0) {
          fast++
      } else {
          nums[slow] = nums[fast]
          slow++
          fast++
      }
  }
  for(let i = slow; i < nums.length; i++) {
      nums[i] = 0
  }
};