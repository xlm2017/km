

// 有两种形状的瓷砖：一种是 2 x 1 的多米诺形，另一种是形如 "L" 的托米诺形。两种形状都可以旋转。

// 给定整数 n ，返回可以平铺 2 x n 的面板的方法的数量。返回对 109 + 7 取模 的值。

// 平铺指的是每个正方形都必须有瓷砖覆盖。两个平铺不同，当且仅当面板上有四个方向上的相邻单元中的两个，使得恰好有一个平铺有一个瓷砖占据两个正方形。
/**
 *   ##   ##
 *        #
 */





/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  let dp = new Array(n);
  dp[0] = 1;
  for (let i = 1; i < n.length; i++) {
    if (i === 1) {
      dp[1] = 2;
      continue;
    }
    if (i === 2) {
      dp[2] = 5;
      continue;
    }

  }
  return dp[dp.length - 1];
};
// n=1,2,3,4,5,6   // 1, 2, 5, 11, 24, 53
console.log("最大多少种平铺方式:", numTilings(3));  // 5