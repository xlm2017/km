// 在一个 n x n 的矩阵 grid 中，除了在数组 mines 中给出的元素为 0，其他每个元素都为 1。mines[i] = [xi, yi]表示 grid[xi][yi] == 0

// 返回  grid 中包含 1 的最大的 轴对齐 加号标志的阶数 。如果未找到加号标志，则返回 0 。

// 一个 k 阶由 1 组成的 “轴对称”加号标志 具有中心网格 grid[r][c] == 1 ，以及4个从中心向上、向下、向左、向右延伸，长度为 k - 1，由 1 组成的臂。注意，只有加号标志的所有网格要求为 1 ，别的网格可能为 0 也可能为 1 。



// 示例 1：



// 输入: n = 5, mines = [[4, 2]]
// 输出: 2
// 解释: 在上面的网格中，最大加号标志的阶只能是2。一个标志已在图中标出。
// 示例 2：



// 输入: n = 1, mines = [[0, 0]]
// 输出: 0
// 解释: 没有加号标志，返回 0 。


// 提示：

// 1 <= n <= 500
// 1 <= mines.length <= 5000
// 0 <= xi, yi < n
// 每一对(xi, yi) 都 不重复

/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  const dp = new Array(n).fill().map(() => new Array(n).fill(1));
  let max = 0;
  for (let i = 0; i < mines.length; i++) {
    const element = mines[i];
    dp[element[0]][element[1]] = 0;
  }
  // console.log("dp初始:", dp);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log("当前点:", i, j);
      let k = 1;
      //当前点的左右, 上下各个点
      if (dp[i][j] === 0) {
        continue;
      } else {
        if (max < 1) {
          max = 1;
        }
        // console.log("当前点值不为1", i, j);
        // console.log("循环之前的k值:", k, i, j);
        // 循环条件, 下标不能越界
        while ((j - k) >= 0 && (j + k) < n && (i - k) >= 0 && (i + k) < n) {
          // console.log("边界内循环中...", i, j);
          // console.log("新增值:", dp[i][j - k], dp[i][i + k], dp[i - k][j], dp[i + k][j], '\n');
          if (!dp[i][j - k] || !dp[i][j + k] || !dp[i - k][j] || !dp[i + k][j]) {
            break;
          } else {
            // console.log("当前k:", k);
            if (k == 1) {
              if (max < 2) {
                max = 2
              }
            } else if (k > 1) {
              if (max < k + 1) {
                max = k + 1
              }
            }
            k++;
          }
        }
      }
    }
    // console.log("\n====================");
  }
  return max;
};

console.log("n=5,结果:", orderOfLargestPlusSign(5, [[4, 2]])); // 2
console.log("n=1,结果:", orderOfLargestPlusSign(1, [[0, 0]])); // 0
console.log("n=2,结果:", orderOfLargestPlusSign(2, [[0, 0], [0, 1], [1, 0]])); // 1
console.log("n=5,结果:", orderOfLargestPlusSign(5, [[0, 2], [0, 4], [1, 2], [2, 0], [2, 3], [2, 4], [3, 4], [4, 2], [4, 4]])); // 2

// 2 0 1 2 4 3

let n = 10;
let arr = [[0, 0], [0, 5], [1, 2], [1, 9], [2, 5], [2, 8], [3, 1], [3, 6], [5, 0], [6, 1], [6, 4], [6, 6], [6, 8], [7, 8], [7, 9], [8, 1], [8, 8], [9, 0], [9, 1], [9, 2], [9, 4], [9, 5], [9, 6]];
console.log("n=10,结果:", orderOfLargestPlusSign(n, arr));  // 4

let n1 = 5;
let arr1 = [[3, 0], [3, 3]];
console.log("n=5,结果:", orderOfLargestPlusSign(n1, arr1));  // 3