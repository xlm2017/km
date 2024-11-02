
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




  // const res = [];
  let cnt = 0;
  const used = {};

  function dfs(path) {
    if (path.length == nums.length) { // 个数选够了
      // res.push(path.slice()); // 拷贝一份path，加入解集res
      cnt++;
      return;                 // 结束当前递归分支
    }
    for (const num of nums) { // for枚举出每个可选的选项
      // if (path.includes(num)) continue; // 别这么写！查找是O(n)，增加时间复杂度
      if (used[num]) continue; // 使用过的，跳过
      if (path.length && path[path.length - 1] % num !== 0 && num % path[path.length - 1] !== 0) {
        continue;
      }
      path.push(num);         // 选择当前的数，加入path
      used[num] = true;       // 记录一下 使用了
      dfs(path);              // 基于选了当前的数，递归
      path.pop();             // 上一句的递归结束，回溯，将最后选的数pop出来
      used[num] = false;      // 撤销这个记录
    }
  }

  dfs([]); // 递归的入口，空path传进去
  // return res;
  return cnt;
}



// let nums = [8, 4, 2, 3, 6, 12];
// 输出：

let nums = [6, 30, 3, 9, 36, 72, 18, 54];
// 1440

console.log(specialPerm(nums));