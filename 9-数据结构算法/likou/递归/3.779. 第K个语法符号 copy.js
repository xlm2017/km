// 我们构建了一个包含 n 行( 索引从 1  开始 )的表。首先在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。

// 例如，对于 n = 3 ，第 1 行是 0 ，第 2 行是 01 ，第3行是 0110 。
// 给定行数 n 和序数 k，返回第 n 行中第 k 个字符。（ k 从索引 1 开始）


// 示例 1:

// 输入: n = 1, k = 1
// 输出: 0
// 解释: 第一行：0
// 示例 2:

// 输入: n = 2, k = 1
// 输出: 0
// 解释: 
// 第一行: 0 
// 第二行: 01
// 示例 3:

// 输入: n = 2, k = 2
// 输出: 1
// 解释:
// 第一行: 0
// 第二行: 01


// 提示:

// 1 <= n <= 30
// 1 <= k <= 2n - 1


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// var kthGrammar = function(n, k) {

// };

var kthGrammar = function (n, k, str = '0') {
  let dfs = (ix, currK) => {
    if (ix == 0) return 0
    let parent = dfs(ix - 1, (currK + 1) >> 1);
    // 0
    // 01
    // 0110
    // 01101001 以n= 4，k = 5为例：currK % 2 === 1意思就是和它的parent的(currK + 1) >> 1位置值相同, 否则就取反 parent ^ 1
    if (currK % 2 === 1) return parent;
    return parent ^ 1;
  }
  return dfs(n - 1, k);
};


// let n = 2, k = 1
// 输出: 0

let n = 3, k = 3;
// 0
// 01
// 0110
// 1


console.log(kthGrammar(n, k));