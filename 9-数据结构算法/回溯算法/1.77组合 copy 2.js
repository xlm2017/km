

// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例:
// 输入: n = 4, k = 2
// 输出:
// [
// [2,4],
// [3,4],
// [2,3],
// [1,2],
// [1,3],
// [1,4],
// ]


/**
 * 
 * 数学排列组合
 * 
 * [0, 0], 两个位置可选数
 * 1, 2, 3, 4,选过的不能再选
 * [1, 2]
 * [1, 3]
 * [1, 4]
 * 
 * [2, 3]
 * [2, 4]
 * 
 * [3, 4]
 */





var combine = function (n, k) {

  // 遍历树的深度
  let depth = k;
  // 存放路径
  let stack = [];
  let used = [];
  // 存放结果集
  let res = [];

  // 设计参数
  // 循环主体, 当前深度, 元素是否已经用过
  backtracking(n, 0, 1);

  function backtracking (n, curDepth, index) {
    if (depth === curDepth) {
      // 最后一层了, 存放结果, 结束
      let stacks = JSON.parse(JSON.stringify(stack));
      res.push(stacks);
      console.log("本次循环结束:", stack);
      return;
    }

    for (let i = index; i <= n; i++) {
      if (used[i] === i) {
        continue;
      }
      if (stack.length && stack[stack.length - 1] >= i) {
        continue;
      }
      stack.push(i);
      used.push(i);
      backtracking(n, curDepth + 1, index + 1);
      stack.pop();
    }

  }

  return res;
};


console.log('结果集:', combine(4, 2));

console.log('结果集:', combine(5, 3));