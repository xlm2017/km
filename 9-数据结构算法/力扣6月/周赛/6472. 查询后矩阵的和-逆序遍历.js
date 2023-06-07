

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
 var matrixSumQueries = function (n, queries) {
  let hang = new Set();//记录行号
  let lie = new Set();//记录列号
  let sum = 0;
  //倒着遍历
  for (let i = queries.length - 1; i >= 0; i--) {
    // 最后一个行或者列
    if (obj[key] === 0) {
      if (queries[i][0] === 0) {
          //前面操作无法覆盖后面，所以重复行号不做任何操作，后面同理
          if (!hang.has(queries[i][1])) {
              hang.add(queries[i][1]);
              sum += (n - lie.size) * queries[i][2];
              //只进行有效操作，直接算出当前答案
          }
      }
      if (queries[i][0] === 1) {
          if (!lie.has(queries[i][1])) {
              lie.add(queries[i][1]);
              sum += (n - hang.size) * queries[i][2];
          }
      }
    }
  }
  return sum;
}

// 作者：Ecstatic ShannonLwc
// 链接：https://leetcode.cn/problems/sum-of-matrix-after-queries/solutions/2296108/bu-cao-zuo-shi-ji-shu-zu-yi-jian-shao-ne-7hcd/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

let n = 3, queries = [[0, 0, 1], [1, 2, 2], [0, 2, 3], [1, 0, 4]]
// 输出：23

console.log(matrixSumQueries(n, queries));