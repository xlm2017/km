// 给定一个二维网格 grid ，其中：

// '.' 代表一个空房间
// '#' 代表一堵
// '@' 是起点
// 小写字母代表钥匙
// 大写字母代表锁
// 我们从起点开始出发，一次移动是指向四个基本方向之一行走一个单位空间。我们不能在网格外面行走，也无法穿过一堵墙。如果途经一个钥匙，我们就把它捡起来。除非我们手里有对应的钥匙，否则无法通过锁。

// 假设 k 为 钥匙/锁 的个数，且满足 1 <= k <= 6，字母表中的前 k 个字母在网格中都有自己对应的一个小写和一个大写字母。换言之，每个锁有唯一对应的钥匙，每个钥匙也有唯一对应的锁。另外，代表钥匙和锁的字母互为大小写并按字母顺序排列。

// 返回获取所有钥匙所需要的移动的最少次数。如果无法获取所有钥匙，返回 -1 。



// 示例 1：



// 输入：grid = ["@.a.#","###.#","b.A.B"]
// 输出：8
// 解释：目标是获得所有钥匙，而不是打开所有锁。
// 示例 2：



// 输入：grid = ["@..aA","..B#.","....b"]
// 输出：6
// 示例 3:


// 输入: grid = ["@Aa"]
// 输出: -1


// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 30
// grid[i][j] 只含有 '.', '#', '@', 'a'-'f' 以及 'A'-'F'
// 钥匙的数目范围是 [1, 6] 
// 每个钥匙都对应一个 不同 的字母
// 每个钥匙正好打开一个对应的锁


/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  // 抽象为二维数组
  let m = grid.length;
  let n = grid[0].length;
  // 定义初始起点
  let sx = 0, sy = 0;

  // 收集钥匙的映射表
  let keyToIndex = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 收集起始坐标, 图的遍历起始点
      if (grid[i][j] === '@') {
        sx = i;
        sy = j;
      } else if ('a' <= grid[i][j] && grid[i][j] <= 'z') {
        // 这里是钥匙映射数字
        if (!keyToIndex.has(grid[i][j])) {
          let idx = keyToIndex.size;
          keyToIndex.set(grid[i][j], idx);
        }
      }
    }
  }

  // 定义队列, 用于广度优先搜索
  let queue = [];
  // 初始化, 定义一个三维数组
  let dist = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(1 << keyToIndex.size).fill(-1)));
  queue.push([sx, sy, 0]);
  dist[sx][sy][0] = 0;
  // console.log("初始化dist:", dist);
  // 从队列中取出来分析, 上下左右4个方向, 并且防止数组下标越界
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  while (queue.length) {
    // 进行插入操作的端称为队尾，进行删除操作的端称为队头。
    const arr = queue.shift();
    let x = arr[0], y = arr[1], mask = arr[2];
    console.log("数组信息:", x, y, mask);
    for (let i = 0; i < 4; ++i) {
      let nx = x + dirs[i][0];
      let ny = y + dirs[i][1];

      // 该位置 不等于墙
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== '#') {
        if (grid[nx][ny] === '.' || grid[nx][ny] === '@') {
          if (dist[nx][ny][mask] === -1) {
            dist[nx][ny][mask] = dist[x][y][mask] + 1;
            queue.push([nx, ny, mask]);
          }
        } else if ('a' <= grid[nx][ny] && grid[nx][ny] <= 'z') {
          // 该位置 为钥匙
          const idx = keyToIndex.get(grid[nx][ny]);
          if (dist[nx][ny][mask | (1 << idx)] === -1) {
            dist[nx][ny][mask | (1 << idx)] = dist[x][y][mask] + 1;
            if ((mask | (1 << idx)) === (1 << keyToIndex.size) - 1) {
              // 判断是否拿到了所有的钥匙, 如果是返回
              return dist[nx][ny][mask | (1 << idx)];
            }
            queue.push([nx, ny, mask | (1 << idx)]);
          }
        } else {
          // 该位置 为锁
          const idx = keyToIndex.get(grid[nx][ny].toLowerCase());
          // 判断是否已经遍历过该锁的钥匙了
          if ((mask & (1 << idx)) !== 0 && dist[nx][ny][mask] === -1) {
            dist[nx][ny][mask] = dist[x][y][mask] + 1;
            queue.push([nx, ny, mask]);
          }
        }
      }
    }
  };

  return -1;
}

let grid = ["@.a.#", "###.#", "b.A.B"]
let distDemo = [
  [
    [0, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1]
  ],
  [
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1]
  ],
  [
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1]
  ]
]
console.log("最短路径:", shortestPathAllKeys(grid));


let num = 1 << 3;   // 8 二进制的0001，左移三位，就变成二进制的1000

let num4 = 1 << 4;   // 16 二进制的00001，左移三位，就变成二进制的10000

let num1 = 1 << 5;  // 32  1左移五位 二进制的000001，左移三位，就变成二进制的100000
console.log("新数字:", num1);