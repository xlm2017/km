// 给你一个整数数组 nums ，判断是否存在三元组[nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。


// 示例 1：

// 输入：nums = [-1, 0, 1, 2, -1, -4]
// 输出：[[-1, -1, 2], [-1, 0, 1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是[-1, 0, 1] 和[-1, -1, 2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：

// 输入：nums = [0, 1, 1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：

// 输入：nums = [0, 0, 0]
// 输出：[[0, 0, 0]]
// 解释：唯一可能的三元组和为 0 。


// 提示：

// 3 <= nums.length <= 3000
//   - 10^5 <= nums[i] <= 10^5


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a,b) => a-b);
  // console.log(nums);
  for (let i = 0; i < nums.length; i++) {

    // console.log('i:', i);
    if(i > 0 && nums[i] === nums[i-1]){
      continue;
    }
    for (let j = i + 1, z = nums.length - 1; j < z;) {

      // 去重, 如何去重 ?
      



      // console.log(j, z);
      if(nums[j] + nums[z] === -nums[i]){
        // console.log("符合:", nums[i], nums[j], nums[z]);
        res.push([nums[i], nums[j], nums[z]]);
        j++;
        z--;
      }else if(nums[j] + nums[z] > -nums[i]){
        z--;
      }else{
        j++;
      }
      // else {
      //   nums[i] + nums[left] + nums[right] > 0 ? right-- : left++;
      // }

      // 去重
      while (j > i + 1 && nums[j] == nums[j - 1]) j++;
      while (z < nums.length - 1 && nums[z] == nums[z + 1]) z--;

      // while (left > i + 1 && nums[left] == nums[left - 1]) left++;
      // while (right < nums.length - 1 && nums[right] == nums[right + 1]) right--;

      // 作者：不吃辣
      // 链接：https://leetcode.cn/problems/3sum/solutions/1524226/dai-ma-jian-ji-de-jie-fa-jsban-ben-by-it-ubxa/
      // 来源：力扣（LeetCode）

    }    
  }

  return res;
};

// let num1 = [-1, 0, 1, 2, -1, -4];
// [[-1,-1,2],[-1,0,1]]


let num1 = [-2,0,0,2,2];
// [-2, 0, 2]

console.log(threeSum(num1));
