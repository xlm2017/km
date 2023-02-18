// 给你一个大小为 m * n 的矩阵 mat，矩阵由若干军人和平民组成，分别用 1 和 0 表示。

// 请你返回矩阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。

// 如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。

// 军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。



// 示例 1：

// 输入：mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// 输出：[2,0,3]
// 解释：
// 每行中的军人数目：
// 行 0 -> 2 
// 行 1 -> 4 
// 行 2 -> 1 
// 行 3 -> 2 
// 行 4 -> 5 
// 从最弱到最强对这些行排序后得到 [2,0,3,1,4]
// 示例 2：

// 输入：mat = 
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]], 
// k = 2
// 输出：[0,2]
// 解释： 
// 每行中的军人数目：
// 行 0 -> 1 
// 行 1 -> 4 
// 行 2 -> 1 
// 行 3 -> 1 
// 从最弱到最强对这些行排序后得到 [0,2,3,1]


/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {

  return mat
    .reduce((res, row, i) => {
      let s = 0, e = row.length - 1, m
      // 二分计算军人数
      while (s <= e) {
        m = Math.floor((e + s) / 2)
        row[m] === 1 ? s = m + 1 : e = m - 1
      }
      // 缓存军人数和行
      res.push([s, i])
      return res
    }, [])
    // 优先按军人数，次按行索引排序
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .slice(0, k)
    // 返回行索引
    .map(v => v[1])

  // 作者：hakon
  // 链接：https://leetcode.cn/problems/the-k-weakest-rows-in-a-matrix/solutions/908490/js-97-99-by-hakonleung-hlyt/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

};

let mat =
  [[1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1]],
  k = 3

// 输出：[2,0,3]

console.log(kWeakestRows(mat, k));