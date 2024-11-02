// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。


// 示例 1：


// 输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
// 示例 2：

// 输入：board = [["X"]]
// 输出：[["X"]]


// 提示：

// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] 为 'X' 或 'O'



/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */



// 如果把 X 看作海水，把 O 看作陆地，被海水包围的区域就是岛屿。没被海水包围的陆地，与边界有连通，不是岛屿。题目要把岛屿沉了，变成海水。

// 判断是否为岛屿比较困难，但找出非岛屿比较简单——凡是与边界有联系的 O，标记为 NO，表示非岛屿。这个找的过程可以用 DFS 或 BFS。

// 所以非岛屿被标记为 NO，最后将它们恢复为 O，其余的 O，变成X。
const solve = (board) => {
  const m = board.length;
  if (m == 0) return [];
  const n = board[0].length;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]; 
  const bfs = (i, j) => {
    const queue = [[i, j]];
    board[i][j] = 'NO';                   // 入列的“root”染色一下
    while (queue.length) {
      const [curI, curJ] = queue.shift(); // 获取出列节点的i、j坐标
      for (const [dx, dy] of dirs) {      // 四个方向
        const x = curI + dx;              // 求出新坐标
        const y = curJ + dy;
        if (x < 0 || x == m || y < 0 || y == n) continue; // 越界了就忽略
        if (board[x][y] == 'O') {         // 是O，染色成XO
          board[x][y] = 'NO';   
          queue.push([x, y]);             // 染色成XO的节点入列
        }
      }
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
        if (board[i][j] == 'O') bfs(i, j); // 从最外层的O，开始BFS
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'NO') board[i][j] = 'O';
      else if (board[i][j] === 'O') board[i][j] = 'X';
    }
  }
};

// 作者：笨猪爆破组
// 链接：https://leetcode.cn/problems/surrounded-regions/solutions/369983/130-bei-wei-rao-de-qu-yu-bfs-by-hyj8/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


let board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]];
// 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]


console.log(solve(board));