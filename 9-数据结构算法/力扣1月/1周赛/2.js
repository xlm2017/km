

/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function(nums) {
  let arr = [];
  for(let i = 0; i < nums.length; i++){
    let k = nums[i];
    while (true) {
      let j = 2;
      while (k % j !== 0 && j < nums[i]) {
        j++;
      }
      if(j === k){
        // 质数
        arr.push(k);
        break;
      }else{
        // 非质数
        // 分割成质数相乘
        arr.push(j);
        k = k / j;
        console.log("j , k:", j, k);
      } 
    }
  }
  // console.log("arr:", arr);
  let set = new Set(arr);
  return set.size;
};



let nums = [2,4,3,7,10,6]
// let nums = [27]


console.log(distinctPrimeFactors(nums));