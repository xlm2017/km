// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
// 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
// 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

// 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。



// 示例 1：

// 输入：nums = [3,4,5,1,2]
// 输出：1
// 解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
// 示例 2：

// 输入：nums = [4,5,6,7,0,1,2]
// 输出：0
// 解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。
// 示例 3：

// 输入：nums = [11,13,15,17]
// 输出：11
// 解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 这个二分 ?

  // let left = 0;
  // let right = nums.length - 1;
  // while (left < right) {
  //   let mid = left + (right - left) / 2;
  //   if (nums[mid] > nums[right]) {
  //     left = mid + 1;
  //   } else {
  //     right = mid;
  //   }
  // }
  // return nums[left];

  // 作者：armeria
  // 链接：https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/solutions/126635/er-fen-cha-zhao-wei-shi-yao-zuo-you-bu-dui-cheng-z/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



  //   let left = 0;
  //   let right = nums.length - 1;                /* 左闭右闭区间，如果用右开区间则不方便判断右值 */
  //   while (left < right) {                      /* 循环不变式，如果left == right，则循环结束 */
  //     let mid = left + (right - left) / 2;    /* 地板除，mid更靠近left */
  //     if (nums[mid] > nums[right]) {          /* 中值 > 右值，最小值在右半边，收缩左边界 */
  //       left = mid + 1;                     /* 因为中值 > 右值，中值肯定不是最小值，左边界可以跨过mid */
  //     } else if (nums[mid] < nums[right]) {   /* 明确中值 < 右值，最小值在左半边，收缩右边界 */
  //       right = mid;                        /* 因为中值 < 右值，中值也可能是最小值，右边界只能取到mid处 */
  //     }
  //   }
  //   return nums[left];    /* 循环结束，left == right，最小值输出nums[left]或nums[right]均可 */


  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2);
    if (nums[pivot] < nums[high]) {
      high = pivot;
    } else {
      low = pivot + 1;
    }
  }
  return nums[low];

  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/solutions/698479/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

};


// let nums = [3, 4, 5, 1, 2];

let nums = [2, 1];

console.log(findMin(nums));
