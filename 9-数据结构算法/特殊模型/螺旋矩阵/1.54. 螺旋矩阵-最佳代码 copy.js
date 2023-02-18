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
  let arr=[],m=matrix.length,n=matrix[0].length;
  let left=0,right=n-1,top=0,bottom=m-1;
  while(left<=right&&top<=bottom){
      for(let i=left;i<=right;i++){
          arr.push(matrix[top][i]);
      }
      top++;
      for(let i=top;i<=bottom;i++){
          arr.push(matrix[i][right]);
      }
      right--;
      if (top > bottom || left > right) break;
      for(let i=right;i>=left;i--){
          arr.push(matrix[bottom][i]);
      }
      bottom--;
      for(let i=bottom;i>=top;i--){
          arr.push(matrix[i][left]);
      }
      left++;
  }
  return arr;
};

// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// [1,2,3,6,9,8,7,4,5]


let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

console.log(spiralOrder(matrix));