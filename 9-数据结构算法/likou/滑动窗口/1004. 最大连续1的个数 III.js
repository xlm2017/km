// 给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，
// 则返回 数组中连续 1 的最大个数 。

 

// 示例 1：

// 输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
// 输出：6
// 解释：[1,1,1,0,0,1,1,1,1,1,1]
// 粗体数字从 0 翻转到 1，最长的子数组长度为 6。
// 示例 2：

// 输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
// 输出：10
// 解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// 粗体数字从 0 翻转到 1，最长的子数组长度为 10。
 

// 提示：

// 1 <= nums.length <= 105
// nums[i] 不是 0 就是 1
// 0 <= k <= nums.length


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  
    // 求最多包含两个0的最大窗口
    let l = 0, r = 0;
    let maxLen = 0;
    let cnt = 0;
    while (r < nums.length) {
        if(nums[r] === 0)cnt++;
        while(cnt > k){
            if(nums[l] === 0)cnt--;
            l++;
        }
        if(cnt <= k){
            maxLen = Math.max(maxLen, r - l + 1);
        }
        r++;
    }
    return maxLen;
};

let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2;
// 6

console.log(longestOnes(nums, k));