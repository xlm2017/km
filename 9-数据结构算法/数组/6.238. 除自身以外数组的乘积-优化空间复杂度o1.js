// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请不要使用除法，且在 O(n) 时间复杂度内完成此题。



// 示例 1:

// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]
// 示例 2:

// 输入: nums = [-1,1,0,-3,3]
// 输出: [0,0,9,0,0]


// 提示：

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内


// 进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const length = nums.length;
  const answer = new Array(length);

  // answer[i] 表示索引 i 左侧所有元素的乘积
  // 因为索引为 '0' 的元素左侧没有元素， 所以 answer[0] = 1
  answer[0] = 1;
  for (let i = 1; i < length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }

  // R 为右侧所有元素的乘积
  // 刚开始右边没有元素，所以 R = 1
  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
    // 对于索引 i，左边的乘积为 answer[i]，右边的乘积为 R
    answer[i] = answer[i] * R;
    // R 需要包含右边所有的乘积，所以计算下一个结果时需要将当前值乘到 R 上
    R *= nums[i];
  }
  return answer;
};


let nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));


// 数组泛化演绎, 动手, 修正直觉, 一定要动手, 才有可能修正直觉



// 时间复杂度：O(N). 其中 NNN 指的是数组 nums 的大小。预处理 L 和 R 数组以及最后的遍历计算都是 O(N)O(N)O(N) 的时间复杂度。
// 空间复杂度：O(N)，其中 NNN 指的是数组 nums 的大小。使用了 L 和 R 数组去构造答案，L 和 R 数组的长度为数组 nums 的大小。

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/product-of-array-except-self/solutions/272369/chu-zi-shen-yi-wai-shu-zu-de-cheng-ji-by-leetcode-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。