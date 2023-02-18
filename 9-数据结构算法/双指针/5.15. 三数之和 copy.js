// 给你一个整数数组 nums ，判断是否存在三元组[nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。


// 示例 1：

// 输入：nums = [-1, 0, 1, 2, -1, -4]
// 输出：[[-1, -1, 2], [-1, 0, 1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是[-1, 0, 1] 和[-1, -1, 2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：

// 输入：nums = [0, 1, 1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：

// 输入：nums = [0, 0, 0]
// 输出：[[0, 0, 0]]
// 解释：唯一可能的三元组和为 0 。


// 提示：

// 3 <= nums.length <= 3000
//   - 10^5 <= nums[i] <= 10^5


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  if (nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b);
  // console.log("nums:", nums);
  let res = [];
  let j = 1;
  // // nums[i] + nums[j]  = 0 - element

  let left = 0;
  let right = 0;
  // 负数集合
  let arr1 = [];
  // 0集合
  let arr2 = [];
  // 正数集合
  let arr3 = [];
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    // console.log('ele:', element);
    let target = 0 - element;
    // console.log("target:", target);
    // console.log('\n');

    if (element < 0) {
      arr1.push(element);
    } else if (element === 0) {
      arr2.push(element);
    } else {
      arr3.push(element);
    }
  }
  // console.log(arr1, arr2, arr3);

  let set = new Set();

  // 负0正 负正正 负负正
  // 000 
  // [ -4, -1, -1 ] [ 0 ] [ 1, 2 ]
  if (arr2.length) {

    // 多个0
    if (arr2.length >= 3) {
      res.push([0, 0, 0]);
    }

    // 负0正
    // 双指针判断
    let left = 0;
    let right = arr3.length - 1;
    if (!arr1.length || !arr3.length) {
      return res;
    }
    while (true) {

      // console.log("双指针逼近-循环", left, right);
      // [0, 1, 1]
      if (left === arr1.length - 1 && right === 0) {
        if (arr1[left] + arr3[right] === 0) {
          // res.push([arr1[left], 0, arr3[right]]);
          let temp = [arr1[left], 0, arr3[right]];
          if (!set.has(temp.join(""))) {
            set.add(temp.join(""));
            res.push(temp);
          }
        }
        break;
      }

      if (arr1[left] + arr3[right] === 0) {

        // res.push([arr1[left], 0, arr3[right]]);

        let temp = [arr1[left], 0, arr3[right]];
        if (!set.has(temp.join(""))) {
          set.add(temp.join(""));
          res.push(temp);
        }

        if (left + 1 < arr1.length) {
          left++;
        }
        if (right - 1 >= 0) {
          right--;
        }
      } else if (arr1[left] + arr3[right] < 0) {
        if (left + 1 < arr1.length) {
          left++;
        } else {
          if (right - 1 >= 0) {
            right--;
          }
        }
      } else {
        if (right - 1 >= 0) {
          right--;
        } else {
          if (left + 1 < arr1.length) {
            left++;
          }
        }
      }
    }
  }

  if (!arr1.length || !arr3.length) {
    return res;
  }
  // 负负正
  for (let i = 0; i < arr3.length; i++) {
    const element = arr3[i];
    let obj = {};
    for (let j = 0; j < arr1.length; j++) {
      const element2 = arr1[j];
      let target1 = 0 - element - element2;
      // console.log("element:", element, obj, target1);
      if (!obj[element2]) {
        obj[target1] = true;
      } else {
        let temp = [target1, element2, element];
        temp.sort((a, b) => a - b);
        if (!set.has(temp.join(""))) {
          set.add(temp.join(""));
          res.push(temp);
        }
      }
    }
  }

  // 负正正
  for (let i = 0; i < arr1.length; i++) {
    // 负
    const element = arr1[i];
    let obj = {};
    for (let j = 0; j < arr3.length; j++) {
      const element2 = arr3[j];
      // 另一个目标正数
      let target1 = 0 - element - element2;
      // console.log("element:", element, element2, obj, target1);
      // 当前数, 找到了对应的hash属性
      if (!obj[element2]) {
        obj[target1] = true;
      } else {
        let temp = [target1, element2, element];
        temp.sort((a, b) => a - b);
        if (!set.has(temp.join(""))) {
          set.add(temp.join(""));
          res.push(temp);
        }
      }
    }
  }

  return res;
};

// let num1 = [-1, 0, 1, 2, -1, -4];
// let num1 = [-1, 0, 1, 2, -1, -1, -3];

// let num1 = [3, -2, 1, 0];

// let num1 = [0, 1, 1];
// let num1 = [-1, 0, 1];

let num1 = [-1, 0, 1, 2, -1, -4];

// 6*5 / 2*1 = 15
// [
//   [0, 1], [0, 2],
//   [0, 3], [0, 4],
//   [0, 5], [1, 2],
//   [1, 3], [1, 4],
//   [1, 5], [2, 3],
//   [2, 4], [2, 5],
//   [3, 4], [3, 5],
//   [4, 5]
// ]

console.log(threeSum(num1));


//  暴力分情况讨论, 6%击败