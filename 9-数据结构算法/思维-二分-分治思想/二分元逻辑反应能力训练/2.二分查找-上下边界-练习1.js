/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

// 有序数组, 求小于等于target的数有多少个
var countFairPairs = function (nums, target) {
  
  let left = 0;
  let right = nums.length - 1;

  let timer = null
  while (left <= right) {
    let mid = (left + right) >> 1;

    console.log("\nmid:", mid);
    console.log("开始-left-right:", left, right);

    if(nums[mid] > target){
      right = mid - 1;
    }else{
      left = mid;
    }

    console.log("结束-left-right:", left, right);


    timer = setTimeout(()=>{
      left = 1000;
      console.log("强制结束");
    },3000)
  }

  console.log("\n\n结束:", left, right);
  
};


// let nums = [0, 1, 7, 4, 4, 5], lower = 3, upper = 6;
// 6


let nums = [1, 2, 2, 5, 9, 9, 12, 12, 15], target = 12;


let nums2 = [1, 2, 2, 5, 9, 9, 12, 12, 15], target2 = 13;




console.log("结果:", countFairPairs(nums, target));

// console.log("结果:", countFairPairs(nums2, target2));