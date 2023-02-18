// 给定由一些正数（代表长度）组成的数组 nums ，返回 由其中三个长度组成的、面积不为零的三角形的最大周长 。如果不能形成任何面积不为零的三角形，返回 0。

 

// 示例 1：

// 输入：nums = [2,1,2]
// 输出：5
// 解释：你可以用三个边长组成一个三角形:1 2 2。
// 示例 2：

// 输入：nums = [1,2,1,10]
// 输出：0
// 解释：
// 你不能用边长 1,1,2 来组成三角形。
// 不能用边长 1,1,10 来构成三角形。
// 不能用边长 1、2 和 10 来构成三角形。
// 因为我们不能用任何三条边长来构成一个非零面积的三角形，所以我们返回 0。
 

// 提示：

// 3 <= nums.length <= 104
// 1 <= nums[i] <= 106


/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
  nums.sort((a,b)=>a-b);
  console.log("nums:", nums)
  for(let i = nums.length - 1; i >= 2; i--){
      for(let j = i - 1; j >= 1; j--){
        for(let z = j - 1; z >= 0; z--){
          if(nums[z] + nums[j] > nums[i]){
              return nums[z] + nums[j] + nums[i];
          }

        }
      }
  }
  return 0;
};

let nums = [2,1,2];

console.log(largestPerimeter(nums));



// 写了三重循环超时，因为我忽略了在贪心情况下的一个信息，
// 即如果最大边的前两条边都不能满足a+b>c，那么更往前的边值更小，也比不可能满足条件，就无需考虑了，只需要考虑连续的3条边即可