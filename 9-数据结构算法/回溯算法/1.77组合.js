

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


console.log("组合结果:", getList(100, 50));


// 回溯算法
function backtracking (n, k) {
  function atomic (arr) {
    let res = [];
    if (!arr.length) {
      for (let i = 1; i <= n; i++) {
        res.push([i]);
        if (i === n && res[0].length < k) {
          // 递归
          atomic(res);
        } else {
          return res;
        }
      }
    } else {
      k = k - 1;
      // 第二层, 扩展上一层的数组

      // 已经收集了树的第一层, 取了数组 [ [1], [2], [3], [4], ... ,[n] ];
      for (let j = 0; j < res.length; j++) {
        const element = res[j];

        // 计算遍历的起始下标

        for (let z = index; z < array.length; z++) {
          const element = array[z];

        }
      }
    }
  }
  return atomic([]);
}

console.log("回溯-组合结果:", getList(4, 3));

// 原子代码块
// function atomic (k, n) {
//   for (let i = k + 1; i <= n; i++) {
//     console.log("i:", i);
//   }
// }


