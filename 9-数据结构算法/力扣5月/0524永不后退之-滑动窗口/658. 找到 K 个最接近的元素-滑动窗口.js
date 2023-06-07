

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
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (i < k) {
      // 创建窗口
      res.push(arr[i])
    } else {
      // 形成了窗口之后, 优化当前窗口, 得到最佳的状态
      // 即观察这个窗口是否还能向右侧移动, 不能移动了, 说明这已经是最优的窗口了
      let l = Math.abs(res[0] - x);
      let r = Math.abs(res[i] - x);
      if(r === l)continue;
      if(r < l){
        res.shift()
        res.push(arr[i])
      }else{
        return res;
      }
    }
  }
  return res;
};

// let arr = [1,2,3,4,5], k = 4, x = 3;
//[1,2,3,4]

let arr = [1, 1, 1, 10, 10, 10], k = 1, x = 9;
// [10]
// [1] 错误

console.log(findClosestElements(arr, k, x));












var findClosestElements2 = function (arr, k, x) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
      if (i < k) {
          // 创建窗口
          res.push(arr[i])
      } else {
          // 入窗的 arr[i] 和 res[0] 作对比
          if(Math.abs(arr[i] - x) === Math.abs(res[0] - x)) continue
          if (Math.abs(arr[i] - x) < Math.abs(res[0] - x)) {
              res.shift()
              res.push(arr[i])
          }else{
              return res
          }
      }
  }
  console.log(res)
  return res
};


// 作者：剑圣
// 链接：https://leetcode.cn/problems/find-k-closest-elements/solutions/1977606/jsshua-ti-mian-shi-ti-jie-by-distracted-g6yfc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。