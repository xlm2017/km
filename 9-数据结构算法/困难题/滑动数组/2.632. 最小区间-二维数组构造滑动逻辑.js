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


var smallestRange = function(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      arr.push([nums[i][j], i])      
    }    
  }
  arr.sort((a, b)=>{
    return a[0] - b[0]
  })
  console.log(arr);

  let map = new Map();
  let len = arr.length;
  let resL = arr[0][0];
  let resR = arr[len - 1][0];
  let k = nums.length;
  let l = 0;
  for (let r = 0; r < arr.length; r++) {
    let groupId = arr[r][1];
    map.set(groupId, (map.get(groupId) || 0) + 1);
    // 包含全部的组
    if(map.size === k){
      if(arr[r][0] - arr[l][0] < resR - resL){
        resL = arr[l][0];
        resR = arr[r][0];
        // console.log("结果:", map, resL, resR);
      }
      // 左侧收缩, 去掉一组
      while (l < r && map.size === k) {
        if(map.get(arr[l][1]) > 1){
          map.set(arr[l][1], map.get(arr[l][1]) - 1);
        }else{
          map.delete(arr[l][1])
        }
        l++
      }
    }
    // 去掉一组后, 保留最小的区间
    while (l < r && map.get(arr[l][1]) > 1) {
      map.set(arr[l][1], map.get(arr[l][1]) - 1);
      l++
    }
  }
  return [resL, resR];
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