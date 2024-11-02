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

  let res = [];
  nums1.sort((a, b) => a - b);

  for (let i = 0; i < nums2.length; i++) {
    let flag = false;
    for (let j = 0; j < nums1.length; j++) {
      if(nums1[j] > nums2[i]){
        res.push(nums1[j]);
        nums1.splice(j, 1);
        flag = true;
        break;
      }      
    }
    if(!flag){
      res.push(nums1.shift());
    }    
  }

  return res;
};


let nums1 = [2, 7, 11, 15], nums2 = [1, 10, 4, 11]
// 输出：[2,11,7,15]



console.log(advantageCount(nums1, nums2));