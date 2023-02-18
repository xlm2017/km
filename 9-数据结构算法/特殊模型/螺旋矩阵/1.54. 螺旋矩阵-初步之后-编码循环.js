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
  let down = n - 1;
  let right = m - 1;
  let up = 0;
  while (res.length < m * n) {
    for(let i = up; i <= down; i++){
      // console.log("向右:", matrix[left][i]);
      res.push(matrix[left][i]);
    }
    left++;
    for(let i = left; i <= right; i++){
      // console.log("向下:", matrix[i][down]);
      res.push(matrix[i][down]);
    }
    down--;
    for(let i = down; i >= up; i--){
      console.log("向左:", matrix[right][i], down);
      res.push(matrix[right][i]);
    }
    right--;
    for(let i = right; i >= left; i--){
      res.push(matrix[i][up]);
    }
    up++;
  }
  return res;
};


// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// [1,2,3,6,9,8,7,4,5]


let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

console.log(spiralOrder(matrix));