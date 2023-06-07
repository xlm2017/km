// 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

// 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

// 任何误差小于 10-5 的答案都将被视为正确答案。



// 示例 1：

// 输入：nums = [1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
// 示例 2：

// 输入：nums = [5], k = 1
// 输出：5.00000


// 提示：

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // 错
  // let maxSum = Number.MIN_VALUE;
  let maxSum = -Infinity;
  console.log("最小值:", maxSum);
  let sum = 0;
  let curNum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    curNum++;
    if(curNum === k){
      if(maxSum < sum){
        maxSum = sum;
      }
    }
    if(curNum > k){
      curNum--;
      sum = sum - nums[i - k];
      if(maxSum < sum){
        maxSum = sum;
      }
      // maxSum = Math.max(maxSum, sum);
    }
  }
  return (maxSum / k).toFixed(5);
};


// let nums = [1,12,-5,-6,50,3], k = 4;
// 12.75

let nums = [-1], k = 1;
// -1


console.log(findMaxAverage(nums, k));





var findMaxAverage2 = function(nums, k) {
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < k; i++) {
      sum += nums[i];
  }
  let maxSum = sum;
  for (let i = k; i < n; i++) {
      sum = sum - nums[i - k] + nums[i];
      maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};