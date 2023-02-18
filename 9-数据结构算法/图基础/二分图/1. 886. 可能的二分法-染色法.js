// 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。

// 给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和  bi的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。



// 示例 1：

// 输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
// 输出：true
// 解释：group1 [1,4], group2 [2,3]
// 示例 2：

// 输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
// 输出：false
// 示例 3：

// 输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
// 输出：false


// 提示：

// 1 <= n <= 2000
// 0 <= dislikes.length <= 104
// dislikes[i].length == 2
// 1 <= dislikes[i][j] <= n
// ai < bi
// dislikes 中每一组都 不同


/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {

  // 染色验证
  const dfs = (curnode, nowcolor, color, g) => {
    // 为当前节点染色
    color[curnode] = nowcolor;
    // 遍历与当前节点冲突的节点
    for (const nextnode of g[curnode]) {
      if (color[nextnode] !== 0 && color[nextnode] === color[curnode]) {
        // 冲突的的两个节点颜色一样,染色失败
        return false;
      }
      // 节点还没有被染色,递归,  // 深度优先遍历
      if (color[nextnode] === 0 && !dfs(nextnode, 3 ^ nowcolor, color, g)) {
        return false;
      }
    }
    return true;
  }
  const color = new Array(n + 1).fill(0);
  const g = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; ++i) {
    g[i] = [];
  }
  // 添加各自的冲突节点
  for (const p of dislikes) {
    g[p[0]].push(p[1]);
    g[p[1]].push(p[0]);
  }
  console.log("g:", g);
  // dislikes = [[1, 2], [1, 3], [2, 4]];
  // g: [ [], [ 2, 3 ], [ 1, 4 ], [ 1 ], [ 2 ] ]


  for (let i = 1; i <= n; ++i) {
    // 遍历每一个节点,对其染色(1或2),并验证冲突节点
    if (color[i] === 0 && !dfs(i, 1, color, g)) {
      // 染色冲突, 不能组成两两一组
      return false;
    }
  }
  return true;

  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/possible-bipartition/solutions/1893341/ke-neng-de-er-fen-fa-by-leetcode-solutio-guo7/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

};


let n = 4, dislikes = [[1, 2], [1, 3], [2, 4]];
// true

console.log(possibleBipartition(n, dislikes));