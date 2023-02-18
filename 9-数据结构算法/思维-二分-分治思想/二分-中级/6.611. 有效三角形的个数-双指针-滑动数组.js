// 给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。



// 示例 1:

// 输入: nums = [2,2,3,4]
// 输出: 3
// 解释:有效的组合是: 
// 2,3,4 (使用第一个 2)
// 2,3,4 (使用第二个 2)
// 2,2,3
// 示例 2:

// 输入: nums = [4,2,3,4]
// 输出: 4


// 提示:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 1000


/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let ans = 0
  nums.sort((a, b) => a - b)
  for (let i = 2; i < nums.length; i++) {
    let left = 0
    let right = i - 1
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        // 此时右指针取地是最大值 左指针取地是最小值 满足条件说明 左指针往右都可以满足条件
        ans += right - left
        right--
      }
      else {
        left++
      }
    }
  }
  return ans;
};


let nums = [2, 2, 3, 4];

console.log(triangleNumber(nums));

