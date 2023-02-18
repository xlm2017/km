// 给你两个长度可能不等的整数数组 nums1 和 nums2 。两个数组中的所有值都在 1 到 6 之间（包含 1 和 6）。

// 每次操作中，你可以选择 任意 数组中的任意一个整数，将它变成 1 到 6 之间 任意 的值（包含 1 和 6）。

// 请你返回使 nums1 中所有数的和与 nums2 中所有数的和相等的最少操作次数。如果无法使两个数组的和相等，请返回 -1 。



// 示例 1：

// 输入：nums1 = [1,2,3,4,5,6], nums2 = [1,1,2,2,2,2]
// 输出：3
// 解释：你可以通过 3 次操作使 nums1 中所有数的和与 nums2 中所有数的和相等。以下数组下标都从 0 开始。
// - 将 nums2[0] 变为 6 。 nums1 = [1,2,3,4,5,6], nums2 = [6,1,2,2,2,2] 。
// - 将 nums1[5] 变为 1 。 nums1 = [1,2,3,4,5,1], nums2 = [6,1,2,2,2,2] 。
// - 将 nums1[2] 变为 2 。 nums1 = [1,2,2,4,5,1], nums2 = [6,1,2,2,2,2] 。
// 示例 2：

// 输入：nums1 = [1,1,1,1,1,1,1], nums2 = [6]
// 输出：-1
// 解释：没有办法减少 nums1 的和或者增加 nums2 的和使二者相等。
// 示例 3：

// 输入：nums1 = [6,6], nums2 = [1]
// 输出：3
// 解释：你可以通过 3 次操作使 nums1 中所有数的和与 nums2 中所有数的和相等。以下数组下标都从 0 开始。
// - 将 nums1[0] 变为 2 。 nums1 = [2,6], nums2 = [1] 。
// - 将 nums1[1] 变为 2 。 nums1 = [2,2], nums2 = [1] 。
// - 将 nums2[0] 变为 4 。 nums1 = [2,2], nums2 = [4] 。


// 提示：

// 1 <= nums1.length, nums2.length <= 105
// 1 <= nums1[i], nums2[i] <= 6


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {

  let times = 0;

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let sum1 = nums1.reduce((total, item) => total + item);
  let sum2 = nums2.reduce((total, item) => total + item);

  console.log("初加工信息:", nums1, nums2, sum1, sum2);

  let differ = Math.abs(sum1 - sum2);
  if (sum1 === sum2) {
    return 0;
  }

  if (sum2 > sum1) {
    let temp = JSON.parse(JSON.stringify(nums1));
    nums1 = nums2;
    nums2 = temp;
  }


  let right = nums1.length - 1
  let left = 0;

  // console.log("计算的nums1:", nums1);
  // console.log("计算的nums2:", nums2);
  // while (right >= 0 && left < nums2.length) {
  while (true) {
    // console.log("当前的下标:", right, left);
    if (right < 0 && left >= nums2.length) {
      if (differ === 0) {
        return times;
      } else {
        return -1;
      }
    }

    // nums1从大到小变成小数, nums2从小到大变成大数
    // 计算差值最大值, 潜力
    let diff1 = 0;
    let diff2 = 0;
    if (right >= 0) {
      diff1 = nums1[right] - 1;
    }
    if (left < nums2.length) {
      diff2 = 6 - nums2[left];
    }
    console.log("计算差值:", diff1, diff2);
    // 一次最大可增加值为 diff1 - diff2 之间
    if (differ > Math.max(diff1, diff2)) {
      times++;
      if (diff1 > diff2) {
        differ = differ - diff1;
        right--;
      } else if (diff1 === diff2) {
        if (diff1 === 0) {
          right--;
          left++;
          continue;
        }
        differ = differ - diff1;
        // 相等的情况下, 看那边剩余的数多
        // console.log('相等,下标:', right, left);
        if (right + 1 >= nums2.length - left) {
          right--;
        } else {
          left++;
        }
      } else {
        differ = differ - diff2;
        left++;
      }

    } else {
      times++;
      return times;
    }
  }
  // return -1;
};

let num1 = [1, 1, 1, 1, 1, 1, 1];
let num2 = [6];
// -1

// let nums1 = [6, 6];
// let nums2 = [1];

// [6, 1]
// [1]

// [1, 1]
// [1]


// let num1 = [5, 6, 4, 3, 1, 2]; // 21
// let num2 = [6, 3, 3, 1, 4, 5, 3, 4, 1, 3, 4]; // 37
// 4

/**
 * [1, 1, 3, 3, 3, 3, 4, 4, 4, 5, 6]    // 16
 * [1, 2, 3, 4, 5, 6]
 * 
 * 
 * [1, 1, 3, 3, 3, 3, 4, 4, 4, 5, 1]    // 11
 * [1, 2, 3, 4, 5, 6]
 * 
 * [1, 1, 3, 3, 3, 3, 4, 4, 4, 5, 1]    // 6
 * [6, 2, 3, 4, 5, 6]
 * 
 * [1, 1, 3, 3, 3, 3, 4, 4, 4, 1, 1]    // 2
 * [6, 2, 3, 4, 5, 6]
 * 
 * [1, 1, 3, 3, 3, 3, 4, 4, 4, 1, 1]    // 0
 * [6, 2, 3, 4, 5, 6]
 */


console.log(minOperations(num1, num2));