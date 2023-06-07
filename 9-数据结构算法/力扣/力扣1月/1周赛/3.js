


  /**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
  let ans = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if(s[i]*1 > k){
      return -1;
    }
    if(stack.length === 0){
      stack.push(s[i]);
    }else{
      let str = stack.join("") + s[i];
      if(str * 1 <= k){
        stack.push(s[i]);
      }else{
        stack = [s[i]];
        ans++;
      }
    }
  }
  if(stack.length){
    ans++;
  }
  return ans;
};

let s = "165462", k = 60;

console.log(minimumPartition(s, k)); 