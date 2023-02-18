// 给定你一个整数数组 nums

// 我们要将 nums 数组中的每个元素移动到 A 数组 或者 B 数组中，使得 A 数组和 B 数组不为空，并且 average(A) == average(B) 。

// 如果可以完成则返回true ， 否则返回 false  。

// 注意：对于数组 arr ,  average(arr) 是 arr 的所有元素除以 arr 长度的和。



// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7,8]
// 输出: true
// 解释: 我们可以将数组分割为 [1,4,5,8] 和 [2,3,6,7], 他们的平均值都是4.5。
// 示例 2:

// 输入: nums = [3,1]
// 输出: false


// 提示:

// 1 <= nums.length <= 30
// 0 <= nums[i] <= 104


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function (nums) {
  if (nums.length === 1) {
    return false;
  }

  // 计算整个数组平均和
  let sum = nums.reduce((total, item, index) => {
    return total + item;
  }, 0)

  let average = sum / nums.length;

  console.log("平均值:", average);

  // 组合问题, 回溯算法处理所有组合, 从k = 1开始到 
  // 偶数长度的话, k < length/2;  奇数长度的话, k < length/2

  let flag = false;
  let resArr = [];
  // 如果回溯找到一个满足条件的, 就返回true
  let stack = [];
  let used = [];  // 存储已经使用过得
  let backfun = function (arr, k, index) {
    // 终止条件
    if (k == 0) {
      let arrValue = JSON.parse(JSON.stringify(stack));
      resArr.push(arrValue);
      let sum2 = arrValue.reduce((total, item, index) => {
        return total + item;
      }, 0);

      let average2 = sum2 / arrValue.length;
      if (average === average2) {
        flag = true;
        console.log("当前组合:", arrValue);
        return true;
      }
      return;
    }
    // for (let i = index; i < arr.length; i++) {
    for (let i = index; i < arr.length; i++) {

      if (used.includes(i)) {
        // console.log("当前已经使用过得下标:", used);
        continue;
      }

      stack.push(arr[i]);
      used.push(i);  // 使用过得下标
      let f = backfun(nums, k - 1, index + 1);
      if (f) {
        return true;
      }
      stack.pop();
      used.pop();
    }
  };
  let k = 1;
  while (k <= nums.length / 2 && !flag) {
    backfun(nums, k, 0);
    k++;
  }
  // console.log("全部组合:", resArr);
  return flag;
};
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr1 = [1, 2, 3];
// let arr1 = [5, 3, 11, 19, 2];  // true
// let arr1 = [2, 12, 18, 16, 19, 3];     // false
let arr1 = [4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 5];
console.log("结果:", splitArraySameAverage(arr1));


// [60,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]
// 内存溢出
// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory

// O(2^N)


// 此时 230=1,073,741,8242^{30} = 1,073,741,8242 
// 30
//  =1,073,741,824，组合的数据非常大。 因此我们考虑将数组平均分成两部分 A0A_0A 
// 0
// ​
//   和 B0B_0B 
// 0
// ​
//  ，它们均含有 n2\dfrac{n}{2} 
// 2
// n
// ​
//   个元素（不失一般性，这里假设 nnn 为偶数。如果 nnn 为奇数，在 A0A_0A 
// 0
// ​
//   中多放一个元素即可），此时这两个数组分别有 2n22^{\frac{n}{2}}2 
// 2
// n
// ​

// 一看数据范围是30直接暴力2^30肯定会超时，于是马上想到用中途相遇法，
// 这玩意你以前用过就能想到，没见过自己确实很难想。