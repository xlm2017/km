/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let left_max = 0;
  let right_max = 0;
  let res = 0;
  while (left < right) {
    left_max = Math.max(left_max, height[left]);
    right_max = Math.max(right_max, height[right]);
    let currentArea = 0;
    if (left_max < right_max) {
      currentArea = left_max * (right - left);
      left++;
    } else {
      currentArea = right_max * (right - left);
      right--;
    }
      res = Math.max(res, currentArea);
    }
  return res;
};


let height1 = [1,8,6,2,5,4,8,3,7];

console.log(maxArea(height1));

// 超出时间限制