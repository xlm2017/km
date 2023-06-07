

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
  // 2675个超出内存空间
  // 2683个 2688
  let sum = 0;

  let obj = {};
  let objHang = {};
  let objLie = {};
  for (let i = 0; i < queries.length; i++) {
    // 某一行或者某一列
    let key = queries[i][0] + '-' + queries[i][1];
    obj[key] = obj[key] ? ++obj[key] : 1;
    if(queries[i][0] === 0){
      objHang[queries[i][1]] = objHang[queries[i][1]] ? ++objHang[queries[i][1]] : 1;
    }else{
      objLie[queries[i][1]] = objLie[queries[i][1]] ? ++objLie[queries[i][1]] : 1;
    }
  };

  //正向遍历
  for (let i = 0; i < queries.length; i++) {
    let key = queries[i][0] + '-' + queries[i][1]
    obj[key]--
    if(queries[i][0] === 0){
      objHang[queries[i][1]]--
    }else{
      objLie[queries[i][1]]--
    }
    // 最后一个行或者列
    if (obj[key] === 0) {

      // 最后的行
      // 行中的每一个元素, 都有可能会被最后一个列修改, 所以需要查询一下每一个元素是否有最后一列
      let lie = 0;
      if (queries[i][0] === 0) {
        for(let j = 0; j < n; j++){
          if(!objLie[j]){
            lie++
          }
        }
        sum += lie * queries[i][2];
      }



      // 最后的列
      let hang = 0;
      if (queries[i][0] === 1) {
        for(let j = 0; j < n; j++){
          if(!objHang[j]){
            hang++
          }
        }
        sum += hang * queries[i][2];
      }
    }
  }
  return sum;
}

let n = 3, queries = [[0, 0, 1], [1, 2, 2], [0, 2, 3], [1, 0, 4]]
// 输出：23

console.log(matrixSumQueries(n, queries));