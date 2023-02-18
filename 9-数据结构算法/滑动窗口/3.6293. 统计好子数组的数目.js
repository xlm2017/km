// 给你一个整数数组 nums 和一个整数 k ，请你返回 nums 中 好 子数组的数目。

// 一个子数组 arr 如果有 至少 k 对下标 (i, j) 满足 i < j 且 arr[i] == arr[j] ，那么称它是一个 好 子数组。

// 子数组 是原数组中一段连续 非空 的元素序列。

 

// 示例 1：

// 输入：nums = [1,1,1,1,1], k = 10
// 输出：1
// 解释：唯一的好子数组是这个数组本身。
// 示例 2：

// 输入：nums = [3,1,4,3,2,2,4], k = 2
// 输出：4
// 解释：总共有 4 个不同的好子数组：
// - [3,1,4,3,2,2] 有 2 对。
// - [3,1,4,3,2,2,4] 有 3 对。
// - [1,4,3,2,2,4] 有 2 对。
// - [4,3,2,2,4] 有 2 对。
 

// 提示：

// 1 <= nums.length <= 10^5
// 1 <= nums[i], k <= 10^9

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
  
  // 子数组统计问题, 常用双指针(不定长滑动窗口)实现, 

  // 记录当前窗口内元素的数量
  const cnt = new Map();
  let l = 0, r = 0, ans = 0, sum = 0;
  while (r < nums.length) {
    // 累加数量
    cnt.set(nums[r], (cnt.get(nums[r]) || 0) + 1);
    // 累加nums[r]匹配的数对数量
    sum += cnt.get(nums[r]) - 1;

    while (sum >= k) {
      // 如果当前[l,r]满足条件, 那[l, r+1]也一定满足条件, 所以此时结果应该累加nums.length - r
      ans += nums.length - r;

      // 缩短窗口, 减去num[i]匹配的数对数量
      sum -= cnt.get(nums[l]) - 1;
      cnt.set(nums[l], cnt.get(nums[l]) - 1);
      l++;
    }
    r++;
  }
  return ans;


  // 最佳 
  // if(nums.length==1){
  //   return nums[0]
  // }

  // nums = nums.slice(0,nums.length/2).map((v,i)=>{
  //     return (i&1?Math.max:Math.min)(nums[2*i],nums[2*i+1])
  // })
  // return minMaxGame(nums)
};

let nums = [3,1,4,3,2,2,4], k = 2;

console.log(countGood(nums, k));