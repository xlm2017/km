

// 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

// 整数 a 比整数 b 更接近 x 需要满足：

// |a - x| < |b - x| 或者
// |a - x| == |b - x| 且 a < b


// 示例 1：

// 输入：arr = [1,2,3,4,5], k = 4, x = 3
// 输出：[1,2,3,4]
// 示例 2：

// 输入：arr = [1,2,3,4,5], k = 4, x = -1
// 输出：[1,2,3,4]


// 提示：

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr 按 升序 排列
// -104 <= arr[i], x <= 104


/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  arr.sort((a, b)=>{
    if(Math.abs(a - x) < Math.abs(b - x) || (Math.abs(a - x) === Math.abs(b - x) && a < b)){
      return 1;
    }
    return -1;
  })
  console.log("arr:", arr);
  return arr.slice(0, k);
};

// let arr = [1,2,3,4,5], k = 4, x = 3;
//[1,2,3,4]

let arr = [1,1,1,10,10,10], k = 1, x = 9;
// [10]
// [1] 错误

console.log(findClosestElements(arr, k, x));