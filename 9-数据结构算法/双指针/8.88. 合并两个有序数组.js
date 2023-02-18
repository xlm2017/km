/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // var p = nums1.length - 1, p1 = m - 1, p2 = n - 1
  // while (p1 >= 0 && p2 >= 0) {
  //   if (nums2[p2] > nums1[p1]) {
  //     nums1[p] = nums2[p2]
  //     p2--;
  //     p--;
  //   } else {
  //     nums1[p] = nums1[p1]
  //     p1--
  //     p--
  //   }
  // }
  // while (p2 >= 0) {// nums1指针没到头但是num2指针到头，不影响,nums2指针没到头要添加到nums1上
  //   nums1[p] = nums2[p2]
  //   p2--
  //   p--
  // }



  let p1 = 0, p2 = 0;
  const sorted = new Array(m + n).fill(0);
  var cur;
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++];
    } else {
      cur = nums2[p2++];
    }
    sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i != m + n; ++i) {
    nums1[i] = sorted[i];
  }
  return sorted;
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

console.log(merge(nums1, m, nums2, n));