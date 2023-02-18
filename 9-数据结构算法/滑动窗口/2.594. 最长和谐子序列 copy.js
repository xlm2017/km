
// 和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1 。

// 现在，给你一个整数数组 nums ，请你在所有可能的子序列中找到最长的和谐子序列的长度。

// 数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。



// 示例 1：

// 输入：nums = [1,3,2,2,5,2,3,7]
// 输出：5
// 解释：最长的和谐子序列是 [3,2,2,2,3]
// 示例 2：

// 输入：nums = [1,2,3,4]
// 输出：2
// 示例 3：

// 输入：nums = [1,1,1,1]
// 输出：0


// 提示：

// 1 <= nums.length <= 2 * 10^4
// -10^9 <= nums[i] <= 10^9

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {

  nums.sort((a, b) => a - b);

  let n = nums.length;
  let ans = 0;
  for (let i = 0, j = 0; j < n; j++) {
    while (i < j && nums[j] - nums[i] > 1) {
      i++;
    }
    if (nums[j] - nums[i] == 1) {
      ans = Math.max(ans, j - i + 1);
    }
  }
  return ans;

  // 作者：宫水三叶
  // 链接：https://leetcode.cn/problems/longest-harmonious-subsequence/solutions/1111541/gong-shui-san-xie-yi-ti-shuang-jie-hua-d-quuh/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


};

// let nums = [1,3,2,2,5,2,3,7];
// [1,2,2,2,3,3,5,7]
//    2,2,2,3,3
// 5


// let nums = [1,2,2,1];
// 4

let nums = [1];


console.log(findLHS(nums));