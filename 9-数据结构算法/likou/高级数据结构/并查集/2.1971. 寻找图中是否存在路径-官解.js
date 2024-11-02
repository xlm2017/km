

// 有一个具有 n 个顶点的 双向 图，其中每个顶点标记从 0 到 n - 1（包含 0 和 n - 1）。图中的边用一个二维整数数组 edges 表示，其中 edges[i] = [ui, vi] 表示顶点 ui 和顶点 vi 之间的双向边。 每个顶点对由 最多一条 边连接，并且没有顶点存在与自身相连的边。

// 请你确定是否存在从顶点 source 开始，到顶点 destination 结束的 有效路径 。

// 给你数组 edges 和整数 n、source 和 destination，如果从 source 到 destination 存在 有效路径 ，则返回 true，否则返回 false 。



// 示例 1：


// 输入：n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// 输出：true
// 解释：存在由顶点 0 到顶点 2 的路径:
// - 0 → 1 → 2 
// - 0 → 2
// 示例 2：


// 输入：n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// 输出：false
// 解释：不存在由顶点 0 到顶点 5 的路径.


// 提示：

// 1 <= n <= 2 * 105
// 0 <= edges.length <= 2 * 105
// edges[i].length == 2
// 0 <= ui, vi <= n - 1
// ui != vi
// 0 <= source, destination <= n - 1
// 不存在重复边
// 不存在指向顶点自身的边




/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */



// 思路与算法

// 我们将图中的每个强连通分量视为一个集合，强连通分量中任意两点均可达，如果两个点 source\textit{source}source 
// 和 destination\textit{destination}destination 处在同一个强连通分量中，则两点一定可连通，因此连通性问题可以使用并查集解决。

// 并查集初始化时，nnn 个顶点分别属于 nnn 个不同的集合，每个集合只包含一个顶点。初始化之后遍历每条边，
// 由于图中的每条边均为双向边，因此将同一条边连接的两个顶点所在的集合做合并。

// 遍历所有的边之后，判断顶点 source\textit{source}source 和顶点 destination\textit{destination}destination
// 是否在同一个集合中，如果两个顶点在同一个集合则两个顶点连通，如果两个顶点所在的集合不同则两个顶点不连通。


var validPath = function (n, edges, source, destination) {
  if (source === destination) {
    return true;
  }
  const uf = new UnionFind(n);
  for (const edge of edges) {
    uf.uni(edge[0], edge[1]);
  }
  return uf.connect(source, destination);
}

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  uni(x, y) {
    const rootx = this.find(x);
    const rooty = this.find(y);
    if (rootx !== rooty) {
      if (this.rank[rootx] > this.rank[rooty]) {
        this.parent[rooty] = rootx;
      } else if (this.rank[rootx] < this.rank[rooty]) {
        this.parent[rootx] = rooty;
      } else {
        this.parent[rooty] = rootx;
        this.rank[rootx]++;
      }
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  connect(x, y) {
    return this.find(x) === this.find(y);
  }
}

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/find-if-path-exists-in-graph/solutions/2024085/xun-zhao-tu-zhong-shi-fou-cun-zai-lu-jin-d0q0/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
