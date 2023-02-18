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

  //五. 深度优先算法：不了解深度优先算法的友友可以先百度了解一下概念

  /*
      参数1：表示当前遍历的人
      参数2：给当前遍历的人进行染色的色号：只有1号色和2号色两种情况
      参数3：标志数组，标志i是否染色，以及染***号
      参数4：二维数组：g[i]中保存着i不喜欢的人
  */
  const dfs = (i, nowcolor, color, g) => {

    //进入这一步，表示i已经进行染色，修改标志
    color[i] = nowcolor

    //循环i不喜欢的人
    for (let p of g[i]) {
      //若i不喜欢的人已经染色，并且色号和i一样，则发生冲突，返回false
      if (color[p] !== 0 && color[p] === color[i]) {
        return false
      }
      //若i不喜欢的人没有进行染色，则递归对其进行染色
      //3^nowcolor表示 3 和nowcolor进行异或：即3^2=1 3^1=2,实现颜***号在1，2间轮流
      if (color[p] === 0 && !dfs(p, 3 ^ nowcolor, color, g)) {
        return false
      }
    }
    return true
  }


  //一. 创建一个标志数组:大小为n+1，默认值全部为零，表示没有进行染色
  let color = new Array(n + 1).fill(0)

  //二. 创建一个长度为n+1的数组，再将里面每个项初始化为空数组，也就是g是一个二维数组
  let g = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    g[i] = []
  }

  //三. 对g数组进行初始化：g[i]中保存着i不喜欢的人
  for (let p of dislikes) {
    g[p[0]].push(p[1])
    g[p[1]].push(p[0])
  }

  //四. 对1-n个人进行遍历，遍历过程中没有冲突，则不会进入该判断，最终返回true，否则返回false
  for (let i = 1; i <= n; i++) {
    if (color[i] === 0 && !dfs(i, 1, color, g)) {
      return false
    }
  }
  return true

};


let n = 4, dislikes = [[1, 2], [1, 3], [2, 4]];
// true

console.log(possibleBipartition(n, dislikes));