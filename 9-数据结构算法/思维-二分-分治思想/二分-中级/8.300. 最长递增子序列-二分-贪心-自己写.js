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




var lengthOfLIS = function (nums) {

  let n = nums.length;
  let tail = [nums[0]];//存放最长上升子序列数组
  for (let i = 0; i < n; i++) {
    if (nums[i] > tail[tail.length - 1]) {//当nums中的元素比tail中的最后一个大时 可以放心push进tail
      tail.push(nums[i]);
    } else {//否则进行二分查找
      let left = 0;
      let right = tail.length - 1;
      while (left < right) {
        let mid = (left + right) >> 1;
        if (tail[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tail[left] = nums[i];//将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小
    }
  }
  console.log("tail:", tail);
  return tail.length;
}





let nums = [10, 9, 2, 5, 3, 7, 101, 18];
// 4

console.log(lengthOfLIS(nums));



// 降低复杂度切入点, 
// 1. 动态规划中, 线性遍历计算dp的复杂度无法降低
// 2. 每轮计算中, 需要通过线性遍历[0, k)区间, 来得到dp[k], 考虑是否可以重新设计状态定义, 使整个dp为一个排序列表, 计算时使用二分

// 新的状态定义, 维护一个列表tails, 其中每个元素tails[k]的值代表 长度为k+1的子序列尾部的值.

// tails[k] 一定严格递增, 可用反证法证明


