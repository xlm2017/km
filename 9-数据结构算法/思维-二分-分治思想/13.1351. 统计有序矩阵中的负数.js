// 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 请你统计并返回 grid 中 负数 的数目。

 

// 示例 1：

// 输入：grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// 输出：8
// 解释：矩阵中共有 8 个负数。
// 示例 2：

// 输入：grid = [[3,2],[1,0]]
// 输出：0


/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let res = 0;

  let pos = grid[0].length - 1;

  for (let i = 0; i < grid.length; i++) {
    for (let j = pos; j >= 0; --j) {
      if (grid[i][j] >= 0){
        break;
      }else{
        res++;
      }
    }   
  }
  return res;
};



let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];

console.log(countNegatives(grid));


// 倒序遍历

// int num=0,m=(int)grid[0].size(),pos=(int)grid[0].size()-1;
//         for (auto x:grid){
//             int i;
//             for (i=pos;i>=0;--i){
//                 if (x[i]>=0){
//                     if (i+1<m){
//                         pos=i+1;
//                         num+=m-pos;
//                     }
//                     break;
//                 }
//             }
//             if (i==-1){
//                 num+=m;
//                 pos=-1;
//             }
//         }
//         return num;

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/count-negative-numbers-in-a-sorted-matrix/solutions/101204/tong-ji-you-xu-ju-zhen-zhong-de-fu-shu-by-leetcode/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。