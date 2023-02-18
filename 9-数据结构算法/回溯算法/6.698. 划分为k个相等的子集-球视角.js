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

  // console.log("nums:", nums);
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
      // console.log("index:", index, bucket);
      // 有人提出，其实这个地方不需要判断，因为当 index == num.length 时，
      // 所有球已经按要求装入所有桶，所以肯定是一个满足要求的解
      // 即：每个桶内球的和一定为 target

      // 判断现在桶中的球是否符合要求 -> 路径是否满足要求
      // for (let i = 0; i < k; i++) {
      //   if (bucket[i] != target) return false;
      // }
      return true;
    }

    // nums[index] 开始做选择
    for (let i = 0; i < k; i++) {

      // 其次可以优化的第二个点和 排列/组合/子集 问题 中「元素可重不可复选」情况下「子集」的处理情况很相似！！！
      
      // 如果当前桶和上一个桶内的元素和相等，则跳过
      // 原因：如果元素和相等，那么 nums[index] 选择上一个桶和选择当前桶可以得到的结果是一致的
      if (i > 0 && bucket[i] == bucket[i - 1]) continue;


      // 最后可以优化的第三个点，对于第一个球，任意放到某个桶中的效果都是一样的，所以我们规定放到第一个桶中
      if (i > 0 && index == 0) break; 

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