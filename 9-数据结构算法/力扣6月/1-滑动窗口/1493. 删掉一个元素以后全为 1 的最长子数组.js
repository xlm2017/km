// 给你一个二进制数组 nums ，你需要从中删掉一个元素。

// 请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。

// 如果不存在这样的子数组，请返回 0 。



// 提示 1：

// 输入：nums = [1,1,0,1]
// 输出：3
// 解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。
// 示例 2：

// 输入：nums = [0,1,1,1,0,1,1,0,1]
// 输出：5
// 解释：删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。
// 示例 3：

// 输入：nums = [1,1,1]
// 输出：2
// 解释：你必须要删除一个元素。


// 提示：

// 1 <= nums.length <= 10^5
// nums[i] 要么是 0 要么是 1 。


// 思路, 问题转换为只包含一个0的最大窗口

var longestSubarray = function (nums) {
  let maxLen = 0;
  let l = 0;
  let r = 0;
  let cnt = 0;
  for (; r < nums.length; r++) {
    if (nums[r] === 0) {
      cnt++
    }
    // 0的个数超了
    while (cnt > 1) {
      if (nums[l] === 0) {
        cnt--;
      }
      l++
    }
    // console.log("窗口状态:", l, r);
    // 符合条件的窗口, 必须删除一个
    if (cnt <= 1) {
      maxLen = Math.max(maxLen, r - l)
    }
  }
  return maxLen;
};

let nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
// 5


// let nums = [1,1,1];
// 3

console.log(longestSubarray(nums));



// 类似题型

// 1156. 单字符重复子串的最大长度  https://leetcode.cn/problems/swap-for-longest-repeated-character-substring/description/

// 如果字符串中的所有字符都相同，那么这个字符串是单字符重复的字符串。
// 给你一个字符串 text，你只能交换其中两个字符一次或者什么都不做，然后得到一些单字符重复的子串。返回其中最长的子串的长度。

// 理解。。。。。 aabaabaaaa

// 示例 1：

// 输入：text = "ababa"
// 输出：3
// 示例 2：

// 输入：text = "aaabaaa"
// 输出：6
// 示例 3：

// 输入：text = "aaabbaaa"
// 输出：4
// 示例 4：

// 输入：text = "aaaaa"
// 输出：5
// 示例 5：

// 输入：text = "abcdef"
// 输出：1



// 最佳
var longestSubarray2 = function (nums) {
  let l = 0, r = 0
  let max = 0
  let zero = 0
  while (r < nums.length) {
    if (nums[r] === 0) {
      zero++
    }
    while (zero > 1) {
      if (nums[l] == 0) {
        zero--
      }
      l++
    }

    max = Math.max(max, r - l)
    r++

  }
  return max
};