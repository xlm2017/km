/**
 * @param {number[][]} isConnected
 * @return {number}
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

}

var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  // 通过构造器完成初始化
  let uf = new UnionFind(isConnected); // 通过构造器完成初始化
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // 合并
      if (isConnected[i][j] == 1) uf.union(i, j);
    }
  }
  return n - uf.unionCount;
};