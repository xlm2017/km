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
var trap = function(height) {

  if(height.length <= 2){
    return 0;
  }
  // 计算出单调区间, 两头保留第一个单调递减的下标值
  let indexs = [];
  let vals = [];
  // 1 递增,   0 递减
  let curTrend = null;
  for (let i = 0; i < height.length; i++) {
    if(i === 0 && height[i] > 0){
      indexs.push(i);
      continue;
    }
    if(height[i] === height[i - 1]){
      continue;
    }
    if(height[i] > height[i - 1]){
      if(curTrend === null){
        curTrend = 1;
        // continue;
      }
      // 递减趋势结束了
      if(curTrend === 0){
        indexs.push(i - 1);
        vals.push(height[i-1]);
        curTrend === 1;
      }
    }
    if(height[i] < height[i - 1]){
      if(curTrend === null){
        curTrend = 0;
        // continue;
      }
      // 递增趋势结束了
      if(curTrend === 1){
        indexs.push(i);
        vals.push(height[i]);
        curTrend === 0;
      }
    }
  }
  console.log('原始:', height);
  console.log("indexs:", indexs);
  console.log("vals:", vals);
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(height));