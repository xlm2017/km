// 元素的 频数 是该元素在一个数组中出现的次数。

// 给你一个整数数组 nums 和一个整数 k 。在一步操作中，你可以选择 nums 的一个下标，并将该下标对应元素的值增加 1 。

// 执行最多 k 次操作后，返回数组中最高频元素的 最大可能频数 。



// 示例 1：

// 输入：nums = [1,2,4], k = 5
// 输出：3
// 解释：对第一个元素执行 3 次递增操作，对第二个元素执 2 次递增操作，此时 nums = [4,4,4] 。
// 4 是数组中最高频元素，频数是 3 。
// 示例 2：

// 输入：nums = [1,4,8,13], k = 5
// 输出：2
// 解释：存在多种最优解决方案：
// - 对第一个元素执行 3 次递增操作，此时 nums = [4,4,8,13] 。4 是数组中最高频元素，频数是 2 。
// - 对第二个元素执行 4 次递增操作，此时 nums = [1,8,8,13] 。8 是数组中最高频元素，频数是 2 。
// - 对第三个元素执行 5 次递增操作，此时 nums = [1,4,13,13] 。13 是数组中最高频元素，频数是 2 。
// 示例 3：

// 输入：nums = [3,9,6], k = 2
// 输出：1


// 提示：

// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^5
// 1 <= k <= 10^5


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b)
  let len = 1;
  let maxLen = 1;
  let l = 0;
  let max = nums[0];
  let r = 1;
  let needK = 0;
  for (; r < nums.length; r++) {
    len++
    if (nums[r] <= max) {
      needK = needK + (max - nums[r])
    } else {
      needK = needK + (len - 1) * (nums[r] - max)
      max = nums[r]
    }

    // 需要收缩窗口, 直到当前窗口包含最右侧这个值
    while (needK > k) {
      needK = needK - (max - nums[l])
      len--;
      l++;
    }
    if (needK <= k) {
      // 记录当前窗口大小, 继续扩张窗口
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
};


// let nums = [1,2,4], k = 5;
// 3

// let nums = [1,4,8,13], k = 5;
// 2

let nums = [9930, 9923, 9983, 9997, 9934, 9952, 9945, 9914, 9985, 9982, 9970, 9932, 9985, 9902, 9975, 9990, 9922, 9990, 9994, 9937, 9996, 9964, 9943, 9963, 9911, 9925, 9935, 9945, 9933, 9916, 9930, 9938, 10000, 9916, 9911, 9959, 9957, 9907, 9913, 9916, 9993, 9930, 9975, 9924, 9988, 9923, 9910, 9925, 9977, 9981, 9927, 9930, 9927, 9925, 9923, 9904,
  9928, 9928, 9986, 9903, 9985, 9954, 9938, 9911, 9952, 9974, 9926, 9920, 9972, 9983, 9973, 9917, 9995, 9973, 9977, 9947, 9936, 9975, 9954, 9932, 9964, 9972, 9935, 9946, 9966];

let k = 3056;
// 73


console.log(maxFrequency(nums, k));




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency2 = function (nums, k) {
  nums.sort((a, b) => a - b, [0, 0]);
  let count = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    while ((right - left + 1) * nums[right] - sum > k) {
      sum -= nums[left];
      left++
    }
    count = Math.max(count, right - left + 1);
    right++;
  }
  return count;
};