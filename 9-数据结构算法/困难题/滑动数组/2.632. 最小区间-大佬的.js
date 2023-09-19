// 你有 k 个 非递减排列 的整数列表。找到一个 最小 区间，使得 k 个列表中的每个列表至少有一个数包含在其中。

// 我们定义如果 b-a < d-c 或者在 b-a == d-c 时 a < c，则区间 [a,b] 比 [c,d] 小。



// 示例 1：

// 输入：nums = [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
// 输出：[20,24]
// 解释： 
// 列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。
// 列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。
// 列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。
// 示例 2：

// 输入：nums = [[1,2,3],[1,2,3],[1,2,3]]
// 输出：[1,1]


// 提示：

// nums.length == k
// 1 <= k <= 3500
// 1 <= nums[i].length <= 50
// -105 <= nums[i][j] <= 105
// nums[i] 按非递减顺序排列


/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  let newNums = [], missType = nums.length
  let left = right = 0
  let map = {}, minStart = 0, minLen = Infinity
  for (let i = 0; i < nums.length; i++) {
    map[i] = 1;
    for (let j = 0; j < nums[i].length; j++) {
      newNums.push({
        num: nums[i][j],
        type: i
      })
    }
  }
  newNums.sort((a, b) => a.num - b.num)
  while (right < newNums.length) {
    let numObj = newNums[right]
    if (map[numObj.type] !== undefined) map[numObj.type]--
    if (map[numObj.type] == 0) missType--
    while (missType == 0) {
      if (numObj.num - newNums[left].num < minLen) {
        minLen = numObj.num - newNums[left].num
        minStart = newNums[left].num
      }
      if (map[newNums[left].type] !== undefined) map[newNums[left].type]++
      if (map[newNums[left].type] > 0) missType++
      left++
    }
    right++
  }
  console.log(minStart, minLen)
  return [minStart, minStart + minLen];
};


// let nums = [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]];
// [20, 24]


let nums = [[1]];

console.log(smallestRange(nums));



// [
//   [ 0, 1 ],  [ 4, 0 ],
//   [ 5, 2 ],  [ 9, 1 ],
//   [ 10, 0 ], [ 12, 1 ],
//   [ 15, 0 ], [ 18, 2 ],
//   [ 20, 1 ], [ 22, 2 ],
//   [ 24, 0 ], [ 26, 0 ],
//   [ 30, 2 ]
// ]