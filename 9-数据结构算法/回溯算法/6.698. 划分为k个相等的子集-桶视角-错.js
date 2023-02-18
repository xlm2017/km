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
var canPartitionKSubsets = function (nums, k) {

  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];
  // 不能刚好分配的情况
  if (sum % k != 0) return false;

  // target 即每个子集所需要满足的和
  let target = sum / k;

  // k个桶
  let bucket = new Array(k).fill(0);
  let used = new Array(nums.length);

  function backtrack (nums, start, bucket, k, target) {
    // k 个桶均装满
    if (k == 0) return true;
    // 当前桶装满了，开始装下一个桶
    if (bucket[k] == target) {
      // 注意：桶从下一个开始；球从第一个开始
      return backtrack(nums, 0, bucket, k - 1, target, used);
    }
    // 第 k 个桶开始对每一个球选择进行选择是否装入
    for (let i = start; i < nums.length; i++) {
      // 如果当前球已经被装入，则跳过
      if (used[i]) continue;
      // 如果装入当前球，桶溢出，则跳过
      if (bucket[k] + nums[i] > target) continue;

      // 装入 && 标记已使用
      bucket[k] += nums[i];
      used[i] = true;

      // 开始判断是否选择下一个球
      // 注意：桶依旧是当前桶；球是下一个球
      // 注意：是 i + 1
      if (backtrack(nums, i + 1, bucket, k, target, used)) return true;

      // 拿出 && 标记未使用
      bucket[k] -= nums[i];
      used[i] = false;
    }
    // 如果所有球均不能使所有桶刚好装满
    return false;
  }
  return backtrack(nums, 0, bucket, k, target);
};

let nums1 = [4, 3, 2, 3, 5, 2, 1];
let k1 = 4;
// true

console.log(canPartitionKSubsets(nums1, k1));