// 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。

// 子数组 是数组的一段连续部分。



// 示例 1：

// 输入：nums = [1,0,1,0,1], goal = 2
// 输出：4
// 解释：
// 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
// 示例 2：

// 输入：nums = [0,0,0,0,0], goal = 0
// 输出：15


// 提示：

// 1 <= nums.length <= 3 * 104
// nums[i] 不是 0 就是 1
// 0 <= goal <= nums.length


/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let len = nums.length;
  let left = 0;
  let left2 = 0;
  let right = 0;
  let sum = 0;
  let ans = 0;
  while (right < len) {
    sum += nums[right];
    while (sum > goal) {
      sum = sum - nums[left];
      left++;
    }
    left2 = left;
    while (left2 <= right && sum === goal) {
      ans++;
      sum = sum - nums[left2];
      left2++;
    }
    while (left2 > left) {
      sum = sum + nums[left2 - 1];
      left2--;
    }
    right++;
  }
  return ans;
};






// 最佳细节实现 

var numSubarraysWithSum = function (nums, goal) {


  /** 滑动窗口结果 */
  // let res = 0;
  /** 滑动窗口条件 */
  // let [sum1, sum2] = [0, 0];
  /** 滑动窗口边界 */
  // let [left1, left2, right] = [0, 0, 0];

  let sum1 = 0;
  let sum2 = 0;
  let left1 = 0;
  let left2 = 0;
  let right = 0;
  let res = 0;
  while (right < nums.length) {
    sum1 += nums[right];
    sum2 += nums[right];

    /** 此次遍历得到 left1: 满足 sum1 === goal 时 left1 的值 */
    while (left1 <= right && sum1 > goal) {
      sum1 -= nums[left1++];
    }

    /** 此次遍历得到 left2: 满足 sum2 < goal 时 left2 的值 */
    while (left2 <= right && sum2 >= goal) {
      sum2 -= nums[left2++];
    }

    /** left2 - left1 中间的均满足条件 */
    res += left2 - left1;
    right++;
  }
  return res;
};

















// let nums = [1,0,1,0,1], goal = 2;
// 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
// 4

// let nums = [1, 2, 3, 1, 2], goal = 6;

// let nums2 = [1, 2, 3, 5, 2], goal2 = 6;


let nums = [0, 0, 0, 0, 0], goal = 0;

console.log(numSubarraysWithSum(nums, goal));