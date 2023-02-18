// 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。



 

// 示例 1:

// 输入: rowIndex = 3
// 输出: [1,3,3,1]
// 示例 2:

// 输入: rowIndex = 0
// 输出: [1]
// 示例 3:

// 输入: rowIndex = 1
// 输出: [1,1]
 

// 提示:

// 0 <= rowIndex <= 33
 

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const C = new Array(rowIndex + 1).fill(0);
  for (let i = 0; i <= rowIndex; ++i) {
      C[i] = new Array(i + 1).fill(0);
      C[i][0] = C[i][i] = 1;
      for (let j = 1; j < i; j++) {
          C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
      }
  }
  return C[rowIndex];
};

let rowIndex = 3;

console.log(getRow(rowIndex));

//          1
//        1   1
//      1   2   1
//    1   3   3   1
//  1   4   6   4   1 
//