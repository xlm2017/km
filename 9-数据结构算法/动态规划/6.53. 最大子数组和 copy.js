// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。



// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [5,4,-1,7,8]
// 输出：23


// 提示：

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104


// 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  console.log("原始数组:", nums);
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  let startIndex = 0;
  let endIndex = 0;
  let ans = nums[0];
  let stack = [];
  let stackValue = [];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    if (ans <= 0) {
      // ans = Math.max(ans, element);
      if (ans <= element) {
        startIndex = i;
        endIndex = i;
        ans = element;
        // 清空栈
        stack = [];
        console.log("清空栈:", element);
      }
    } else {
      if (element > 0) {

        // 不能直接相加, 需要判断是否 连续
        // ans = ans + element;
        // endIndex = i;
        if (stack.length) {
          // 中间隔有一个负数或多个数(含正数负数)
          if (ans <= nums[i]) {
            ans = nums[i];
            console.log("当前stack中的数值:", stackValue, ans);
            // 尝试清空栈
            while (stack.length) {
              // 栈的下标之间, 可能相隔正整数
              let index = stack.pop();
              let nvalue = stackValue.pop();
              // 取出栈顶下标
              let value = ans + nums[index] + element
              for (let j = index; j <= i; j++) {
                console.log("遍历栈顶下标到当前元素之间的元素:", nums[j]);
              }
              if (!stack.length) {

              }

            }

            // 假设 num[i]最大
            ans = nums[i];
            console.log("再次清空栈:", element);
            stack = [];
          } else {

          }
        } else {
          // 中间没有隔负数
          endIndex = i;
          ans = ans + element;
        }

      } else {
        // 当前这个元素小于0, 不连续的话, 下个数可能很多, 或者下下个数很大
        stack.push(i);
        stackValue.push(element);
        console.log("当前入栈:", stackValue);
        // 先收集起来, 以备后续使用, 判断是否需要连续.
      }
    }
    dp[i] = ans;
  }

  console.log("递推最大值:", dp);
  return maxSum;
};


let arr0 = [-2, 1, -3, 4];
let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];  // 6
console.log("最大和:", maxSubArray(arr1));