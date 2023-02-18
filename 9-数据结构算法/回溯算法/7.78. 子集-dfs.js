// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]
 

// 提示：

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// nums 中的所有元素 互不相同



  /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  
  let res = [];
  let stack = [];
  function dfs(array, index) {
    for (let i = index; i < array.length; i++) {
      stack.push(nums[i]);
      res.push([...stack]);
      dfs(array, i + 1);
      stack.pop();     
    }
  }
  dfs(nums, 0);
  res.push([]);
  return res;
};

let nums = [1,2,3];

console.log(subsets(nums));