// 给你一个长度为 n 的整数数组 nums ，请你求出每个长度为 k 的子数组的 美丽值 。

// 一个子数组的 美丽值 定义为：如果子数组中第 x 小整数 是 负数 ，那么美丽值为第 x 小的数，否则美丽值为 0 。

// 请你返回一个包含 n - k + 1 个整数的数组，依次 表示数组中从第一个下标开始，每个长度为 k 的子数组的 美丽值 。

// 子数组指的是数组中一段连续 非空 的元素序列。



// 示例 1：

// 输入：nums = [1,-1,-3,-2,3], k = 3, x = 2
// 输出：[-1,-2,-2]
// 解释：总共有 3 个 k = 3 的子数组。
// 第一个子数组是 [1, -1, -3] ，第二小的数是负数 -1 。
// 第二个子数组是 [-1, -3, -2] ，第二小的数是负数 -2 。
// 第三个子数组是 [-3, -2, 3] ，第二小的数是负数 -2 。
// 示例 2：

// 输入：nums = [-1,-2,-3,-4,-5], k = 2, x = 2
// 输出：[-1,-2,-3,-4]
// 解释：总共有 4 个 k = 2 的子数组。
// [-1, -2] 中第二小的数是负数 -1 。
// [-2, -3] 中第二小的数是负数 -2 。
// [-3, -4] 中第二小的数是负数 -3 。
// [-4, -5] 中第二小的数是负数 -4 。
// 示例 3：

// 输入：nums = [-3,1,2,-3,0,-3], k = 2, x = 1
// 输出：[-3,0,-3,-3,-3]
// 解释：总共有 5 个 k = 2 的子数组。
// [-3, 1] 中最小的数是负数 -3 。
// [1, 2] 中最小的数不是负数，所以美丽值为 0 。
// [2, -3] 中最小的数是负数 -3 。
// [-3, 0] 中最小的数是负数 -3 。
// [0, -3] 中最小的数是负数 -3 。


// 提示：

// n == nums.length 
// 1 <= n <= 105
// 1 <= k <= n
// 1 <= x <= k 
// -50 <= nums[i] <= 50 



var getSubarrayBeauty = function (nums, k, x) {
  let map = new Map(); // 用一个map记录存在的数字
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1) // 因为需要考虑出现重复数字
    // 当map长度满足k项时
    if (i >= k - 1) {
      let cnt = 0;
      //数字区间 -50~50 因为大于0的，按题目要求填0，所以只遍历-50~0
      for (let j = -50; j <= 0; j++) {
        cnt += map.get(j) || 0;
        // 出现满足条件的
        if (cnt >= x) {
          res.push(j);
          break;
        }
        // 大于等于0，放入0
        if (j === 0) {
          res.push(0)
        }
      }
      // 当前n项遍历完需要 shift 最开始一项，这里用 map 对应值-1实现
      map.set(nums[i - k + 1], (map.get(nums[i - k + 1])) - 1)
    }
  }
  return res;
};



let nums = [-3, 1, 2, -3, 0, -3], k = 2, x = 1
// [-3,0,-3,-3,-3]


console.log(getSubarrayBeauty(nums, k, x));

console.log("==============================");


let nums2 = [-1, -2, -3, -4, -5], k2 = 2, x2 = 2;
// [-1,-2,-3,-4]

console.log(getSubarrayBeauty(nums2, k2, x2));



var getSubarrayBeauty = function (nums, k, x) {
  console.log("getSubarrayBeauty2");
  let n = nums.length
  let arr = Array(101).fill(0)
  for (let i = 0; i < k - 1; i++) {
    arr[nums[i] + 50]++
  }
  let ans = []
  for (let i = k - 1; i < n; i++) {
    arr[nums[i] + 50]++
    let rest = x
    let flag = false
    for (let j = 0; j < 50; j++) {
      rest -= arr[j]
      if (rest <= 0) {
        flag = true
        ans.push(j - 50)
        break
      }
    }
    if (!flag) ans.push(0)
    arr[nums[i - k + 1] + 50]--
  }
  return ans
};