// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

 

// 示例 1：

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// 示例 2：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

// 提示：

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = [];
  let stack = [];
  // nums.sort((a,b)=>a-b);

  const vis = new Array(nums.length).fill(false);

  function backtracking(arr){
    if(stack.length === nums.length){
      res.push([...stack]);
    }
    for (let i = 0; i < arr.length; ++i) {
      // 剪枝
      if (vis[i] || (i > 0 && arr[i] === arr[i - 1] && !vis[i - 1])) {
        continue;
      }

      stack.push(arr[i]);
      let temp = [...arr];
      temp.splice(i, 1);
      vis[i] = true;
      backtracking(temp);
      vis[i] = false;
      stack.pop();
    }
  }
  backtracking(nums);
  return res;
};

// let nums = [1,1,2];

let nums = [3,3,0,3];
// [[0,3,3,3],[3,0,3,3],[3,3,0,3],[3,3,3,0]]

// 错误
// [[3,3,0,3],[3,3,3,0],[3,0,3,3],[3,3,3,0],[3,3,0,3],[0,3,3,3],[3,3,3,0],[3,3,0,3],[3,0,3,3]]

console.log(permuteUnique(nums));