/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {


  nums.sort((a,b)=>a-b);

  let ans = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    // 二分前提
    if(nums[i] + nums[nums.length - 1] < lower || nums[i] + nums[i + 1] > upper){
      console.log("结束:", i);
      continue;
    }


    // while (left <= right) {
    while (left < right) {
      let mid = (left + right) >> 1;
      console.log("left:", left, right, mid, nums[i] + nums[mid], lower);
      // 求出下届
      if(nums[i] + nums[mid] >= lower){
        right = mid;
      }else{
        left = mid + 1;
      }
    }

    while (right > i + 1 && nums[right] === nums[right - 1]) {
      right--;
    }  
    console.log("求出下边界:", right);  

    // continue;

    let left2 = i + 1;
    let right2 = nums.length - 1;

    let up = 0;

    while (left2 <= right2) {
      let mid = (left2 + right2) >> 1;
      console.log("22222:", left2, right2, mid, nums[i], nums[mid], i);
      // 求出上届
      if(nums[i] + nums[mid] <= upper){
        left2 = mid + 1;
        up = mid;
      }else{
        right2 = mid - 1;
      }
    }

    while (up < nums.length - 1 && nums[up] === nums[up + 1]) {
      // console.log("1111");
      up++;
    }  
    // console.log("求出上边界:", up);  
    console.log("==========================");  

   
    console.log("上下边界:", right, up, i);
    ans += Math.max(up - right + 1, 0);
  }
 
  return ans;
};

// let nums = [0,1,7,4,4,5], lower = 3, upper = 6;
// 6
// 0 1 4 4 5 7
// 

// let nums = [1,7,9,2,5], lower = 11, upper = 11;
// 1

let nums = [0,1,7,4,4,5], lower = 3, upper = 6;
// 6

console.log(countFairPairs(nums, lower, upper));