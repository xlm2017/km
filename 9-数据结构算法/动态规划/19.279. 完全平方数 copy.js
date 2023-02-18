// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

 

// 示例 1：

// 输入：n = 12
// 输出：3 
// 解释：12 = 4 + 4 + 4
// 示例 2：

// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9
 
// 提示：

// 1 <= n <= 10^4



/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = new Array(n+1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {

    if(Math.sqrt(i) % 1 === 0){
      dp[i] = 1;
      continue;
    }

    let arr = [];
    let j = 1;
    let k = i - 1;
    while (j <= k) {
      arr.push(dp[j] + dp[k]);
      j++;
      k--;
    }
    dp[i] = Math.min(...arr);
  }
  // console.log("dp:", dp);
  return dp[dp.length - 1];
};


// let n1 = 12;
// 4 + 4 + 4 = 12
// 3

let n1 = 12;

console.log(numSquares(n1));