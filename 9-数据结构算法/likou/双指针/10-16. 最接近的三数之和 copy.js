// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。



// 示例 1：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
// 示例 2：

// 输入：nums = [0,0,0], target = 1
// 输出：0


// 提示：

// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let ans = null;
  let min = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] + nums[i] === target) {
        return target;
      }
      ans = Math.abs(nums[i] + nums[l] + nums[r] - target) < min ? nums[i] + nums[l] + nums[r] : ans;
      min = Math.abs(nums[i] + nums[l] + nums[r] - target) < min ? Math.abs(nums[i] + nums[l] + nums[r] - target) : min;
      if (nums[l] + nums[r] + nums[i] > target) {
        r--;
      } else if (nums[l] + nums[r] + nums[i] < target) {
        l++;
      }
    }
  }
  return ans;
};

// let nums = [-1,2,1,-4], target = 1
// 输出：2

let nums = [4, 0, 5, -5, 3, 3, 0, -4, -5], target = -2
// 输出：-2


console.log(threeSumClosest(nums, target));




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest2 = function (nums, target) {
  const len = nums.length
  let res = Infinity
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 1; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let l = i + 1
    let r = len - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum > target) r--
      else if (sum < target) l++
      else return sum

      if (Math.abs(sum - target) < Math.abs(res - target)) res = sum
    }
  }

  return res
};