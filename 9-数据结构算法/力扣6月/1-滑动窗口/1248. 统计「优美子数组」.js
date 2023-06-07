// 给你一个整数数组 nums 和一个整数 k。如果某个连续子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。

// 请返回这个数组中 「优美子数组」 的数目。



// 示例 1：

// 输入：nums = [1,1,2,1,1], k = 3
// 输出：2
// 解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。
// 示例 2：

// 输入：nums = [2,4,6], k = 1
// 输出：0
// 解释：数列中不包含任何奇数，所以不存在优美子数组。
// 示例 3：

// 输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// 输出：16


// 提示：

// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10^5
// 1 <= k <= nums.length


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let left = -1;
  let right = 0;
  let sum = 0;
  let ans = 0;
  let cur = [];
  // 思路: 在符合条件的奇数最小窗口, 两端偶数个数相乘, 即符合条件的优美子数组, 窗口移动的时候, 如何维护? 
  for (let i = 0; i < nums.length; i++) {
    
    if(nums[i] % 2){
      sum++;
      cur.push(i);
    }  
    if(sum === k){
      ans = ans + 1
    }
    console.log("sum:", sum);
    if(sum > k){
      let n = cur[0] - left;
      let m = cur[cur.length - 1] - cur[cur.length - 2];
      console.log("cur:", cur);
      ans = ans + n * m;
      console.log("n--m:", n, m, (n+1) * (m+1));
      left = cur[0];
      cur.shift();
      k--;
    } 
  }
  if(sum === k){
    let n = cur[0] - left;
    let m = nums.length - 1 - cur[cur.length - 1];
    ans = ans + n * m;
    console.log("n--m-last:", n, m, (n+1) * (m+1));
  } 
  
  return ans;
};

// let nums = [1,1,2,1,1], k = 3;
// 2

// let nums = [2,2,2,1,2,2,1,2,2,2], k = 2;
// 16

// let nums = [1,1,1,1,1], k = 1;
// 5

let nums = [91473,45388,24720,35841,29648,77363,86290,58032,53752,87188,34428,85343,19801,73201];
let k = 4;
// 6

console.log(numberOfSubarrays(nums, k));