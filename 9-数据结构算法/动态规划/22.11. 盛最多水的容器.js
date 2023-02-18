/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let dp = new Array(height.length - 1);
  // dp[0] = 0;
  for(let i = 0; i < height.length - 1; i++){
      let sums = [];
      let min = height[i];
      for(let j = i + 1; j < height.length; j++){
        let cur = min;
         if(height[j] < min){
          cur = height[j]
         }
         sums.push(cur * (j - i));
      }
      dp[i] = Math.max(...sums);
  }
  // console.log('dp:', dp);
  return Math.max(...dp);
};


let height1 = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(height1));

// 超出时间限制