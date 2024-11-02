var solve = function(board) {
  if(board.length === 0) return;
  let m = board.length;
  // 给dummy留一个额外的位置
  let n = board[0].length;
  let uf = new UF(m*n+1);
  let dummy = m * n;
  // 将首列和末列的 O 与 dummy 连通
  for(let i = 0; i < m; i++) {
      if(board[i][0] === 'O') {
          uf.union(i*n,dummy);
      } 
      if(board[i][n-1] === 'O') {
          uf.union(i*n+n-1,dummy);
      }
  }
  // 将首行和末行的0与dummy连同
  for(let i = 0; i < n; i++) {
      if(board[0][i] === 'O') {
          uf.union(i,dummy);
      }
      if(board[m-1][i] === 'O') {
          uf.union(n * (m -1)+i,dummy);
      }
  }
  // 方向数组 d 是上下左右搜索的常用手法
  let d = [[1,0],[0,1],[0,-1],[-1,0]];
  for(let i = 1; i < m - 1; i++) {
      for(let j = 1; j < n - 1; j++) {
          if(board[i][j] === 'O') {
              // 将此0与上下左右的0连通
              for(let k = 0 ; k < 4; k++) {
                  let x = i + d[k][0];
                  let y = j + d[k][1];
                  if(board[x][y] === 'O') {
                      uf.union(x*n+y,i * n + j);
                  }
              }
          }
      }
  }
  // 所有不和 dummy 连通的 O，都要被替换
  for(let i = 1; i < m -1; i++) {
      for(let j = 1; j < n -1; j++) {
          if(!uf.connected(dummy,i * n + j)) {
              board[i][j] = 'X'
          }
      }
  }
};
class UF {
  constructor(n) {
      this.count = n;
      this.parent = Array.from({length: n},() => 0);
      this.size = Array.from({length: n},() => 0);
      for(let i = 0; i < n; i++) {
          this.parent[i] = i;
          this.size[i] = 1;
      }
  }
  /** 将p和q连通 **/
  union (p,q) {
      let rootP = this.find(p);
      let rootQ = this.find(q);
      if(rootP === rootQ) return;
      // 小树接大树下面、则平衡
      if(this.size[rootP] < this.size[rootQ]) {
          this.parent[rootP] = rootQ;
          this.size[rootQ] += this.size[rootP];
      } else {
          this.parent[rootQ] = rootP;
          this.size[rootP] += this.size[rootQ];
      }
      this.count --;
  }
  find (x) {
      while(this.parent[x] !== x) {
          this.parent[x] = this.parent[this.parent[x]];
          x = this.parent[x];
      }
      return x;
  }
  connected (p,q) {
      let rootP = this.find(p);
      let rootQ = this.find(q);
      return rootP === rootQ;
  }
}


作者：不吃辣
链接：https://leetcode.cn/problems/surrounded-regions/solutions/1629343/dai-ma-jian-ji-de-jie-fa-jsban-ben-by-it-p2b7/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。