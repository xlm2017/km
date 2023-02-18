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

  // nums.sort((a,b)=>a-b);

  console.log("nums:", nums);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];
  // 不能刚好分配的情况
  if (sum % k != 0) return false;

  // target 即每个子集所需要满足的和
  let target = sum / k;

  // k个桶
  let bucket = new Array(k).fill(0);
  
  function backtrack(nums, index, bucket, k, target) {
    // 结束条件
    // 结束条件：已经处理完所有球
    if (index == nums.length) {
      console.log("index:", index, bucket);
      // 判断现在桶中的球是否符合要求 -> 路径是否满足要求
      for (let i = 0; i < k; i++) {
        if (bucket[i] != target) return false;
      }
      return true;
    }

    // nums[index] 开始做选择
    for (let i = 0; i < k; i++) {
      // 剪枝：放入球后超过 target 的值，选择一下桶
      if (bucket[i] + nums[index] > target) continue;
      // 做选择：放入 i 号桶
      bucket[i] += nums[index];

      // 处理下一个球，即 nums[index + 1]
      if (backtrack(nums, index + 1, bucket, k, target)) return true;

      // 撤销选择：挪出 i 号桶
      bucket[i] -= nums[index];
    }

    // k 个桶都不满足要求
    return false;
  }
  return backtrack(nums, 0, bucket, k, target);
};

let nums1 = [4,3,2,3,5,2,1];
let k1 = 4;

console.log(canPartitionKSubsets(nums1, k1));