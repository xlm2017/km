// 给你一个整数数组 arr。你可以从中选出一个整数集合，并删除这些整数在数组中的每次出现。

// 返回 至少 能删除数组中的一半整数的整数集合的最小大小。

 

// 示例 1：

// 输入：arr = [3,3,3,3,5,5,5,2,2,7]
// 输出：2
// 解释：选择 {3,7} 使得结果数组为 [5,5,5,2,2]、长度为 5（原数组长度的一半）。
// 大小为 2 的可行集合有 {3,5},{3,2},{5,2}。
// 选择 {2,7} 是不可行的，它的结果数组为 [3,3,3,3,5,5,5]，新数组长度大于原数组的二分之一。
// 示例 2：

// 输入：arr = [7,7,7,7,7,7]
// 输出：1
// 解释：我们只能选择集合 {7}，结果数组为空。
 

// 提示：

// 1 <= arr.length <= 10^5
// arr.length 为偶数
// 1 <= arr[i] <= 10^5


/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? ++obj[arr[i]] : 1;    
  }
  let res = Object.entries(obj);
  res.sort((a,b)=>{
    return b[1] - a[1];
  })
  // console.log("res:", res);
  let sum = 0;
  for (let i = 0; i < res.length; i++) {
    sum += res[i][1];
    if(sum >= arr.length / 2){
      return i + 1;
    }
  }
};

let arr = [3,3,3,3,5,5,5,2,2,7];
// 2

console.log(minSetSize(arr));