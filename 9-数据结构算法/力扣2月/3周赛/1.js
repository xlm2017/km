/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
  let res = 0;
  for(let i = 0, j = nums.length - 1; i < Math.ceil(nums.length / 2); i++, j--){
      if(i === j){
          res += nums[i];
      }else{
          res += ("" + nums[i] + nums[j]) * 1; 
      }
  }
    return res;
};

let nums = [7,52,2,4];
// 596

console.log(findTheArrayConcVal(nums));