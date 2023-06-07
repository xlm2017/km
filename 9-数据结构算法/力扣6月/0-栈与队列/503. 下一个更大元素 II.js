// 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。

// 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。



// 示例 1:

// 输入: nums = [1,2,1]
// 输出: [2,-1,2]
// 解释: 第一个 1 的下一个更大的数是 2；
// 数字 2 找不到下一个更大的数； 
// 第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
// 示例 2:

// 输入: nums = [1,2,3,4,3]
// 输出: [2,3,4,-1,4]


// 提示:

// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  nums = [...nums, ...nums];
  let stack = [];
  stack.push([0, nums[0]]);
  let res = new Array(nums.length).fill(-1);

  // 维护一个单调递减的栈 (存储下标)

  for (let i = 1; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1][1] < nums[i]) {
      let item = stack.pop();
      res[item[0]] = nums[i];
    }
    stack.push([i, nums[i]]);
  }

  // console.log("栈:", stack);
  return res.slice(0, res.length / 2);
};


// let nums = [1,2,3,4,3];
// [2,3,4,-1,4]

let nums = [1, 5, 4, 3, 2, 6];
// [5,6,6,6,6,-1]


console.log(nextGreaterElements(nums));







var nextGreaterElements2 = function (nums) {
  let res = new Array(nums.length).fill(-1);
  let arr = [0];
  for (let i = 1; i < nums.length * 2 - 1; i++) {
    while (nums[i % nums.length] > nums[arr[arr.length - 1]]) {
      let index = arr.pop();
      res[index] = nums[i % nums.length];
    }
    arr.push(i % nums.length);
  }
  return res;
};