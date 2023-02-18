// 给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。



// 示例 1:

// 输入: nums = [2,2,3,4]
// 输出: 3
// 解释:有效的组合是: 
// 2,3,4 (使用第一个 2)
// 2,3,4 (使用第二个 2)
// 2,2,3
// 示例 2:

// 输入: nums = [4,2,3,4]
// 输出: 4


// 提示:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 1000


/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let ans = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let sum = nums[i] + nums[j];
      // console.log("sum:", sum, nums[i], nums[j]);
      
      // 从j+1 到 nums.length - 1, 数小于和即可满足条件
      // 单调性, 判断临界值位置, 统计个数
      let left = j + 1;
      let right = nums.length - 1;
      // console.log("初始值:", left, right);
      let k = j;
      while (left <= right) {
        let mid = Math.floor((left + right)/2);
        if(nums[mid] >= sum){
          right = mid - 1;
        }else{
          left = mid + 1;
          k = mid;
        }
      }
      console.log(left, right, k);
      // ans += k - j;
      ans += left - j - 1;
    }
  }
  return ans;
};


let nums = [2, 2, 3, 4];

console.log(triangleNumber(nums));


// 官方
var triangleNumber2 = function(nums) {
  const n = nums.length;
   nums.sort((a, b) => a - b);
   let ans = 0;
   for (let i = 0; i < n; ++i) {
       for (let j = i + 1; j < n; ++j) {
           let left = j + 1, right = n - 1, k = j;
           while (left <= right) {
               const mid = Math.floor((left + right) / 2);
               if (nums[mid] < nums[i] + nums[j]) {
                   k = mid;
                   left = mid + 1;
               } else {
                   right = mid - 1;
               }
           }
           ans += k - j;
       }
   }
   return ans;
};