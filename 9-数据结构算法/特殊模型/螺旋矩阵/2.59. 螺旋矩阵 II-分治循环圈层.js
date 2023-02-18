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
  // 定义二维数组
  let arr = []
  for (let r = 0; r < n; r++) {
    arr[r] = []
  }

  let startX = 0, startY = 0  // 每一圈的起始位置
  let loop = Math.floor(n / 2)  // 需要旋转的圈数
  let mid = Math.floor(n / 2) // 矩阵中间的位置，如果n为奇数时
  let count = 1; // 用来给矩阵中每一个空格赋值
  let offset = 1; // 需要控制每一条边遍历的长度，每次循环右边界收缩一位

  while (loop--) {
    let row, col
    row = startX
    col = startY
    for (; col < startY + n - offset; col++) {
      arr[row][col] = count++
    }
    // debugger
    for (; row < startX + n - offset; row++) {
      arr[row][col] = count++
    }

    for (; col > startY; col--) {
      arr[row][col] = count++
    }

    for (; row > startX; row--) {
      arr[row][col] = count++
    }

    startX++;
    startY++;
    offset += 2
  }

  if (n % 2 === 1) {
    arr[mid][mid] = count
  }
  return arr
};


console.log(generateMatrix(3));
// [[1,2,3],[8,9,4],[7,6,5]]