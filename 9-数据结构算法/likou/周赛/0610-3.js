/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function (nums, s, d) {
  let sum = 0;
  for (let i = 0; i < d; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j == 0) {
        if (s[j] === "R") {
          console.log("j:", nums[j + 1])
          if (nums[j + 1]!== nums[j]) {
            nums[j]++;
          } else {
            nums[j]--;
          }
        } else {
          nums[j]--;
        }
      } else if (j == nums.length - 1) {
        if (s[j] === "L") {
          if (nums[j - 1] !== nums[j]) {
            nums[j]--;
          } else {
            nums[j]++;
          }
        } else {
          nums[j]++;
        }
      } else {
        if (s[j] === "R") {
          if (nums[j + 1] !== nums[j]) {
            nums[j]++;
          }else {
            nums[j]--;
          }
        } else {
          if (nums[j - 1] !== nums[j]) {
            nums[j]--;
          }else {
            nums[j]++;
          }
        }
      }
    }
  }
  for (let j = 1; j < nums.length; j++) {
    sum += Math.abs(nums[j] - nums[j - 1]);
  }
  let mod = 10 ** 9 + 7
  return sum % mod;
};


let nums = [-2, 0, 2], s = "RLL", d = 3
// 输出：8


console.log(sumDistance(nums, s, d));