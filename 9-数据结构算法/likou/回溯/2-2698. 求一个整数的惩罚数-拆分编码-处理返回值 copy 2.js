// 给你一个正整数 n ，请你返回 n 的 惩罚数 。

// n 的 惩罚数 定义为所有满足以下条件 i 的数的平方和：

// 1 <= i <= n
// i * i 的十进制表示的字符串可以分割成若干连续子字符串，且这些子字符串对应的整数值之和等于 i 。


// 示例 1：

// 输入：n = 10
// 输出：182
// 解释：总共有 3 个整数 i 满足要求：
// - 1 ，因为 1 * 1 = 1
// - 9 ，因为 9 * 9 = 81 ，且 81 可以分割成 8 + 1 。
// - 10 ，因为 10 * 10 = 100 ，且 100 可以分割成 10 + 0 。
// 因此，10 的惩罚数为 1 + 81 + 100 = 182
// 示例 2：

// 输入：n = 37
// 输出：1478
// 解释：总共有 4 个整数 i 满足要求：
// - 1 ，因为 1 * 1 = 1
// - 9 ，因为 9 * 9 = 81 ，且 81 可以分割成 8 + 1 。
// - 10 ，因为 10 * 10 = 100 ，且 100 可以分割成 10 + 0 。
// - 36 ，因为 36 * 36 = 1296 ，且 1296 可以分割成 1 + 29 + 6 。
// 因此，37 的惩罚数为 1 + 81 + 100 + 1296 = 1478


// 提示：

// 1 <= n <= 1000



/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let sum = 0;
  function dfs(num, start, str) {
    // console.log("dfs", num, start, str, sum);
    // 回溯切割str这个字符串
    if (start === str.length) {
      // console.log("sum:", sum, num);
      return sum === num;
      // if(sum === num){
      //   return true;
      // }else{
      //   false;
      // }
    }
    for (let j = start; j < str.length; j++) {
      let a = str.slice(start, j + 1) * 1;
      sum += a;
      console.log("a:", a, sum);
      if (dfs(num, j + 1, str)) {
        return true;
      }
      sum -= a;
    }
    return false;
  }
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    let str = i * i + '';
    sum = 0;
    if (dfs(i, 0, str)) {
      console.log("符合条件:", i);
      ans += i * i;
    }
  }
  return ans;
};


let n = 37
// 输出：1478
// 37 的惩罚数为 1 + 81 + 100 + 1296 = 1478

// n = 1;

console.log(punishmentNumber(n));