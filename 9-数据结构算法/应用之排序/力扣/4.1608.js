

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
  nums.sort((a,b)=>a-b);
  // [ 0, 3, 6, 7, 7 ]
  let len = nums.length;
  for(let i = 0; i < nums.length; i++){
    let n = len - i;
    if(i - 1 >= 0){
      if( n <= nums[i] && n > nums[i-1]){
        // 3 6
        console.log(n, nums[i]);
        return n;
      }
    }else{
      if( n <= nums[i]){
        console.log(n, nums[i]);
        return n;
      }
    }
  }
  return -1;
};


let nums1 = [3,6,7,7,0];
// -1

console.log(specialArray(nums1));

console.log("".split(""));
// []