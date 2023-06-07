

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
  let ans = 0;
  for (let i = 2; i <= num; i++) {
    let target = 0;
    let cur = i;
    while (cur > 9) {
      target += cur % 10;
      cur = Math.floor(cur / 10);
    }
    target += cur;
    if(target & 1){
      // 前面加!无效,奇怪!!
      // console.log(i, "target:", target, cur);
      // ans++;
    }else{
      console.log(i, "target:", target, cur);
      ans++;
    }
    // if(target % 2===0){
    //   ans++;
    // }
  }
  return ans;
};

let num = 30;

console.log(countEven(num));