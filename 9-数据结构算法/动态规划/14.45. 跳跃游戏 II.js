// 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 假设你总是可以到达数组的最后一个位置。



// 示例 1:

// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 示例 2:

// 输入: nums = [2,3,0,1,4]
// 输出: 2


// 提示:

// 1 <= nums.length <= 10^4
// 0 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 每次都选择跳的最远的 ?   就一定是最少的步骤吗 ?
  // 第一次为2, 有两条路可选, 哪条路当前顺利, 后面会有死胡同吗, 连续的1111低速区  0000死寂区
  let times = 0;
  if (nums.length === 1) {
    // return true;
    return 0;
  }
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    maxIndex = nums[i] + i;
    // console.log("下一个位置:", i, nums[i]);
    times++;
    if (maxIndex >= nums.length - 1) {
      return times;
      // return true;
    }
    let max = 0;
    let nextIndex = 0;
    for (let j = i + 1; j <= maxIndex; j++) {
      // 计算这个区间跳跃的最大距离
      let temp = nums[j] + j;
      if (temp >= nums.length - 1) {
        times++;
        return times;
        // return true;
      }
      if (temp > max) {
        max = temp;
        nextIndex = j;
      }
      if (j === maxIndex) {
        if (max <= maxIndex) {
          return false;
        } else {
          i = nextIndex - 1
        }
      }
    }
  }
};

// let nums1 = [2, 3, 1, 4, 1];
// 2

let nums1 = [2, 3, 0, 1, 4];
// 2

console.log(jump(nums1));