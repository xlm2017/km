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

  const dfs = (s, p) => {
    if (s === 0) {
      return true;
    }
    if (!dp[s]) {
      return dp[s];
    }
    dp[s] = false;
    for (let i = 0; i < n; i++) {
      if (nums[i] + p > per) {
        break;
      }
      if (((s >> i) & 1) != 0) {
        if (dfs(s ^ (1 << i), (p + nums[i]) % per)) {
          return true;
        }
      }
    }
    return false;
  };
  // const all = _.sum(nums);
  const all = nums.reduce((pre, cur) => pre + cur);
  if (all % k !== 0) {
    return false;
  }
  per = all / k;
  nums.sort((a, b) => a - b);
  n = nums.length;
  if (nums[n - 1] > per) {
    return false;
  }
  // 为了避免相同状态的重复计算，
  // 我们用 dp[S] 来表示在可用的数字状态为 S 的情况下是否可行，
  // 初始全部状态为记录为可行状态 True
  dp = new Array(1 << n).fill(true);
  console.log("初始化dp:", dp, n, 1 << n);
  console.log("初始化dp-length:", dp.length);
  // 10000000
  // 128
  return dfs((1 << n) - 1, 0);

};


let nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// 输出： True



console.log(canPartitionKSubsets(nums, k));



