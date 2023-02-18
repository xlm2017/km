// 复习简单回溯

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

function combine (n, k) {
  let res = [];
  // for (let i = 1; i <= n; i++) {
  //   // let item1 = [i];
  //   for (let j = i + 1; j <= n; j++) {
  //     // let item2 = [j]
  //     // res.push(item1.concat(item2));
  //     res.push([i, j]);
  //   }
  // }

  let stack = [];
  function backFun (n, k) {
    if (k === 0) {
      res.push(JSON.parse(JSON.stringify(stack)));
      console.log("递归到了最大深度:", stack, res);
      return
    }
    for (let i = n - 1 - k; i <= n; i++) {
      if (stack.length && stack[stack.length - 1] >= i) {
        continue;
      }
      // 存储路径
      stack.push(i);
      console.log("存储值:", i, stack);
      backFun(n, k - 1);
      // 回溯路径
      stack.pop();
    }
  }

  backFun(n, k);

  return res;
}

console.log('结果集:', combine(4, 2));