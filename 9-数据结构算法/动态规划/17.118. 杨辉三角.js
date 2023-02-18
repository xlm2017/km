/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let dp = new Array(numRows);
  dp[0] = [1];
  for(let i = 1; i < numRows; i++){
      if(i === 1){
          dp[i] = [1,1];
          continue;
      }

      dp[i] = [1,1];
      let k = 1;
      while(k < i){
        dp[i].splice(1, 0, dp[i-1][k-1] + dp[i-1][k]);  
        k++;
      }
  }
  return dp;
};

// 示例 1:

// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 示例 2:

// 输入: numRows = 1
// 输出: [[1]]




// 官解
var generate2 = function(numRows) {
  const ret = [];

  for (let i = 0; i < numRows; i++) {
      const row = new Array(i + 1).fill(1);
      for (let j = 1; j < row.length - 1; j++) {
          row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
      }
      ret.push(row);
  }
  return ret;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/pascals-triangle/solutions/510638/yang-hui-san-jiao-by-leetcode-solution-lew9/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。