

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
  // 数组空间超出范围, 太大了
  // let arr = new Array(n).fill().map(() => new Array(n).fill(0));
  let sum = 0;
  let obj = {};
  for (let i = 0; i < queries.length; i++) {
    // 某一行或者某一列
    let key = queries[i][0] + '-' + queries[i][1];
    obj[key] = obj[key] ? ++obj[key] : 1
  };
  for (let i = 0; i < queries.length; i++) {
    let key = queries[i][0] + '-' + queries[i][1]
    obj[key]--
    // 最后一个行或者列
    if (obj[key] === 0) {
      if (queries[i][0] === 1) {
        // 改变列
        // for (let j = 0; j < n; j++) {
        //   arr[queries[i][1]][j] = queries[i][2]
        // }
      } else {
        // 改变行
        // for (let j = 0; j < n; j++) {
        //   arr[j][queries[i][1]] = queries[i][2]
        // }
      }
    }

  }
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     sum += arr[i][j]
  //   }
  // }
  return sum;
};

let n = 3, queries = [[0, 0, 1], [1, 2, 2], [0, 2, 3], [1, 0, 4]]
// 输出：23

console.log(matrixSumQueries(n, queries));