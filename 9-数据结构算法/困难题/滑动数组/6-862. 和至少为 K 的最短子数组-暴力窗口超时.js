// 给你一个整数数组 nums 和一个整数 k ，找出 nums 中和至少为 k 的 最短非空子数组 ，并返回该子数组的长度。
// 如果不存在这样的 子数组 ，返回 -1 。

// 子数组 是数组中 连续 的一部分。

 

// 示例 1：

// 输入：nums = [1], k = 1
// 输出：1
// 示例 2：

// 输入：nums = [1,2], k = 4
// 输出：-1
// 示例 3：

// 输入：nums = [2,-1,2], k = 3
// 输出：3
 

// 提示：

// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105
// 1 <= k <= 109


var shortestSubarray = function(nums, k) {
  // 暴力写法
  let sumArr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    sumArr.push(sumArr[sumArr.length - 1] + nums[i])
  }
  console.log(sumArr);

  let l = 0;
  let minLen = nums.length + 1;
  while (l < nums.length) {
    let r = l + 1;
    if(sumArr[l] >= k){
      minLen = Math.min(minLen, l + 1);
    }
    while (l < r && r < nums.length) {
      if(sumArr[r] - sumArr[l] >= k){
        minLen = Math.min(minLen, r - l);
        break; 
      }
      r++;
    }
    l++;
  }

  return  minLen === nums.length + 1 ? -1 : minLen;
};




let nums = [2,-1,2], k = 3;
// 3

// let nums = [1,2], k = 4;
// -1

console.log(shortestSubarray(nums, k));