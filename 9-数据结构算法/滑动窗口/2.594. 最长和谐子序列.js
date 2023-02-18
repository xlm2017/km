
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
var findLHS = function(nums) {
  if(nums.length === 1){
    return 0;
  }
  nums.sort((a,b)=>a-b)
  let max = 0;

  let point1 = 0;
  let point2 = 1;

  // [1,2,2,2,3,3,5,7]
  while (point1 < nums.length && point2 < nums.length) {
    if(Math.abs(nums[point2] - nums[point1]) <= 1){
      point2++
    }
    if(Math.abs(nums[point2] - nums[point1]) > 1){
      let cur = point2 - point1;
      console.log("统计当前:", cur, point1, point2);
      if(cur > max){
        max = cur;
      }
      point1++;
      point2 = point1 + 1;
    }
    if(point2 === nums.length && nums[point2 - 1] - nums[point1] === 1){
      let cur = point2 - point1;
      if(cur > max){
        max = cur;
      }
    }
  }


  return max === 1 ? 0 : max;
};

// let nums = [1,3,2,2,5,2,3,7];
// [1,2,2,2,3,3,5,7]
//    2,2,2,3,3
// 5


// let nums = [1,2,2,1];
// 4

let nums = [1,2];


console.log(findLHS(nums));