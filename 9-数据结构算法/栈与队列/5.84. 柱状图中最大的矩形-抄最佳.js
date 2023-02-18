
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
var largestRectangleArea = function (heights) {

  let len = heights.length
  if (len === 0) {
    return 0
  }
  heights.unshift(0)
  heights.push(0)
  len += 2
  let res = 0
  let arr = [0]
  for (let i = 1; i < len; i++) {
    while (heights[i] < heights[arr[arr.length - 1]]) {
      let curHeight = heights[arr.pop()]
      let curWidth = i - arr[arr.length - 1] - 1
      res = Math.max(res, curWidth * curHeight)
    }
    arr.push(i)
  }
  return res

};

// let heights = [2,1,5,6,2,3];
// 10

// let heights =  [2,4];

// let heights = [5, 4, 3, 2, 3];
// 10

let heights = [7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303, 7303];
// 219090

console.log(largestRectangleArea(heights));