// 2021-12-08

// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标。



// 示例 1：

// 输入：nums = [2, 3, 1, 1, 4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。


// 示例 2：
// 输入：nums = [3, 2, 1, 0, 4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。


// 提示：

// 1 <= nums.length <= 3 * 10^4
// 0 <= nums[i] <= 10^5



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    maxIndex = nums[i] + i;

    console.log("下一个位置:", i, nums[i]);

    if (nums[i] === 0) {
      return false;
    }

    if (maxIndex >= nums.length - 1) {
      return true;
    }
    // let nextIndex = null;

    let max = 0;
    let nextIndex = 0;
    for (let j = i + 1; j <= maxIndex; j++) {
      // 计算这个区间跳跃的最大距离
      let temp = nums[j] + j;
      if (temp >= nums.length - 1) {
        return true;
      }
      // if (temp > nextIndex) {
      //   nextIndex = temp;
      // }
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

// let arr1 = [2, 3, 1, 1, 4];
// let arr1 = [1, 2, 3];

// let arr1 = [3, 2, 1, 0, 4];


// let arr1 = [0, 1];


// let arr1 = [2, 5, 0, 0];

// let arr1 = [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0];
// true


let arr1 = [4, 2, 0, 0, 1, 1, 4, 4, 4, 0, 4, 0];
// true


console.log("jieguo:", canJump(arr1));


// 何德何能, 能把这复杂的实现思路提炼成 贪心思想的 解题方式.


// 只要一直跳下去, 道路就会一直前进.