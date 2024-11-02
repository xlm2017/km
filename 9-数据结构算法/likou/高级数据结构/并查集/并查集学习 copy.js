

// 547. 省份数量
// 给你一个 n x n 的矩阵 isConnected ，
// 其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，
// 而 isConnected[i][j] = 0 表示二者不直接相连。


// 输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// 输出：2


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


  // 你发现，简单直接的合并将导致较高的树，若再继续执行 (5, 9)
  // find(5) 将会依次向父节点方向查询 1, 2, 6...
  // 查询效率低下。设想，如果能将树的高度降低，例如除根节点外的所有节点直接挂在根节点下（ 放射状 ，或者也有人说是 菊花状 ），
  // 那么 find 的复杂度将为常数级，
  // union 也会因此变为常数级操作。基于这个思考，你将在下一节继续发明更好的求并方法，使得两棵树合并后得到的新树拥有更低的树高。

  // 合并优化
  // Union方法：按大小求并
  // public void union(int x, int y){
  //   int xRoot = find(x), yRoot = find(y);
  //   // 根节点不同才求并
  //   if(xRoot != yRoot) {
  //       if(size[yRoot] <= size[xRoot]){ // 当y所在树大小小于等于x所在树大小时
  //           parent[yRoot] = xRoot; // 将yRoot挂在xRoot上
  //           size[xRoot] += size[yRoot]; // 更新x所在树的大小
  //       } else {
  //           parent[xRoot] = yRoot;
  //           size[yRoot] += size[xRoot];
  //       }
  //   }
  // }

  //   起初你希望合并后的树拥有较低的树高，但是一棵大小较小的树完全有可能高于大小较大的树，
  //   比如链状树在结点较少时也很容易高于菊花树。那为何不直接按高度求并呢？而且按高度求并还有一个好处，
  //   新树的高度变化只发生在两棵树高度相等时，此时高度加 1 ，
  //   而按大小求并时，每次合并都要修改新树的大小。沿着这个想法，下一节你将继续发明 「按高度求并」。

  //   按秩(高度)求并
  // 不是「按高度求并」吗，怎么还有个 「秩 
  // 现说明如下，但该说明的内容你只能在下一节发明「路径压缩」后才会理解，此处按下不表，你可以先将「秩 ( 
  // 」暂时等同于「高度 ( height ) 」。

  // union方法：按秩(高度)求并，先判断是否在同一集合
  // public void union(int x, int y){
  //   int xRoot = find(x), yRoot = find(y);
  //   if( xRoot != yRoot){
  //       if(rank[yRoot] <= rank[xRoot]) parent[yRoot] = xRoot;
  //       else parent[xRoot] = yRoot;
  //       if(rank[xRoot] == rank[yRoot]) rank[xRoot]++; 
  //   }
  // }

  union(x, y) {
    // 传入的x, y为一个集合, 需要合并起来
    if (this.find(x) != this.find(y)) {
      this.unionCount++;
      this.list[this.find(y)] = this.find(x); // 令 x 的代表作为 y 的代表的代表
    }
  }




  // 路径压缩
  // find方法：带路径压缩
  // public int find(int x) {
  //   if (parent[x] == x) return x;
  //   return parent[x] = find(parent[x]);
  // }
  // 可以让 当前查找的节点到根节点路径上所有的节点都指向根节点 。

  // 查找
  find(x) {
    // if(x.next == null) return x;
    // return find(x.next);

    // 如何找到代表源头
    if (this.list[x] == x) return x; // 只有根节点满足capital[x] = x
    return this.find(this.list[x]);
  }

}


let isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
// 2

function solution() {
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
}

console.log(solution());





对于「秩 ( 
  
  rank )」，你还有这样的思考: 按高度求并的优化原本是用「高度 ( 
  height )」来指导树的合并，但因为 「同时」 应用了 「路径压缩」 优化，导致程序记录的 
  height 信息不再是严格定义下的「高度」，这就好像树高被 
  find 给压缩了，但 
  height 这个变量没察觉到这个变化，导致 
  height 不再能表达「真实高度」。因此为了严谨，我们不能再使用 
  height 这个单词 (这个概念) ，转而采用另一个词 (另一个概念) 来指代此时的「高度」。找啊找，发现 
  rank 这个单词很合适。中文的「秩」是「
  rank」这个词的翻译，就是我们理解的「排名」那样，指一种「不精确的突出相对意味的大小」，Webster 词典对 
  rank 的第一条释义为: relative standing or position。你当然也可以选择别的词来形容，比如 almost height, rough height 之类的，只不过都不如 
  rank 更合适。




  并最终实现了两种求并优化（「按大小求并」和「按秩求并」）
  和一种查询优化（「带路径压缩的查询」）