// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 请你找出符合题意的 最短 子数组，并输出它的长度。

 

// 示例 1：

// 输入：nums = [2,6,4,8,10,9,15]
// 输出：5
// 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
// 示例 2：

// 输入：nums = [1,2,3,4]
// 输出：0
// 示例 3：

// 输入：nums = [1]
// 输出：0
 

// 提示：

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105


/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let stack = [0];
  for(let i = 1; i < nums.length; i++){
    while(stack.length && nums[i] <= nums[stack[stack.length - 1]]){
      stack.pop()
    }
    if(!stack.length){
      stack.push(i);
    }else{
      if(nums[i] > nums[stack[stack.length - 1]]){
        stack.push(i);
      }
    }
    
  }
  console.log("stack:", stack);
};

let nums = [2,6,4,8,10,9,15];
// 5


console.log(findUnsortedSubarray(nums));