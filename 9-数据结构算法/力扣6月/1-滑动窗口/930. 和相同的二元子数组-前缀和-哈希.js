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
  let ans = 0;
  let sum = 0;
  let obj = {};
  for (let i = 0; i < nums.length; i++) {

    // if(!obj[sum]){
    //   obj[sum] = 1
    // }else{
    //   obj[sum]++
    // }

    obj[sum] = obj[sum] ? ++obj[sum] : 1;

    sum += nums[i];
    

    ans += obj[sum - goal] || 0;  
  }
  
  return ans;
};

let nums = [1,0,1,0,1], goal = 2;
// 4

console.log(numSubarraysWithSum(nums, goal));


// 通过前缀和数组可以在 O(1) 复杂度 内求得一段连续的和, 这时候利用哈希表记录扫描过的 sum[i] 的出现次数, 可以实现 O(1)复杂度内求得满足要求的左端点个数。