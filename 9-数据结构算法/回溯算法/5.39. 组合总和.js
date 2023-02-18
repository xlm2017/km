// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。



// 示例 1：

// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]
// 解释：
// 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
// 7 也是一个候选， 7 = 7 。
// 仅有这两种组合。
// 示例 2：

// 输入: candidates = [2,3,5], target = 8
// 输出: [[2,2,2,2],[2,3,3],[3,5]]
// 示例 3：

// 输入: candidates = [2], target = 1
// 输出: []


// 提示：

// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// candidates 的所有元素 互不相同
// 1 <= target <= 40


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  // 临时回溯使用的栈
  let stack = [];
  function backtracking (deep) {
    if (stack.length === deep) {
      console.log("最后一层:", deep);
      let sum = stack.reduce((total, item) => {
        return total + item;
      })
      if (sum === target) {
        // 去掉重复的情况
        res.push(JSON.parse(JSON.stringify(stack)));
      }
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      stack.push(candidates[i]);
      let sum = stack.reduce((total, item) => {
        return total + item;
      })
      if (sum < target) {
      } else if (sum === target) {
        // res.push(JSON.parse(JSON.stringify(stack)));
        // continue;
        // return;
      } else {
        // 不合格的
        // continue;
        // return;
      }
      // 接着递归
      backtracking(deep);
      // 回溯
      stack.pop();
    }
  }
  for (let i = 1; i <= target / 2; i++) {
    console.log("最多i个元素组合:", i);
    stack = [];
    backtracking(i);
  }
  return res;
};



let candidates = [2, 3, 6, 7];
let target = 7;

console.log(combinationSum(candidates, target));