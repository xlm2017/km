/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function (nums, s, d) {
  let sum = 0;
  let mod = 10 ** 9 + 7;

  for (let t = 0; t < d; t++) {
    for (let j = 0; j < s.length; j++) {
      for (let i = 0; i < nums.length; i++) {
        nums[i] = s[j] === "R" ? nums[i] - 1 : nums[i] + 1;
      }
    }
  }

  console.log("位置:", nums);
  
  let sumArr = [];
  let sum1 = 0;
  nums.sort((a,b)=>a-b);
  for (let i = 0; i < nums.length; i++) {
    for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i];
    sumArr.push(sum1);
  }
  
  console.log("位置2:", sumArr);

  for (let i = 1; i < sumArr.length; i++) {
    sum += Math.abs(nums[i] - nums[i - 1]);
  }

  return sum % mod;
};


let nums = [-2, 0, 2], s = "RLL", d = 3
// 输出：8


console.log(sumDistance(nums, s, d));