
// 6893. 特别的排列 显示英文描述 
// 通过的用户数122
// 尝试过的用户数218
// 用户总通过次数124
// 用户总提交次数272
// 题目难度Medium
// 给你一个下标从 0 开始的整数数组 nums ，它包含 n 个 互不相同 的正整数。如果 nums 的一个排列满足以下条件，我们称它是一个特别的排列：

// 对于 0 <= i < n - 1 的下标 i ，要么 nums[i] % nums[i+1] == 0 ，要么 nums[i+1] % nums[i] == 0 。
// 请你返回特别排列的总数目，由于答案可能很大，请将它对 109 + 7 取余 后返回。



// 示例 1：

// 输入：nums = [2,3,6]
// 输出：2
// 解释：[3,6,2] 和 [2,6,3] 是 nums 两个特别的排列。
// 示例 2：

// 输入：nums = [1,4,3]
// 输出：2
// 解释：[3,1,4] 和 [4,1,3] 是 nums 两个特别的排列。


// 提示：

// 2 <= nums.length <= 14
// 1 <= nums[i] <= 109


/**
 * @param {number[]} nums
 * @return {number}
 */
var specialPerm = function (nums) {

  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = new Set();
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        if (key * 1 !== nums[i] && (key * 1 % nums[i] === 0 || nums[i] % key * 1 === 0)) {
          obj[nums[i]].add(key * 1);
          obj[key].add(nums[i]);
        }
      }
    }
  }
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      obj[key] = [...obj[key]]
    }
  }
  console.log("obj:", obj);


  let res = [];
  let stack = [];
  function backtracking(arr) {
    if (stack.length === nums.length) {
      res.push([...stack]);
    }
    for (let i = 0; i < arr.length; i++) {

      // 剪枝
      if (stack.length && stack[stack.length - 1] % arr[i] !== 0 && arr[i] % stack[stack.length - 1] !== 0) {
        continue;
      }

      stack.push(arr[i]);
      
      // 剩余的递归, 再接着取一个
      let temp = [...arr];
      temp.splice(i, 1);
      backtracking(temp);
      
      stack.pop();
    }
  }
  backtracking(nums);
  // console.log(res);
  return res.length;
}



// let nums = [8, 4, 2, 3, 6, 12];
// 输出：

let nums = [6, 30, 3, 9, 36, 72, 18, 54];
// 1440

console.log(specialPerm(nums));