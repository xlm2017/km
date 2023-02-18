// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。



// 示例 1：

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 示例 2：

// 输入：target = 4, nums = [1,4,4]
// 输出：1
// 示例 3：

// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0


// 提示：

// 1 <= target <= 10^9
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105


// 进阶：

// 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let n = nums.length;
  if (n == 0) {
    return 0;
  }
  let ans = 10 ** 5;
  let sums = new Array(n + 1);
  // 为了方便计算，令 size = n + 1 
  // sums[0] = 0 意味着前 0 个元素的前缀和为 0
  // sums[1] = A[0] 前 1 个元素的前缀和为 A[0]
  // 以此类推
  for (let i = 1; i <= n; i++) {
    sums[i] = sums[i - 1] + nums[i - 1];
  }
  for (let i = 1; i <= n; i++) {
    let target = s + sums[i - 1];
    let bound = Arrays.binarySearch(sums, target);
    if (bound < 0) {
      bound = -bound - 1;
    }
    if (bound <= n) {
      ans = Math.min(ans, bound - (i - 1));
    }
  }
  return ans == 10 ** 5 ? 0 : ans;

  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/minimum-size-subarray-sum/solutions/305704/chang-du-zui-xiao-de-zi-shu-zu-by-leetcode-solutio/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

};

// 前缀和数组满足「单调递增」。


let target = 7, nums = [2, 3, 1, 2, 4, 3];
// 2

console.log(minSubArrayLen(target, nums));