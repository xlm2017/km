// 输入：nums = [3,4,5,1,2]
// 输出：true
// 解释：[1,2,3,4,5] 为有序的源数组。
// 可以轮转 x = 3 个位置，使新数组从值为 3 的元素开始：[3,4,5,1,2] 。


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  for (let x = 0; x < nums.length; x++) {
    let arr = [];
    let isSheng = false;
    let isJiang = false;
    for (let j = 0; j < nums.length; j++) {
      arr.push(nums[(x + j) % nums.length]);
      if (x === 3) {
        console.log("x===3,j=", j, ',', nums[(x + j - 1) % nums.length], nums[(x + j) % nums.length]);
      }
      if (j > 0) {
        if (nums[(x + j - 1) % nums.length] <= nums[(x + j) % nums.length]) {
          isSheng = true;
        }
        if (nums[(x + j - 1) % nums.length] > nums[(x + j) % nums.length]) {
          isJiang = true;
        }
      }
      if (j === nums.length - 1) {
        console.log("x结束:", x, isJiang, isSheng);
        // if (!isJiang || !isSheng) {
        //   return true;
        // }
        if (isSheng && !isJiang) {
          return true;
        }
      }

    }

  }
  return false;
};

// let nums1 = [2, 1, 3, 4]
// false

// let nums1 = [1, 2, 3]
// true

// let nums1 = [3, 4, 5, 1, 2]
// true

let nums1 = [1, 1, 1]
// true
console.log(check(nums1));