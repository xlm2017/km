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
  let indexs = [];

  for (let i = 0; i < height.length; i++) {
    if(i === 0 && height[i] > height[i + 1]){
      indexs.push(i);
      continue;
    }    
    if(i === height.length - 1 && height[i] > height[i - 1]){
      indexs.push(i);
      continue;
    }  
    if(height[i] > height[i-1] && height[i] > height[i+1]){
      indexs.push(i);
    }  
  }
  // console.log("arr:", height);
  console.log("indexs:", indexs);
  let sum = 0;
  for (let i = 1; i < indexs.length; i++) {
    // console.log("height-", height[indexs[i]]);    
    let min = Math.min(height[indexs[i-1]], height[indexs[i]]);
    // console.log("min:", min);
    for (let j = indexs[i-1] + 1; j < indexs[i]; j++) {
      sum = sum + (min - height[j]);      
    }
  }
  return sum;
};

// let height = [0,1,0,2,1,0,1,3,2,1,2,1];
// 6

let height = [4,2,0,3,2,5];
// 9
console.log(trap(height));