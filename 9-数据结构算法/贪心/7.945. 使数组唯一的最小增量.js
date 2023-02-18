// 给你一个整数数组 nums 。每次 move 操作将会选择任意一个满足 0 <= i < nums.length 的下标 i，并将 nums[i] 递增 1。

// 返回使 nums 中的每个值都变成唯一的所需要的最少操作次数。

 

// 示例 1：

// 输入：nums = [1,2,2]
// 输出：1
// 解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
// 示例 2：

// 输入：nums = [3,2,1,2,1,7]
// 输出：6
// 解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
// 可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
 

// 提示：
// 1 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^5


/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
  nums.sort((a, b)=>a-b);
  
  let res = 0;
  let arr = [];
  for (let i = 1; i < nums.length; i++) {
    if(arr.length){
      if(nums[i] === nums[i - 1] || arr.includes(nums[i])) {
        // nums[i] + 1, 直到唯一
        let cur = nums[i] + 1;
        while (nums.includes(cur) || arr.includes(cur)) {
          cur++;
        }
        arr.push(cur);
        res += cur - nums[i]; 
      }
    }else{
      if(nums[i] === nums[i - 1]){
        let cur = nums[i] + 1;
        while (nums.includes(cur)) {
          cur++;
        }
        arr.push(cur);
        res += cur - nums[i];
      }
    }
  }
  return res;
};
//  1, 1, 2, 2, 3, 7
// [3, 4, 1, 2, 5, 7]。
//  1  4  2  5  3  7   3+3

let nums = [3,2,1,2,1,7];

console.log(minIncrementForUnique(nums));


// 超时了

