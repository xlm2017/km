// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。



// 示例 1：


// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：


// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]


// 提示：

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let list = [];
  let m = matrix.length;
  let n = matrix[0].length;
  let i = 0;

  //统计矩阵从外向内的层数，如果矩阵非空，那么它的层数至少为1层
  let count = (Math.min(m, n) + 1) / 2;
  //从外部向内部遍历，逐层打印数据
  while (i < count) {
    for (let j = i; j < n - i; j++) {
      list.push(matrix[i][j]);
    }
    for (let j = i + 1; j < m - i; j++) {
      list.push(matrix[j][(n - 1) - i]);
    }

    for (let j = (n - 1) - (i + 1); j >= i && (m - 1 - i != i); j--) {
      list.push(matrix[(m - 1) - i][j]);
    }
    for (let j = (m - 1) - (i + 1); j >= i + 1 && (n - 1 - i) != i; j--) {
      list.push(matrix[j][i]);
    }
    i++;
  }
  return list;

  // 作者：燎天一剑
  // 链接：https://leetcode.cn/problems/spiral-matrix/solutions/4317/luo-xuan-ju-zhen-by-liao-tian-yi-jian/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};


// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// [1,2,3,6,9,8,7,4,5]


let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

console.log(spiralOrder(matrix));