/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

class UnionFind {

  constructor(isConnected) {
    this.unionCount = 0;
    this.list = [];
    for (let i = 0; i < isConnected.length; i++) {
      // i为集标识
      this.list[i] = i;
    }
    console.log("初始化:", this.list)
  }

  union(x, y) {
    // 传入的x, y为一个集合, 需要合并起来
    if (this.find(x) != this.find(y)) {
      this.unionCount++;
      this.list[this.find(y)] = this.find(x); // 令 x 的代表作为 y 的代表的代表
    }
  }


  // 查找
  find(x) {
    // if(x.next == null) return x;
    // return find(x.next);

    // 如何找到代表源头
    if (this.list[x] == x) return x; // 只有根节点满足capital[x] = x
    return this.find(this.list[x]);
  }

  isConnect(x, y) {
    return this.find(x) === this.find(y);
  }

}

var validPath = function (n, edges, source, destination) {
  if (source === destination) {
    return true;
  }
  const uf = new UnionFind(n);
  for (const edge of edges) {
    uf.union(edge[0], edge[1]);
  }
  return uf.isConnect(source, destination);
};