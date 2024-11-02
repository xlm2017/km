// 给你一个整数数组 nums （下标从 0 开始）和一个整数 k 。

// 一个子数组 (i, j) 的 分数 定义为 min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1) 。
// 一个 好 子数组的两个端点下标需要满足 i <= k <= j 。

// 请你返回 好 子数组的最大可能 分数 。



// 示例 1：

// 输入：nums = [1,4,3,7,4,5], k = 3
// 输出：15
// 解释：最优子数组的左右端点下标是 (1, 5) ，分数为 min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15 。
// 示例 2：

// 输入：nums = [5,5,4,5,4,1,1,1], k = 0
// 输出：20
// 解释：最优子数组的左右端点下标是 (0, 4) ，分数为 min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20 。


// 提示：

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 2 * 104
// 0 <= k < nums.length


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  let l = k;
  let r = k;
  let min = nums[k];

  let total = nums[k] * 1;
  // 下标的定义, 抵消了下标的影响
  while (l > 0 || r < nums.length - 1) {
    let left = nums[l - 1] || -Infinity;
    let right = nums[r + 1] || -Infinity;
    if (left > right) {
      l--;
      min = Math.min(min, left);
    } else {
      r++;
      min = Math.min(min, right);
    }
    total = Math.max(total, min * (r - l + 1));
  }
  return total;
};



let nums = [2, 4, 3, 7, 1, 5, 6, 4, 1, 1], k = 3
// 输出：10


console.log(maximumScore(nums, k));





// 最佳
var maximumScore2 = function (nums, k) {
  const n = nums.length;
  let [l, r, min, ans] = [k, k, nums[k], nums[k]];

  while (l > 0 || r < n - 1) {
    if (!l) r++;
    else if (r === n - 1) l--;
    else nums[l - 1] < nums[r + 1] ? r++ : l--;

    min = Math.min(min, nums[l], nums[r]);
    ans = Math.max(ans, min * (r - l + 1));
  }

  return ans;
};