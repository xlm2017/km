// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 

// 示例 1：


// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]
// 示例 2：

// 输入：n = 1
// 输出：[[1]]
 

// 提示：

// 1 <= n <= 20


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {

  let res = new Array(n).fill().map(()=> new Array(n).fill(0));
  console.log("res:", res);
  // 螺旋起点的坐标
  let startIndex = [0, 1];
  let cur = 'left';
  res[0][0] = 1;
  for (let i = 1; i <= n * n - 1;) {
    let row = startIndex[0];
    let col = startIndex[1];
    if(cur === 'left'){
      while (col < n) {
        console.log("left:", row, col-1);
        // res[row][col] = res[row][col-1] + 1;
        res[row][col] = ++i;
        col++;
      }
      cur = 'down';
      startIndex = [row + 1, col - 1];
    }else if(cur === 'down'){
      while (row < n) {
        console.log('down:', row-1, col);
        // res[row][col] = res[row-1][col] + 1;
        res[row][col] = ++i;
        row++;
      }
      cur = 'right';
      startIndex = [row-1, col];
    }else if(cur === 'right'){
      cur = 'up';
    }else if(cur === 'up'){
      // cur = 'left';
    }   
  } 
  return res;
};

let n = 3;

console.log(generateMatrix(n));