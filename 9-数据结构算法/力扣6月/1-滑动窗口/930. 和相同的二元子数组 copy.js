// 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。

// 子数组 是数组的一段连续部分。



// 示例 1：

// 输入：nums = [1,0,1,0,1], goal = 2
// 输出：4
// 解释：
// 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
// 示例 2：

// 输入：nums = [0,0,0,0,0], goal = 0
// 输出：15


// 提示：

// 1 <= nums.length <= 3 * 104
// nums[i] 不是 0 就是 1
// 0 <= goal <= nums.length


/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let ans = 0;
  let sum = 0; 
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    // sum = 0; 
    // for(let j = i; j < nums.length; j++){
    //   sum += nums[j];
    //   if(sum === goal){
    //     ans++;
    //   }
    //   if(sum > goal){
    //     break;
    //   }
    // }

      sum += nums[i];
      if(sum === goal){
        ans++;
        // console.log("当前符合条件的下标:", i, nums[i]);
      }
      if(sum > goal){
        // console.log("sum:", sum);
        while (sum >= goal && left <= i) {
          sum = sum - nums[left];
          left++;
          if(sum === goal){
            // console.log("减之后i:", i, left);
            ans++;
          }
        } 
      }

  }
  return ans;
};

// let nums = [1,0,1,0,1], goal = 2;
// 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
// 4

// let nums = [1, 2, 3, 1, 2], goal = 6;

// let nums2 = [1, 2, 3, 5, 2], goal2 = 6;


let nums = [0,0,0,0,0], goal2 = 0;

console.log(numSubarraysWithSum(nums, goal));