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
  let ans = 0
  let odd1 = 0
  let odd2 = 0
  // 变量 l1 和 l2 分别表示两个指针，分别指向窗口左边界。
  let l1 = l2 = 0
  let r = -1;
  while (++r < nums.length) {
    if (nums[r] % 2) {
      odd1++
      odd2++
    }

    // 收缩 l1 直到窗口内包含的奇数数字数量不超过 k
    while (odd1 > k) {
      // 收缩 l1
      const ll = nums[l1]
      l1++
      if (ll % 2) odd1--
    }

    // 第二个窗口
    // 收缩 l2 直到窗口内恰好包含 k 个奇数数字。
    while (odd2 >= k) {
      // 收缩 l1
      const ll = nums[l2]
      l2++
      if (ll % 2) odd2--
    }

    // 这个时候 [l1,l2) 都属于可以合格的数组
    ans += l2 - l1
    console.log("l1:", l1);
    console.log("l2:", l2);
    console.log("========================");
  }
  return ans
};

let nums = [1, 1, 2, 1, 1], k = 3;
// 2


console.log(numberOfSubarrays(nums, k));