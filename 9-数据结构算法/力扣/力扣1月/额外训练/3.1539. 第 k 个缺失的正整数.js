// 给你一个 严格升序排列 的正整数数组 arr 和一个整数 k 。

// 请你找到这个数组里第 k 个缺失的正整数。



// 示例 1：

// 输入：arr = [2,3,4,7,11], k = 5
// 输出：9
// 解释：缺失的正整数包括 [1,5,6,8,9,10,12,13,...] 。第 5 个缺失的正整数为 9 。
// 示例 2：

// 输入：arr = [1,2,3,4], k = 2
// 输出：6
// 解释：缺失的正整数包括 [5,6,7,...] 。第 2 个缺失的正整数为 6 。


// 提示：

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000
// 1 <= k <= 1000
// 对于所有 1 <= i < j <= arr.length 的 i 和 j 满足 arr[i] < arr[j] 




/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {

  // 缺失的正整数一定 >= k
  // 数组中每出现一个 <= k 的数字, 意味着少了一个缺失的数字, 此时k+1
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      k++
    }
  }

  return k

};

let arr = [2, 3, 4, 7, 11], k = 5;
// 9

console.log(findKthPositive(arr, k));


