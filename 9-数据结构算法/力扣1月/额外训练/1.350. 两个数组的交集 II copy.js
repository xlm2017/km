


// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，
// 应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。



// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let big;
  let small;
  //区分长度不同的大小数组
  if (len1 !== len2) {
    small = len1 < len2 ? nums1 : nums2;
    big = len1 > len2 ? nums1 : nums2;
  } else {
    small = nums1;
    big = nums2;
  }
  let arr = [];
  //遍历长度较小数组
  for (let item of small) {
    if (big.includes(item)) {
      arr.push(item);
      //判断较长数组后删除元素避免重复
      big.splice(big.indexOf(item), 1)
    }
  }
  return arr;

  // 作者：6allant Mendeleevx4W
  // 链接：https://leetcode.cn/problems/intersection-of-two-arrays-ii/solutions/1606788/by-6allant-mendeleevx4w-5972/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。  



  // 简写
  // let big = nums1.length >= nums2.length ? nums1 : nums2;
  // let small = nums1.length < nums2.length ? nums1 : nums2;
  // let arr = [];
  // for(let i = 0; i < small.length; i++){
  //   if(big.includes(small[i])){
  //     arr.push(small[i]);
  //     big.splice(big.indexOf(small[i]), 1);
  //   }
  // }
  // return arr;
};


let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
// [2, 2]

console.log(intersect(nums1, nums2));