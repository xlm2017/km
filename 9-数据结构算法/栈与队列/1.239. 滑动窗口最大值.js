// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回滑动窗口中的最大值。

// 提示：

// 1 <= nums.length <= 10 ^ 5
//   - 10 ^ 4 <= nums[i] <= 10 ^ 4
// 1 <= k <= nums.length



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let length = nums.length
  let stack = [];

  if (nums.length === 1 && k === 1) {
    return nums;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const element = nums[i];
    // 维护一个单调递增栈
    while (stack.length !== 0 && element >= nums[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length === 0) {
      stack.push(i);
    } else {
      if (element <= nums[stack[stack.length - 1]]) {
        // 小于栈顶元素, 添加入栈
        stack.push(i);
      }
    }
    // 判断当前i距离数组长度的距离
    if (length - i >= k) {
      // console.log("取值条件判断---当前i:", i, nums[i], nums[stack[0]]);
      res.push(nums[stack[0]]);
      // 删除下次不合格的数据
      if (stack[0] - i >= k - 1) {
        // console.log("删除下次不合格的数据:", i, stack[0]);
        stack.shift();
      }
    }
  }
  return res.reverse();
};




let nums = [1, 3, -1, -3, 5, 3, 6, 7];
console.log("结果集: ", maxSlidingWindow(nums, 3));

let nums2 = [1];
console.log("结果集: ", maxSlidingWindow(nums2, 1));

let nums3 = [1, -1];
console.log("结果集: ", maxSlidingWindow(nums3, 1));