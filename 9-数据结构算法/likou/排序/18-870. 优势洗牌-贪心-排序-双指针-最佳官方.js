// 给定两个长度相等的数组 nums1 和 nums2，nums1 相对于 nums2 的优势可以用满足 nums1[i] > nums2[i] 的索引 i 的数目来描述。

// 返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。



// 示例 1：

// 输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
// 输出：[2,11,7,15]
// 示例 2：

// 输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
// 输出：[24,32,8,12]


// 提示：

// 1 <= nums1.length <= 105
// nums2.length == nums1.length
// 0 <= nums1[i], nums2[i] <= 109


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {


  const len = nums1.length;
  // 记录序号
  const idx1 = new Array(len).fill(0);
  const idx2 = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    idx1[i] = i;
    idx2[i] = i;
  }
  // 根据值排列序号
  idx1.sort((i1, i2) => nums1[i1] - nums1[i2]);
  idx2.sort((i1, i2) => nums2[i1] - nums2[i2]);

  console.log(idx1)
  console.log(idx2)

  const res = new Array(len).fill(0);
  // 双指针, 用来取元素
  let left = 0; let right = len - 1;
  for (let i = 0; i < len; i++) {
    // nums1中的最小值刚好大于nums2的最小值, left ++
    if (nums1[idx1[i]] > nums2[idx2[left]]) {

      // res不用push方式存值
      res[idx2[left]] = nums1[idx1[i]];
      left++;
    } else {

      // res不用push方式存值
      res[idx2[right]] = nums1[idx1[i]];
      right--;
    }
  }
  return res;

};


let nums1 = [2, 7, 11, 15], nums2 = [1, 10, 4, 11]
// 输出：[2,11,7,15]



console.log(advantageCount(nums1, nums2));