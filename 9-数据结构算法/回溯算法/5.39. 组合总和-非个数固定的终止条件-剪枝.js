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
  function backtracking (array, index) {
    // [ [ 2, 2, 3 ], [ 2, 3, 2 ], [ 3, 2, 2 ], [ 7 ] ]
    for (let i = index; i < array.length; i++) {
      if (stack.length) {
        let sum = stack.reduce((total, item) => {
          return total + item;
        })
        if (sum === target) {
          console.log("满足条件:", stack, i);
          res.push(JSON.parse(JSON.stringify(stack)));
          // 不能影响回溯
          // stack = [];
          return;
          // 无需进行剩余的for循环, 剪枝, 这个break无效
          // break;
        } else if (sum > target) {
          // 不能影响回溯
          // stack = [];
          return;
        } else {
          console.log("sum小于条件:", stack, array);
        }
      }

      stack.push(array[i]);
      // 接着递归
      backtracking(array, i);
      // 回溯
      stack.pop();
    }
  }

  backtracking(candidates.slice(0), 0);
  // for (let i = 0; i < candidates.length; i++) {
  //   backtracking(candidates.slice(i));
  // }
  return res;
};


let candidates = [2, 3, 6, 7];
let target = 7;

console.log(combinationSum(candidates, target));