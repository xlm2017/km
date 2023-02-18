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
var generateMatrix = function(n) {
  let ans = new Array(n).fill().map(()=> new Array(n).fill(0));
  // console.log("ans:", ans);

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  // for (let i = 1; i <= n * n; i++) {
        
  // }
  let count = 0;
  while (count < n * n) {
    for (let i = left; i <= right; i++) {
      count++;
      ans[top][i] = count;   
      // console.log("向左:", top, i, count);   
    }
    top++;
    if(top > bottom) break;

    for (let i = top; i <= bottom; i++) {
      count++;
      ans[i][right] = count;  
    }
    right--;
    if(left > right) break;

    for (let i = right; i >= left; i--) {
      count++;
      ans[bottom][i] = count; 
    }
    bottom--;
    if(top > bottom) break;

    for (let i = bottom; i >= top; i--) {
      count++;
      ans[i][left] = count; 
    }
    left++;
    if(left > right) break;
  }
  return ans;
};


console.log(generateMatrix(3));
// [[1,2,3],[8,9,4],[7,6,5]]