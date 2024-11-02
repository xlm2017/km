// 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

// 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

// 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。



// 示例 1：



// 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// 输出：16
// 解释：它的周长是上面图片中的 16 个黄色的边
// 示例 2：

// 输入：grid = [[1]]
// 输出：4

// 示例 3：
// 输入：grid = [[1,0]]
// 输出：4


// 提示：

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] 为 0 或 1



// 岛就一个，我们从第一个遇到的土地开始深搜。

// 对于每个土地节点，做一些事情，基于它，递归上下左右四个点，做同样的事情。做什么事情呢？

// 从土地到土地，之间不会产生周长，但从土地迈入海洋，之间会产生 1 个周长，从土地迈出矩阵边界，也会产生 1 个周长。

// dfs 的过程中，对当前点的上下左右递归，下一个递归的点又对上下左右递归，就会造成重复访问，造成周长的重复计算。

// 遍历过的土地节点，将值改为 2，区分于 1 和 0，代表访问过了。

// 总结
// DFS 从一个点，向四周扩散，目标是遇到矩阵边界或海水，它们是答案已知的 base case，是位于递归树底部的 case，是递归的终止条件。

// 从上而下递归调用，随着递归的出栈，子问题的解自下而上地返回，最后得出大问题的解。

var islandPerimeter = function (grid) {


  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return 1; // 当前正好越界，说明穿过了一个边界，周长+1
    }
    if (grid[i][j] == 0) { // 从土地来到了海水，说明穿过了一个边界，周长+1
      return 1;
    }
    if (grid[i][j] == 2) { // 之前访问过，直接返回，返回0，无周长收益
      return 0;
    }
    // 到此，当前点为1，将它改为2，代表已访问
    grid[i][j] = 2;
    // 继续往四个方向“扩散”，目标是遇到边界和海水，答案随着递归出栈向上返回，得出大的答案
    return dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        return dfs(i, j);   // dfs的入口
      }
    }
  }
  return 0;


};


let grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
// 输出：16



console.log(islandPerimeter(grid));




// 迭代版本
var islandPerimeter2 = function (grid) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const n = grid.length, m = grid[0].length;
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (grid[i][j]) {
        let cnt = 0;
        for (let k = 0; k < 4; ++k) {
          let tx = i + dx[k];
          let ty = j + dy[k];
          if (tx < 0 || tx >= n || ty < 0 || ty >= m || !grid[tx][ty]) {
            cnt += 1;
          }
        }
        ans += cnt;
      }
    }
  }
  return ans;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/island-perimeter/solutions/466248/dao-yu-de-zhou-chang-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
