// 给你一个下标从 0 开始的整数数组nums 。每次操作中，你可以：

// 选择两个满足 0 <= i, j < nums.length 的不同下标 i 和 j 。
// 选择一个非负整数 k ，满足 nums[i] 和 nums[j] 在二进制下的第 k 位（下标编号从 0 开始）是 1 。
// 将 nums[i] 和 nums[j] 都减去 2^k 。
// 如果一个子数组内执行上述操作若干次后，该子数组可以变成一个全为 0 的数组，那么我们称它是一个 美丽 的子数组。

// 请你返回数组 nums 中 美丽子数组 的数目。

// 子数组是一个数组中一段连续 非空 的元素序列。

 

// 示例 1：

// 输入：nums = [4,3,1,2,4]
// 输出：2
// 解释：nums 中有 2 个美丽子数组：[4,3,1,2,4] 和 [4,3,1,2,4] 。
// - 按照下述步骤，我们可以将子数组 [3,1,2] 中所有元素变成 0 ：
//   - 选择 [3, 1, 2] 和 k = 1 。将 2 个数字都减去 2^1 ，子数组变成 [1, 1, 0] 。
//   - 选择 [1, 1, 0] 和 k = 0 。将 2 个数字都减去 2^0 ，子数组变成 [0, 0, 0] 。
// - 按照下述步骤，我们可以将子数组 [4,3,1,2,4] 中所有元素变成 0 ：
//   - 选择 [4, 3, 1, 2, 4] 和 k = 2 。将 2 个数字都减去 22 ，子数组变成 [0, 3, 1, 2, 0] 。
//   - 选择 [0, 3, 1, 2, 0] 和 k = 0 。将 2 个数字都减去 20 ，子数组变成 [0, 2, 0, 2, 0] 。
//   - 选择 [0, 2, 0, 2, 0] 和 k = 1 。将 2 个数字都减去 21 ，子数组变成 [0, 0, 0, 0, 0] 。
// 示例 2：

// 输入：nums = [1,10,4]
// 输出：0
// 解释：nums 中没有任何美丽子数组。
 

// 提示：

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 106


/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    arr.push(element.toString(2));
  }
  console.log(arr);
  // [ '100', '11', '1', '10', '100' ]

  // 1  1    2  2
  // 3  1  2   
  // 2  1  3 

  // 中心扩散式, 回文子串
  
  let count = 0;
  // 两端抵消或者 一端二个抵消一个
  let dp = new Array(arr.length).fill().map(()=>new Array(arr.length).fill(false));
  for (let j = 0; j < arr.length; j++) { // 注意扫描矩阵的方向，下面会解释
    for (let i = 0; i <= j; i++) {
      if (i == j) {   // 单个字符的情况
        if(arr[i] === 0){
          dp[i][j] = 1;
        }else{
          dp[i][j] = -1;
        }
      } else if (j - i == 1 && arr[i] == arr[j]) { // 两个字符的情况 
        dp[i][j] = 1;
        count++;
      } else if (j - i > 1 && arr[i] == arr[j]) { // 多于两个字符
        if(dp[i + 1][j - 1] == 1){
          dp[i][j] = true;
          count++;
        }
      }else if(j - i > 1 && arr[i] !== arr[j]){
        if(nums[i] === (nums[j-1] | nums[j]) || nums[i] | nums[i+1] === (nums[j])){
          dp[i][j] = -1;
          console.log("技数", count)
          count++;
        }
      }
    }
  }

  return count;
};

let nums = [4,3,1,2,4];

console.log(beautifulSubarrays(nums));