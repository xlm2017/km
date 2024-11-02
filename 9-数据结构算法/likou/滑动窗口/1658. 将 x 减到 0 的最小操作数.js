// 给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。

// 如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。

 

// 示例 1：

// 输入：nums = [1,1,4,2,3], x = 5
// 输出：2
// 解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
// 示例 2：

// 输入：nums = [5,6,7,8,9], x = 4
// 输出：-1
// 示例 3：

// 输入：nums = [3,2,20,1,1,3], x = 10
// 输出：5
// 解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。
 

// 提示：

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
// 1 <= x <= 109


/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
  // 定值窗口, 窗口内和为x, 并且窗口至少包含两个特殊的下标中的一个
  let minLen = nums.length + 1;
  let len = nums.length;
  nums = nums.concat(nums);
  let l = 0, r = 0;
  let sum = 0;
  while (r < nums.length) {
    sum += nums[r]; 
    while (sum > x && l < r) {
      sum = sum - nums[l];
      l++;
    }
    if(sum === x){
      console.log(l , r);
    }
    // l, r 下标注意必须包含左右端点之一
    if(sum === x && (l <= len && r >=len - 1)){
      minLen = Math.min(minLen, r - l + 1);
    }
    r++;
  }
  return minLen > len ? -1 : minLen;
};


// let nums = [1,1,4,2,3], x = 5;

// let nums = [1,1,3,2,5], x = 5;
// 1

let nums = [5,2,3,1,1], x = 5;
// 1


console.log(minOperations(nums, x));