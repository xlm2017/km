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
var spiralOrder = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let res = [];
  let left = 0;
  let right = n - 1;
  let top = 0;
  let down = m - 1;
  while (res.length < m * n) {
    for(let i = left; i <= right && down > top; i++){
      // console.log("向右:", matrix[top][i]);
      res.push(matrix[top][i]);
    }
    top++;
    for(let i = top; i <= down && right > left; i++){
      // console.log("向下:", matrix[i][right]);
      res.push(matrix[i][right]);
    }
    right--;
    for(let i = right; i >= left && down > top; i--){
      // console.log("向左:", matrix[down][i]);
      res.push(matrix[down][i]);
    }
    down--;
    for(let i = down; i >= top && right > left; i--){
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};


// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// [1,2,3,6,9,8,7,4,5]


let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

console.log(spiralOrder(matrix));