// 给你两个整数数组 nums1 和 nums2 ，请你返回根据以下规则形成的三元组的数目（类型 1 和类型 2 ）：

// 类型 1：三元组 (i, j, k) ，如果 nums1[i]2 == nums2[j] * nums2[k] 其中 0 <= i < nums1.length 且 0 <= j < k < nums2.length
// 类型 2：三元组 (i, j, k) ，如果 nums2[i]2 == nums1[j] * nums1[k] 其中 0 <= i < nums2.length 且 0 <= j < k < nums1.length


// 示例 1：

// 输入：nums1 = [7,4], nums2 = [5,2,8,9]
// 输出：1
// 解释：类型 1：(1,1,2), nums1[1]^2 = nums2[1] * nums2[2] (4^2 = 2 * 8)
// 示例 2：

// 输入：nums1 = [1,1], nums2 = [1,1,1]
// 输出：9
// 解释：所有三元组都符合题目要求，因为 1^2 = 1 * 1
// 类型 1：(0,0,1), (0,0,2), (0,1,2), (1,0,1), (1,0,2), (1,1,2), nums1[i]^2 = nums2[j] * nums2[k]
// 类型 2：(0,0,1), (1,0,1), (2,0,1), nums2[i]^2 = nums1[j] * nums1[k]
// 示例 3：

// 输入：nums1 = [7,7,8,3], nums2 = [1,2,9,7]
// 输出：2
// 解释：有两个符合题目要求的三元组
// 类型 1：(3,0,2), nums1[3]^2 = nums2[0] * nums2[2]
// 类型 2：(3,0,1), nums2[3]^2 = nums1[0] * nums1[1]
// 示例 4：

// 输入：nums1 = [4,7,9,11,23], nums2 = [3,5,1024,12,18]
// 输出：0
// 解释：不存在符合题目要求的三元组


// 提示：

// 1 <= nums1.length, nums2.length <= 1000
// 1 <= nums1[i], nums2[i] <= 10^5



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {

  function calc(arr1, arr2) {
    let map2 = new Map();
    for (const item of arr2) {
      map2.set(item, (map2.get(item) || 0) + 1)
    }
    let ans = 0;
    for (let i = 0; i < arr1.length; i++) {
      let l = 0;
      let r = arr2.length - 1;
      let target = arr1[i] * arr1[i];
      while (l < r) {
        if (arr2[l] * arr2[r] < target) {
          l++;
        } else if (arr2[l] * arr2[r] > target) {
          r--;
        } else {

          if (arr2[l] === arr2[r]) {
            // 统计个数, 结束遍历
            ans += map2.get(arr2[l]) *(map2.get(arr2[l]) - 1) / 2;
            break;
          } else {
            // 统计个数, 计算总数
            ans += map2.get(arr2[l]) * map2.get(arr2[r]);
            l = l + map2.get(arr2[l]);
            r = r - map2.get(arr2[r]);
          }
          // ans++;
          // l++;
          // r--;
        }
      }
    }
    return ans;
  }

  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  return calc(nums1, nums2) + calc(nums2, nums1);
};


let nums1 = [7, 4], nums2 = [5, 2, 8, 9]
// 输出：1


console.log(numTriplets(nums1, nums2));


