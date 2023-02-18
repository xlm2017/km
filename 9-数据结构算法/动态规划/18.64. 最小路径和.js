// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。

// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
// 示例 2：

// 输入：grid = [[1,2,3],[4,5,6]]
// 输出：12
 

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 100

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let dp = new Array(grid.length).fill().map(()=> new Array(grid[0].length).fill(0));
  dp[0][0] = grid[0][0];
  // console.log("dp:", dp);
  // 纵向层
  for(let i = 0; i < grid.length; i++){
      // 其中一排的一个
      for(let j = 0; j < grid[0].length; j++){
          if(i === 0 && j > 0){
            dp[0][j] = dp[0][j - 1] + grid[i][j];
            continue;
          }
          if(j === 0 && i > 0){
            dp[i][0] = dp[i - 1][0] + grid[i][j];
            continue;
          }
          if( i > 0 && j > 0){
            dp[i][j] = Math.min(dp[i-1][j] + grid[i][j], dp[i][j-1] + grid[i][j]);
          }
      }
  }
  return dp[dp.length-1].pop();
  // console.log("dp:", dp);
};

let grid1 = [[1,3,1],[1,5,1],[4,2,1]];

console.log(minPathSum(grid1));

// 1 3 1
// 1 5 1
// 4 2 1