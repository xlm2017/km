// 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。

// 给定一个数组 nums 代表了集合 S 发生错误后的结果。

// 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。



// 示例 1：

// 输入：nums = [1,2,2,4]
// 输出：[2,3]
// 示例 2：

// 输入：nums = [1,1]
// 输出：[1,2]


// 提示：

// 2 <= nums.length <= 10^4
// 1 <= nums[i] <= 10^4


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {

  const errorNums = new Array(2).fill(0);
  const len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    // if(nums[i] !== i + 1 && !errorNums[1] && !nums.includes(i + 1)){
    //   errorNums[1] = i + 1
    // }
    if(nums[i] !== i + 1 && !errorNums[1]){
      if(i + 1 < len){
        if(nums[i+1] !== i + 1){
          errorNums[1] = i + 1
        }
      }else{
        errorNums[1] = i + 1
      }
    }
    if(nums[i-1] === nums[i]){
      errorNums[0] = nums[i]
    }
  }
  
  return errorNums;

};


// let nums = [1, 2, 2, 4];
// let nums = [1, 1];

// let nums = [2,2];
// [2,1]


// let nums = [3,2,3,4,6,5];
// [3,1]

let nums = [1,5,3,2,2,7,6,4,8,9];
// [2, 10]

console.log(findErrorNums(nums));