// 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。



// 示例 1：


// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]
// 示例 2：

// 输入：n = 1
// 输出：[[1]]


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {

  
  // 使用num <= tar而不是l < r || t < b作为迭代条件，是为了解决当n为奇数时，矩阵中心数字无法在迭代过程中被填充的问题。

  let l = 0, r = n - 1, t = 0, b = n - 1;
  let mat = new Array(n).fill().map(() => new Array(n).fill(0));
  let num = 1, tar = n * n;
  while (num <= tar) {
    for (let i = l; i <= r; i++) mat[t][i] = num++; // left to right.
    t++;
    for (let i = t; i <= b; i++) mat[i][r] = num++; // top to bottom.
    r--;
    for (let i = r; i >= l; i--) mat[b][i] = num++; // right to left.
    b--;
    for (let i = b; i >= t; i--) mat[i][l] = num++; // bottom to top.
    l++;
  }
  return mat;
};


console.log(generateMatrix(3));
// [[1,2,3],[8,9,4],[7,6,5]]