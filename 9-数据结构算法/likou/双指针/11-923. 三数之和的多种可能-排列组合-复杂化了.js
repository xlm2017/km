// 给定一个整数数组 arr ，以及一个整数 target 作为目标值，返回满足 i < j < k 且 arr[i] + arr[j] + arr[k] == target 的元组 i, j, k 的数量。

// 由于结果会非常大，请返回 109 + 7 的模。



// 示例 1：

// 输入：arr = [1,1,2,2,3,3,4,4,5,5], target = 8
// 输出：20
// 解释：
// 按值枚举(arr[i], arr[j], arr[k])：
// (1, 2, 5) 出现 8 次；
// (1, 3, 4) 出现 8 次；
// (2, 2, 4) 出现 2 次；
// (2, 3, 3) 出现 2 次。
// 示例 2：

// 输入：arr = [1,1,2,2,2,2], target = 5
// 输出：12
// 解释：
// arr[i] = 1, arr[j] = arr[k] = 2 出现 12 次：
// 我们从 [1,1] 中选择一个 1，有 2 种情况，
// 从 [2,2,2,2] 中选出两个 2，有 6 种情况。


// 提示：

// 3 <= arr.length <= 3000
// 0 <= arr[i] <= 100
// 0 <= target <= 300



/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  let map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  let nums = [...new Set(arr)];
  nums.sort((a, b) => a - b);
  let ans = 0;
  let mod = 10 ** 9 + 7;
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] + nums[i] === target) {
        ans = (ans + map.get(nums[l]) * map.get(nums[r]) * map.get(nums[i])) % mod;
        r--;
        l++
      } else if (nums[l] + nums[r] + nums[i] > target) {
        r--
      } else {
        l++
      }
    }
  }

  map.forEach((val, key) => {
    // 避免0做分母
    if ( 3 * key === target && val >= 3) {
      ans = (ans + val * (val - 1) * (val - 2) / 6) % mod;
    } else if (map.get((target - key) / 2) >= 2 && (target - key) / 2 != key) {
      ans = (ans + map.get((target - key) / 2) * (map.get((target - key) / 2) - 1) / 2 * val) % mod;
      // console.log(ans, key)
    }
  })
  return ans % mod;
};


// let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], target = 8
// 输出：20

let arr = [1, 1, 2, 2, 2, 2], target = 5
// 12
// let arr1 = [1, 2, 0, 3, 2], target1 = 4
// 2

let arr1 = [0, 3, 0, 2, 1, 0, 1], target1 = 5
// 4

// console.log(threeSumMulti(arr, target));
console.log(threeSumMulti(arr1, target1));