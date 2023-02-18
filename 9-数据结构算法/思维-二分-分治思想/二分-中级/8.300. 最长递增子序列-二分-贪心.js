// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。


// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1


// 提示：

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104


// 进阶：

// 你能将算法的时间复杂度降低到 O(n log(n)) 吗?





function binSearch (arr, target, left, right) {
  if (right - left <= 1) return right;
  //console.log(left,right);
  let middle = ~~((left + right) / 2);
  if (target < arr[middle]) return binSearch(arr, target, left, middle);
  else if (target > arr[middle]) return binSearch(arr, target, middle, right);
  else return middle;
}
var lengthOfLIS = function (nums) { // 二分
  let d = [], len = 1; //dp[i]表示长度为i的以nums[k]结尾的最小值
  d[len] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > d[len]) { // 比dp中的都要大，可以扩展
      len++;
      d[len] = nums[i];
    } else if (nums[i] < d[len]) {
      let k = binSearch(d, nums[i], 1, len); //找到d[n]<nums[i]<d[n+1]然后更新d[n+1]的值
      //console.log(d,nums[i],k);
      if (k === 1 || (nums[i] < d[k] && nums[i] > d[k - 1])) d[k] = nums[i];
      if (nums[i] < d[k - 1]) d[k - 1] = nums[i];
    }
    //console.log(d);
  }
  return len;
}

// 作者：mindhacker
// 链接：https://leetcode.cn/problems/longest-increasing-subsequence/solutions/1687384/by-c2area-tz6r/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




let nums = [10,9,2,5,3,7,101,18];
// 4

console.log(lengthOfLIS(nums));





// 一般动态规划解法 n^2

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS2 = function (nums) {
  let dp = new Array(nums.length);
  // 长度为0时候, 最长自增的子序列的长度
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {

        // 错误的地方
        // dp[i] = Math.max(dp[j] + 1, dp[i - 1]);

        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  // console.log(dp);
  return Math.max(...dp);
};