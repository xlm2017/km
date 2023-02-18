
// 单调栈问题


// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 输入：heights = [2,1,5,6,2,3]
// 输出：10
// 解释：最大的矩形为图中红色区域，面积为 10


/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

  // 维护一个单调递减的栈
  let stack = [];
  let dp = new Array(heights.length);
  // 以第 0 个柱子为最右边的柱子, 最大的面积值
  for (let i = 0; i < heights.length; i++) {
    console.log(i, heights[i]);
  }

  console.log("dp:", dp);

};

// let heights = [2,1,5,6,2,3];
// 10


let heights = [5, 4, 3, 2, 3];
// 10

console.log(largestRectangleArea(heights));