


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
  if(nums.length === 1){
    return 0;
  }
  let ans = 0;
  
  while (true) {
    nums.sort((a,b)=>a-b);
    let left = 0;
    let right = nums.length - 1;
    mid = (left + right) >> 1;

    while (mid > left) {
      if(nums[mid] * 2 >= nums[right]){
        nums.splice(right, 1);
        nums.splice(mid, 1);
        right--;
        mid = (left + right) >> 1;
        ans++;
        console.log(left, mid , right);
      }else{
        mid--;
      }
    }
    return ans;
    
  }
};

// 输入：nums = [3,5,2,4]
// 输出：2
// 解释：第一次操作中，选择 i = 2 和 j = 1 ，操作可以执行的原因是 2 * nums[2] <= nums[1] ，标记下标 2 和 1 。
// 没有其他更多可执行的操作，所以答案为 2 。

let nums = [3,5,2,4];

// 2 3 4 5   3 5 


console.log(maxNumOfMarkedIndices(nums));


// 1 2 3 4

// 1  3
// 2  4

// 2  4  6  8 10 12

//  2 8   2 10
//  4 8   4 10
//  6 12



// 2  4  5  6  8  9 10 11

//  #    6 10
//  # 5 11
//  4  9
//  2  8


// console.log(5 >> 1);
// 2