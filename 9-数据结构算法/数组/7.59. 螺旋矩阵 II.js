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
  let cur = 'left';
  // left down right up

  let dircetions = ['left', 'down', 'right', 'up']; 
  let starts = [[0, 0], [0, n-1], [n-1, n-1], [n-1, 0]];

  for (let i = 1; i <= n * n;) {
    let indexs = starts[dircetions.findIndex((item)=> item === cur)];
    if(cur === 'left'){
      let start = indexs[1];
      let end = starts[1][1];
      let row = indexs[0];
      while (start <= end) {
        res[row][start] = i++;
        start++;
      }
      cur = 'down';
      start[0] = [row+1, start+1];
    }else if(cur === 'down'){
      console.log("down:", indexs);
      let start = indexs[0];
      let end = starts[2][1];
      let col = indexs[1];
      while (start <= end) {
        res[start][col] = i++;
        start++;
      }
      cur = 'right';
      start[0] = [row+1, start+1];
    }   
  } 
  return res;
};

let n = 3;

console.log(generateMatrix(n));