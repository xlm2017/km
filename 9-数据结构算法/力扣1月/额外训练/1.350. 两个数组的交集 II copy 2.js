


// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，
// 应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。



// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// js排序+双指针解法

var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let left = 0, right = 0;
  let res = []
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      res.push(nums1[left])
      left++
      right++
    }
    else if (nums1[left] > nums2[right]) {
      right++
    }
    else left++
  }
  return res

  // 作者：0jIcq9DUDe
  // 链接：https://leetcode.cn/problems/intersection-of-two-arrays-ii/solutions/1072774/jspai-xu-shuang-zhi-zhen-jie-fa-by-0jicq-7hkj/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。  
};


let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
// [2, 2]

console.log(intersect(nums1, nums2));