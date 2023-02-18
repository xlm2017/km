



/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    let j = 2;
    while ( i % j !== 0 && j < i) {
      j++;
    }
    if(j === i){
      // 质数
      arr.push(i);
    }
  }
  if(arr.length < 2){
    return [-1, -1];
  }
  let min = arr[1] - arr[0];
  console.log("arr:", arr, min);
  let index = 1;
  for (let i = 2; i < arr.length; i++) {
    if(arr[i] - arr[i - 1] < min){
      min = arr[i] - arr[i -1];
      index = i;
    }
  }
  return [arr[index-1], arr[index]];
};




let left = 19, right = 32;

console.log(closestPrimes(left, right));