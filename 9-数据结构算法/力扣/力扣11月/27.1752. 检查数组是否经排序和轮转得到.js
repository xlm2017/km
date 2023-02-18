// 输入：nums = [3,4,5,1,2]
// 输出：true
// 解释：[1,2,3,4,5] 为有序的源数组。
// 可以轮转 x = 3 个位置，使新数组从值为 3 的元素开始：[3,4,5,1,2] 。


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  if (nums.length <= 1) {
    return true;
  }


  // 检测本身是否是一个有序的数组
  // let isSheng = false;
  // let isJiang = false;
  // for (let i = 0; i < nums.length - 1; i++) {
  //   if (nums[i] < nums[i + 1]) {
  //     isSheng = true;
  //   } else {
  //     isJiang = true;
  //   }
  // }
  // if (isJiang && isSheng) {
  //   // return false;
  // } else {
  //   return true;
  // }


  for (let x = 0; x < nums.length; x++) {
    let arr = [];
    let isSheng = false;
    let isJiang = false;
    console.log("x-递归");
    for (let j = 0; j < nums.length; j++) {
      // console.log('j:', j, isJiang, isSheng);
      // if (nums[x] !== nums[(x + j) % nums.length] || (isJiang && isSheng)) {
      //   console.log("终止", x, j);
      //   break;
      // }
      // if (j == nums.length - 1) {
      //   return true;
      // }

      arr.push(nums[(x + j) % nums.length]);
      if ((x + j) % nums.length > 0) {
        if (nums[(x + j) % nums.length - 1] < nums[(x + j) % nums.length]) {
          isSheng = true;
        } else {
          isJiang = true;
        }
      }
      if (arr.length === nums.length) {
        if (!isJiang || !isSheng) {
          return true;
        }
      }

    }

  }
  return false;
};

// let nums1 = [2, 1, 3, 4]
// false

let nums1 = [1, 2, 3]
// true
console.log(check(nums1));