

class unionFind {
  constructor(n) {
    this.count = n;
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  // 查询
  find(p) {
    let root = p;
    while (this.parent[root] !== root) {
      root = this.parent[root];
    }
    // 压缩路径
    while (this.parent[p] !== p) {
      let x = p;
      p = this.parent[p];
      this.parent[x] = root;
    }
    return root;
  }


  // 合并
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) return;
    this.parent[rootP] = rootQ;
    this.count--;
  }

  // 是否连通
  isConnected(x, y) {
    return this.find(x) === this.find(y)
  }
}