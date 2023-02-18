
// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。



// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]


// 提示：

// 1 <= nums.length <= 105
// k 的取值范围是 [1, 数组中不相同的元素的个数]
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的


// 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

  let map = new Map()
  for (let i of nums) {
    if (map.has(i)) map.set(i, map.get(i) + 1)
    else map.set(i, 1)
  }
  let entries = Array.from(map.entries())

  function heapify (arr, i) {
    let left = 2 * i + 1, right = 2 * i + 2
    let largest = i
    if (left < arr.length && arr[left][1] > arr[largest][1]) largest = left
    if (right < arr.length && arr[right][1] > arr[largest][1]) largest = right
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]
      heapify(arr, largest)
    }
  }

  for (let i = Math.floor(entries.length / 2); i >= 0; i--) {
    heapify(entries, i)
  }

  let res = []
  for (let i = 0; i < k; i++) {
    [entries[0], entries[entries.length - 1]] = [entries[entries.length - 1], entries[0]]
    res.push(entries.pop()[0])
    heapify(entries, 0)
  }
  return res

  // 作者：臭氧层子
  // 链接：https://leetcode.cn/problems/top-k-frequent-elements/solutions/831715/js-dui-pai-xu-by-mars-n-kd7v/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

};

let nums = [1, 1, 1, 2, 2, 3], k = 2;

console.log(topKFrequent(nums, k));