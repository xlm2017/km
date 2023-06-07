

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
  let sum = 0;
  // 变化的行,哈希表
  let rowMap = {};
  // 变化的列,哈希表
  let colMap = {};
  // 变化的行的种类, 计数器
  let rowCnt = 0;
  // 变化的列的种类, 计数器
  let colCnt = 0;
  for (let i = 0; i < queries.length; i++) {
    let rowFlag = queries[i][0];
    let index = queries[i][1];
    
    if (rowFlag === 0) {
      rowMap[index] = (rowMap[index] || 0) + 1;
      if(rowMap[index] === 1)rowCnt++
    } else {
      colMap[index] = (colMap[index] || 0) + 1;
      if(colMap[index] === 1)colCnt++
    }
  };
  
  //正向遍历
  for (let i = 0; i < queries.length; i++) {
    let rowFlag = queries[i][0];
    let index = queries[i][1];
    let val = queries[i][2];

    if (queries[i][0] === 0) {
      rowMap[index]--
      if(rowMap[index] === 0)rowCnt--
    } else {
      colMap[index]--
      if(colMap[index] === 0)colCnt--
    }

    // 行的最后一次变化
    // 行中的每一个元素, 都有可能会被最后一个列修改, 查询每一个元素是否有最后一列, 这样会超时
    // 换下面的方式, ( n - colCnt ) 为截止当前, 这一列中, 不会被后面的列改变的元素个数
    if (rowFlag === 0 && !rowMap[index]) {
      sum += (n - colCnt) * val;
    }

    // 列的最后一次变化, 原理同上
    if (rowFlag === 1 && !colMap[index]) {
      sum += (n - rowCnt) * val;
    }
  }
  return sum;
}

let n = 3, queries = [[0, 0, 1], [1, 2, 2], [0, 2, 3], [1, 0, 4]]
// 输出：23

console.log(matrixSumQueries(n, queries));