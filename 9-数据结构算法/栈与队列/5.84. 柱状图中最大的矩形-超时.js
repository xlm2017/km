
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

  // 维护一个单调递增的栈, 存储下标
  let stack = [];
  stack.push(0);
  let dp = new Array(heights.length);
  // 以第 0 个柱子为最右边的柱子, 最大的面积值
  dp[0] = heights[0];
  for (let i = 1; i < heights.length; i++) {

    while(stack.length && heights[stack[stack.length - 1]] > heights[i]){
     stack.pop();
    }
    stack.push(i);
    
    let arr = [];
    for (let j = 0; j < stack.length; j++) {
      if(j === 0){
        arr.push(heights[stack[j]] * (i + 1))
      }else{
        // arr.push(heights[stack[j]] * (i - stack[j] + 1));      
        arr.push(heights[stack[j]] * (i - stack[j-1]));      
      }
    }
    // console.log("arr:", arr);
    dp[i] = Math.max(...arr);
    
    // 遍历栈
    // let index = stack[stack.length - 1]
    // dp[i] = (i + 1) * heights[index];
  }
  
  // console.log("dp:", dp);
  
  return Math.max(...dp);
  // 
  // stack: [ 2, 5, 6 ]

};

// let heights = [2,1,5,6,2,3];
// 10

// let heights =  [2,4];

let heights = [5, 4, 3, 2, 3];
// 10

console.log(largestRectangleArea(heights));