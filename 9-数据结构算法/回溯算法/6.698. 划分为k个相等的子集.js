// 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

 

// 示例 1：

// 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// 输出： True
// 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
// 示例 2:

// 输入: nums = [1,2,3,4], k = 3
// 输出: false
 

// 提示：

// 1 <= k <= len(nums) <= 16
// 0 < nums[i] < 10000
// 每个元素的频率在 [1,4] 范围内

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    console.log("当前总和值:", sum);

    let array = [sum];
    let len = 1;
    // 栈
    let stack = [];
    let stackSum = 0;
    for (let j = i + 1; j < nums.length; j++) {

      if(stackSum + nums[j] < sum){
         stack.push(nums[j]);
         stackSum += nums[j];
      }else if(stackSum + nums[j] === sum){
        len++;
        if(len === k && j === nums.length - 1){
          console.log("ok:", stack);
          return true;
        }
        stack = [];
        stackSum = 0;
      }else{
        stack = [];
        // 终止内层循环
        break;
      }     
    }    
  }
};

let nums1 = [4,3,2,3,5,2,1];
let k1 = 4;

console.log(canPartitionKSubsets(nums1, k1));