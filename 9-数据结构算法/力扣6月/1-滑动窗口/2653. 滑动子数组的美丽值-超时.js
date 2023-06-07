// 给你一个长度为 n 的整数数组 nums ，请你求出每个长度为 k 的子数组的 美丽值 。

// 一个子数组的 美丽值 定义为：如果子数组中第 x 小整数 是 负数 ，那么美丽值为第 x 小的数，否则美丽值为 0 。

// 请你返回一个包含 n - k + 1 个整数的数组，依次 表示数组中从第一个下标开始，每个长度为 k 的子数组的 美丽值 。

// 子数组指的是数组中一段连续 非空 的元素序列。

 

// 示例 1：

// 输入：nums = [1,-1,-3,-2,3], k = 3, x = 2
// 输出：[-1,-2,-2]
// 解释：总共有 3 个 k = 3 的子数组。
// 第一个子数组是 [1, -1, -3] ，第二小的数是负数 -1 。
// 第二个子数组是 [-1, -3, -2] ，第二小的数是负数 -2 。
// 第三个子数组是 [-3, -2, 3] ，第二小的数是负数 -2 。
// 示例 2：

// 输入：nums = [-1,-2,-3,-4,-5], k = 2, x = 2
// 输出：[-1,-2,-3,-4]
// 解释：总共有 4 个 k = 2 的子数组。
// [-1, -2] 中第二小的数是负数 -1 。
// [-2, -3] 中第二小的数是负数 -2 。
// [-3, -4] 中第二小的数是负数 -3 。
// [-4, -5] 中第二小的数是负数 -4 。
// 示例 3：

// 输入：nums = [-3,1,2,-3,0,-3], k = 2, x = 1
// 输出：[-3,0,-3,-3,-3]
// 解释：总共有 5 个 k = 2 的子数组。
// [-3, 1] 中最小的数是负数 -3 。
// [1, 2] 中最小的数不是负数，所以美丽值为 0 。
// [2, -3] 中最小的数是负数 -3 。
// [-3, 0] 中最小的数是负数 -3 。
// [0, -3] 中最小的数是负数 -3 。
 

// 提示：

// n == nums.length 
// 1 <= n <= 105
// 1 <= k <= n
// 1 <= x <= k 
// -50 <= nums[i] <= 50 



var getSubarrayBeauty = function(nums, k, x) {
  let res = [];
  // -50 <= nums[i] <= 50  值域
  // 对小于0的数, 计数器对象
  let cnts = [];
  // 存放 0-50的数
  let bucket = [];
  // 滑窗的左边界
  let r = 0;
  let l = 0;

  let violent = [];
  for (; r < nums.length; r++) {
    if(r - l < k){
      violent.push(nums[r])
      if(nums[r] >= 0){
        // bucket.push(1)
      }else{
        cnts[nums[r] + 50] = (cnts[nums[r] + 50] || 0) + 1
      }
    }else{

      if(nums[l] >= 0){
        // bucket.shift()
      }else{
        cnts[nums[l] + 50]--
      }

      if(nums[r] < 0){
        cnts[nums[r] + 50] = (cnts[nums[r] + 50] || 0) + 1
      }


      violent.shift()
      violent.push(nums[r])
      l++
    }

    if(violent.length === k){
      console.log(r, violent, cnts) 
      let index = 0;
      for (let i = 0; i < cnts.length; i++) {
        index += (cnts[i] || 0);
        if(index >= x){
          res.push(i - 50)
          break;
        }            
      }
      if(index < x){
        res.push(0)
      }
    }
  }
  return res;
};



let nums = [1,-1,-3,-2,3], k = 3, x = 2;

console.log(getSubarrayBeauty(nums, k, x));

console.log("==============================");


let nums2 = [-1,-2,-3,-4,-5], k2 = 2, x2 = 2;
// [-1,-2,-3,-4]

console.log(getSubarrayBeauty(nums2, k2, x2));
