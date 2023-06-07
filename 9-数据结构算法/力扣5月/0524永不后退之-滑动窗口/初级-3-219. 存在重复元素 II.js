// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。



// 示例 1：

// 输入：nums = [1,2,3,1], k = 3
// 输出：true
// 示例 2：

// 输入：nums = [1,0,1,1], k = 1
// 输出：true
// 示例 3：

// 输入：nums = [1,2,3,1,2,3], k = 2
// 输出：false




// 提示：

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

  // 双层for循环, 组成一个滑动窗口, 性能差

  // let left = 0;
  // let right = 0;
  // for (; left < nums.length - 1; left++) {
  //   right = left + 1;
  //   for (; right < nums.length; right++) {
  //     // console.log(left, right);
  //     if(nums[left] === nums[right] && right - left <= k){
  //       return true;
  //     }
  //   }
  // }
  // return false;


  // 滑动窗口 + 哈希表
  
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (m.has(item) && Math.abs(m.get(item) - i) <= k) {
      return true;
    }
    m.set(item, i);
  }
  return false;
};


// let nums = [1,2,3,1], k = 3;
// true

let nums = [1,2,3,1,2,3], k = 2;
// false

console.log(containsNearbyDuplicate(nums, k));
