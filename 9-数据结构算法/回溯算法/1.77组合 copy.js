

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



// 暴力求解
function getList (n, k) {
  let res = []
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      res.push([i, j]);
    }
  }
  return res;
}

console.log("组合结果:", getList(4, 2));


var combine = function (n, k) {

  // 回溯, 递归函数
  function backtracking () {
    if (1 == 1) {
      backtracking();
    }
    // if(终止条件){
    // 收集结果
    // return;
    // }

    // 集合元素
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      // 处理节点

      // 递归函数
      // 回溯操作, 撤销操作

    }
  }


};
