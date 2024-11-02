/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */


// 无视碰撞条件，直接更新nums数组d秒后各个位置
// 对nums数组排序，我们先计算第一个元素和其他元素的距离和，记作base
// 求第二个元素与剩下元素距离和时，第二个元素的距离和可以通过base直接求得，公式为 base - (nums[i-1] - nums[i]) * (nums.size() - i)
// 上面这个公式很好理解，就是把用到的第一个元素和第二个元素之间距离删掉，就是第二个元素的距离和
// 通过上面这个公式，我们可以更新剩下元素距离和
var sumDistance = function (nums, s, d) {
  for (let i = 0; i < nums.length; ++i) {
    nums[i] = s[i] == 'R' ? nums[i] + d : nums[i] - d;
  }

  nums.sort((a, b) => a - b);

  let base = 0;
  for (let j = 1; j < nums.length; ++j) {
    base = base + nums[0] - nums[j];
  }

  let ans = base;
  for (let i = 1; i < nums.length; ++i) {
    base -= (nums[i - 1] - nums[i]) * (nums.length - i);
    ans += base;
    ans %= (1e9 + 7);
  }
  return Math.abs(ans);
};


let nums = [-2, 0, 2], s = "RLL", d = 3
// 输出：8


console.log(sumDistance(nums, s, d));