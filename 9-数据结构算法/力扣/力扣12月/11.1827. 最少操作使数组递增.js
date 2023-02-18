/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
  if(nums.length===1){
    return 0;
  }
  let target = nums[0] + 1;
  let step = 0;
  for(let i = 1; i < nums.length; i++){
    if(nums[i] < target){
      let add = target - nums[i];
      step += add;
      target = target + 1;
      // console.log("增加步骤:", add);
    }else{
      target = nums[i] + 1;
    }  
  }
  return step;
};

let arr1 = [1,5,2,4,1];
// 14

console.log(minOperations(arr1));