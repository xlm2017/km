/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-05-16 08:56:34
 * @LastEditTime: 2023-05-16 15:33:24
 * @LastEditors: xlm
 */


// 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

// 必须在不使用库内置的 sort 函数的情况下解决这个问题。

 

// 示例 1：

// 输入：nums = [2,0,2,1,1,0]
// 输出：[0,0,1,1,2,2]
// 示例 2：

// 输入：nums = [2,0,1]
// 输出：[0,1,2]
 

// 提示：

// n == nums.length
// 1 <= n <= 300
// nums[i] 为 0、1 或 2
 

// 进阶：

// 你能想出一个仅使用常数空间的一趟扫描算法吗？


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let res = [];
  
  // let i,j,k = 0;
  let j = 0;
  console.log("测试:", nums, j);
  for (let index = 0; index < nums.length; index++) {
    if(nums[index] === 0){
      // res.splice(i, 0, nums[index]);
      res.unshift(nums[index]);
      j++;
      // k++;
    }else if(nums[index] === 1){
      res.splice(j, 0, nums[index]);
      // k++;
    }else{
      res.push(nums[index]);
    }
  }

  return res;
};

let nums = [2,0,2,1,1,0];

console.log("sortColors:", sortColors(nums));