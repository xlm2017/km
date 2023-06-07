

/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function(nums) {
  let ji = [];
  let j = BigInt(nums[0]); 
  ji.push(j);
  for(let i = 1; i < nums.length; i++){
     j *= BigInt(nums[i]); 
     ji.push(j); 
  }
  console.log(ji);
  
  let num1 = null;
  let num2 = null;
  for (let i = 0; i < nums.length; i++) {
    num1 = ji[i];
    num2 = ji[ji.length - 1] / num1;   
    if(gc(num1, num2)){
      return i;
    }
  }
  function gc(a, b) {
    function gcd(n, m ){ 
      n = Math.max(n, m);
      m = Math.min(n, m);
      if( m == 0 ) return n; 
      return gcd( m, n % m ); 
    } 
    // 如果最大公约数为1，则a和b互质，否则不互质
    return gcd(a, b) === 1;
  }
  return -1;
};

let nums = [4,7,8,15,3,5];
// 2

console.log(findValidSplit(nums));