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


  let res = [];
  // let j = 1;
  // // nums[i] + nums[j]  = 0 - element

  // for (let i = 0; i < nums.length; i++) {
  //   let element = nums[i];
  //   console.log('ele:', element);
  //   let target = 0 - element;
  //   console.log("target:", target);
  //   console.log('\n');
  // }

  let indexs = [];
  let set = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    const element1 = nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      const element2 = nums[j];
      indexs.push([i, j]);
      for (let z = j + 1; z < nums.length; z++) {
        if (nums[z] < 0) {
          continue;
        }
        const element3 = nums[z];
        if (nums[i] + nums[j] + nums[z] === 0) {
          let temp = [nums[i], nums[j], nums[z]];
          // temp.sort((a, b) => a - b);
          if (!set.has(temp.join(""))) {
            res.push([nums[i], nums[j], nums[z]]);
            set.add(temp.join(""));
          }
        }
      }
    }
  }

  // console.log("indexs:", indexs);
  return res;
};

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


// 回溯算法, 超时

// FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory


// terminate called after throwing an instance of 'std::bad_alloc'
// what(): std:: bad_alloc
