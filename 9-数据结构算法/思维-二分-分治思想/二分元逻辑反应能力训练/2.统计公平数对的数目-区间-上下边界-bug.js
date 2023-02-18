// 给你一个下标从 0 开始、长度为 n 的整数数组 nums ，和两个整数 lower 和 upper ，返回 公平数对的数目 。

// 如果 (i, j) 数对满足以下情况，则认为它是一个 公平数对 ：

// 0 <= i < j < n，且
// lower <= nums[i] + nums[j] <= upper


// 示例 1：

// 输入：nums = [0,1,7,4,4,5], lower = 3, upper = 6
// 输出：6
// 解释：共计 6 个公平数对：(0,3)、(0,4)、(0,5)、(1,3)、(1,4) 和 (1,5) 。
// 示例 2：

// 输入：nums = [1,7,9,2,5], lower = 11, upper = 11
// 输出：1
// 解释：只有单个公平数对：(2,3) 。


// 提示：

// 1 <= nums.length <= 105
// nums.length == n
// -109 <= nums[i] <= 109
// -109 <= lower <= upper <= 109


/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  let res = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {

    let min = lower - nums[i];
    let max = upper - nums[i];
    let start = bs1(nums, i + 1, nums.length - 1, min);
    let end = bs2(nums, i + 1, nums.length - 1, max);
    console.log("i:", i, start, end);
    res += (end - start + 1);
  }
  return res;
};

function bs1 (nums, i, j, flag) {
  while (i <= j) {
    // let t = (i + j) / 2;
    // let t = (i + j) >> 1;
    let t = Math.floor((i + j) / 2);
    if (nums[t] > flag){
      j = t - 1;
    }else{
      i = t + 1;
    } 
  }
  return j;
}
function bs2 (nums, i, j, flag) {
  while (i <= j) {
    // let t = (i + j) / 2;
    // let t = (i + j) >> 1;
    let t = Math.floor((i + j) / 2);
    if (nums[t] < flag){
      i = t + 1;
    } else {
      j = t - 1;
    }
  }
  return i;
}


let nums = [0, 1, 7, 4, 4, 5], lower = 3, upper = 6;
// 6

console.log(countFairPairs(nums, lower, upper));