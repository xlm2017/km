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
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */



// 并查集：先把四个边上的连在一起，中间的连在一起，然后根据不属于此联通的就是需要更改的位置。


var solve = function (board) {
  // JavaScript
  class unionFind {
    constructor(n) {
      this.count = n;
      this.parent = new Array(n);
      for (let i = 0; i < n; i++) {
        this.parent[i] = i;
      }
    }

    find(p) {
      let root = p;
      while (this.parent[root] !== root) {
        root = this.parent[root];
      }
      // 压缩路径
      while (this.parent[p] !== p) {
        let x = p;
        p = this.parent[p];
        this.parent[x] = root;
      }
      return root;
    }

    union(p, q) {
      let rootP = this.find(p);
      let rootQ = this.find(q);
      if (rootP === rootQ) return;
      this.parent[rootP] = rootQ;
      this.count--;
    }
    isConnected(x, y) {
      return this.find(x) === this.find(y)
    }
  }
  let row = board.length;
  if (row == 0) return;
  let col = board[0].length;
  let dummy = row * col;
  let uf = new unionFind(dummy);
  let arr = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] == 'O') {
        if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
          uf.union(i * col + j, dummy)
        } else {
          //考察四个方向
          for (let k = 0; k < 4; k++) {
            let x = i + arr[k][0];
            let y = j + arr[k][1];
            if (board[x][y] == 'O') uf.union(x * col + y, i * col + j);
          }
        }
      }
    }
  }
  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      if (!uf.isConnected(i * col + j, dummy)) board[i][j] = 'X';
    }
  }

};

// 作者：Gavin
// 链接：https://leetcode.cn/problems/surrounded-regions/solutions/510323/js-bing-cha-ji-by-missed-you-ri7k/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



let board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]];
// 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]


console.log(solve(board));