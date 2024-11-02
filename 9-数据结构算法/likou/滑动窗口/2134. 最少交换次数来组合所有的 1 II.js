// 交换 定义为选中一个数组中的两个 互不相同 的位置并交换二者的值。

// 环形 数组是一个数组，可以认为 第一个 元素和 最后一个 元素 相邻 。

// 给你一个 二进制环形 数组 nums ，
// 返回在 任意位置 将数组中的所有 1 聚集在一起需要的最少交换次数。



// 示例 1：

// 输入：nums = [0,1,0,1,1,0,0]
// 输出：1
// 解释：这里列出一些能够将所有 1 聚集在一起的方案：
// [0,0,1,1,1,0,0] 交换 1 次。
// [0,1,1,1,0,0,0] 交换 1 次。
// [1,1,0,0,0,0,1] 交换 2 次（利用数组的环形特性）。
// 无法在交换 0 次的情况下将数组中的所有 1 聚集在一起。
// 因此，需要的最少交换次数为 1 。
// 示例 2：

// 输入：nums = [0,1,1,1,0,0,1,1,0]
// 输出：2
// 解释：这里列出一些能够将所有 1 聚集在一起的方案：
// [1,1,1,0,0,0,0,1,1] 交换 2 次（利用数组的环形特性）。
// [1,1,1,1,1,0,0,0,0] 交换 2 次。
// 无法在交换 0 次或 1 次的情况下将数组中的所有 1 聚集在一起。
// 因此，需要的最少交换次数为 2 。
// 示例 3：

// 输入：nums = [1,1,0,0,1]
// 输出：0
// 解释：得益于数组的环形特性，所有的 1 已经聚集在一起。
// 因此，需要的最少交换次数为 0 。


// 提示：

// 1 <= nums.length <= 105
// nums[i] 为 0 或者 1


/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  let k = sum;
  console.log(k);
  nums = nums.concat(nums);
  // console.log(nums);

  if (k <= 1) {
    return 0;
  }
  // 交换 0 1, 使所有的1聚集在一起

  // 求窗口k内, 1个数的最大值
  let cnt = 0;
  for (let i = 0; i < k; i++) {
    if (nums[i]) cnt++
  }
  let max = cnt;
  // 定长滑动窗口
  for (let i = k; i < nums.length; i++) {
    // 扩窗
    if (nums[i] === 1) {
      cnt++
    }
    // 缩窗
    if (nums[i - k] === 1) {
      cnt--
    }
    // 定长窗口统计
    max = Math.max(max, cnt);
  }
  return k - max;
};

let nums = [0, 1, 0, 1, 1, 0, 0];
// 1

let nums2 = [0, 1, 1, 1, 0, 0, 1, 1, 0];
// 2

console.log(minSwaps(nums));



/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps2 = function (nums) {
  let sum = nums.reduce((sum, val) => sum + val, 0)
  let L = 0,
    R = sum - 1,
    cnt = 0
  for (let i = 0; i <= R; ++i) {
    cnt += nums[i]
  }
  let res = sum - cnt
  while (R < nums.length + sum - 1) {
    // 数组成环处理方式
    if (nums[L % nums.length] == 1) cnt--
    if (nums[(R + 1) % nums.length] == 1) cnt++
    L++
    R++
    res = Math.min(res, sum - cnt)
  }
  return res
};