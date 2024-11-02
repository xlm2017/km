
// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

 

// 示例 1：

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]


var combine = function(n, k) {
  let res = [];
  function dfs(start, paths){
    // 剪枝
    let d = k - paths.length;
    if(start + d - 1 > n) return;

    // 收集放前后都可以, 放前面提前返回,节省时间
    if(paths.length === k){
      res.push(paths.slice());
      return;
    }

    // 回溯过程
    for (let i = start; i <= n; i++) {
      paths.push(i);
      dfs(i + 1, paths);
      paths.pop();      
    }
    // if(paths.length === k){
    //   res.push(paths.slice());
    // }

    // 剪枝
    // let d = k - paths.length;
    // if(start + d - 1 > n) return;
  }
  dfs(1, []);
  return res;
}


let n = 5, k = 2;
console.log(combine(n, k));