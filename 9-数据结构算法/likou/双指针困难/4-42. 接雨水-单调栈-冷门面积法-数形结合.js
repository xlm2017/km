// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。



// 示例 1：



// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
// 示例 2：

// 输入：height = [4,2,0,3,2,5]
// 输出：9


// 提示：

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 单调递增栈, 面积法
  let ans = 0,
    h1 = 0,
    h2 = 0;
  for (let i = 0; i < height.length; i++) {
    h1 = Math.max(h1, height[i])
    h2 = Math.max(h2, height[height.length - i - 1])
    ans = ans + h1 + h2 - height[i]
  }
  return ans - height.length * h1;
};


let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// 输出：6

let height2 = [4, 2, 0, 3, 2, 5]
// 输出：9


console.log(trap(height));

console.log(trap(height2));
