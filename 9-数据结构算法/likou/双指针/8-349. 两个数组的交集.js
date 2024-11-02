// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。



// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
// 解释：[4,9] 也是可通过的


// 提示：

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let res = [];
  let index1 = 0;
  let len1 = nums1.length;
  let index2 = 0;
  let len2 = nums2.length;
  while (index1 < len1 && index2 < len2) {
    if (nums1[index1] < nums2[index2]) {
      index1++
    } else if (nums1[index1] > nums2[index2]) {
      index2++
    } else {
      if (!res.length || res[res.length - 1] !== nums1[index1]) {
        res.push(nums1[index1]);
      }
      index1++
      index2++
    }
  }
  return res;
};


let nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// 输出：[2]

console.log(intersection(nums1, nums2));