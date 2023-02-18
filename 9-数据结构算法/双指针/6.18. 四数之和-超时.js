// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

 

// 示例 1：

// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// 示例 2：

// 输入：nums = [2,2,2,2,2], target = 8
// 输出：[[2,2,2,2]]
 

// 提示：

// 1 <= nums.length <= 200
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9


/**
* @param {number[]} nums
* @param {number} target
* @return {number[][]}
*/
var fourSum = function(nums, target) {
  let res = [];
  nums.sort((a,b)=>a-b);
  // console.log("原始数组:", nums);
  // [-2,-1,0,0,1,2]
  for (let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i] === nums[i - 1]){
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if(j > i + 1 && nums[j] === nums[j - 1]){
        continue;
      }
      // 固定了两个数
      let targets = target - (nums[i] + nums[j]);
      let left = j + 1;
      let right = nums.length - 1;
      
      while (left < right) {
        console.log();
        if(nums[left] + nums[right] === targets){
          // console.log('符合:', nums[i], nums[j], targets);
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (left > j + 1 && nums[left] == nums[left - 1]) left++;
         while (right < nums.length - 1 && nums[right] == nums[right + 1]) right--;
        }else if(nums[left] + nums[right] > targets){
          right--;
          // console.log("减小right", nums[right], left, right);
          while (right < nums.length - 1 && nums[right] == nums[right + 1]) right--;
        }else{
          left++;
          // console.log("增加left", nums[left], left, right);
          while (left > j + 1 && nums[left] == nums[left - 1]) left++;
        }
      }
    }
  }
  return res;
};


// let nums1 = [1,0,-1,0,-2,2];
// let nums1 = [1,0,-1,0,-2,2, 0];
// let target1 = 0;
// [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


let nums1 = [2,2,2,2];
let target1 = 8;



console.log(fourSum(nums1, target1));
