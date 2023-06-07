

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
  // 2675个超出内存空间
  // 2683个 2688
  let sum = 0;
  let objHang = {};
  let objLie = {};
  let hangKinds = 0;
  let lieKinds = 0;
  for (let i = 0; i < queries.length; i++) {
    if (queries[i][0] === 0) {
      objHang[queries[i][1]] = objHang[queries[i][1]] ? ++objHang[queries[i][1]] : 1;
      if(objHang[queries[i][1]] === 1)hangKinds++
    } else {
      objLie[queries[i][1]] = objLie[queries[i][1]] ? ++objLie[queries[i][1]] : 1;
      if(objLie[queries[i][1]] === 1)lieKinds++
    }
  };
  
  //正向遍历
  for (let i = 0; i < queries.length; i++) {
    if (queries[i][0] === 0) {
      objHang[queries[i][1]]--
      if(objHang[queries[i][1]] === 0)hangKinds--
    } else {
      objLie[queries[i][1]]--
      if(objLie[queries[i][1]] === 0)lieKinds--
    }

    // 最后的行
    // 行中的每一个元素, 都有可能会被最后一个列修改, 所以需要查询一下每一个元素是否有最后一列
    if (queries[i][0] === 0 && !objHang[queries[i][1]]) {
      sum += (n - lieKinds) * queries[i][2];
    }



    // 最后的列
    if (queries[i][0] === 1 && !objLie[queries[i][1]]) {
      sum += (n - hangKinds) * queries[i][2];
    }
  }
  return sum;
}

let n = 3, queries = [[0, 0, 1], [1, 2, 2], [0, 2, 3], [1, 0, 4]]
// 输出：23

console.log(matrixSumQueries(n, queries));