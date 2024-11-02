// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 请你找出符合题意的 最短 子数组，并输出它的长度。



// 示例 1：

// 输入：nums = [2,6,4,8,10,9,15]
// 输出：5
// 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
// 示例 2：

// 输入：nums = [1,2,3,4]
// 输出：0
// 示例 3：

// 输入：nums = [1]
// 输出：0


// 提示：

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105


/**
 * @param {number[]} nums
 * @return {number}
 */


// 最小元素左边比它大的元素都要参与排序，最大元素右边比它小的元素都要调整

var findUnsortedSubarray = function (nums) {
  const stack = [];
  const len = nums.length;
  let left = len;
  let right = 0;
  for (let i = 0; i < len; i++) {
    while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
      left = Math.min(left, stack.pop());
    }
    stack.push(i);
  }
  stack.length = 0;
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      right = Math.max(right, stack.pop());
    }
    stack.push(i);
  }
  return right - left + 1 > 0 ? right - left + 1 : 0;
};


// 作者：ran
// 链接：https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/solutions/1033997/dan-diao-zhan-jie-fa-on-by-20182726-e3pb/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

let nums = [2, 6, 4, 8, 10, 9, 15];
// 5


console.log(findUnsortedSubarray(nums));