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
  let leftSection = [];
  let rightSection = [];
  for (let i = 0; i < nums.length; i++) {
    let len = nums[i].length;
    leftSection.push(nums[i][0])
    rightSection.push(nums[i][len - 1])
  }
  leftSection.sort((a,b)=>a-b);
  rightSection.sort((a,b)=>a-b);
  // 最小值与最大值分别滑动窗口, 看哪个更小
  // [0-5]  [20-30]
  //最小值集合,  0-5- 更大     0-5  5-6(20)(最大值中的最小值) 都有可能
  //最大值集合,  30-20- 更小   (最小值中的最大值)18-20 20-24   都有可能
  // 最小区间
  let minDot = leftSection[leftSection.length - 1];
  let maxDot = rightSection[0];


  // 数组转map, 方便查询
  let mapArr = [];
  for (let i = 0; i < nums.length; i++) {
    let itemArr = nums[i];
    let map = new Map();
    for (let j = 0; j < itemArr.length; j++) {
      const element = itemArr[j];
      map.set(element, (map.get(element) || 0) + 1);
    }
    mapArr.push(map);
  }

  // 区间计数方式 ??? 

  // 以minDot为右端点, 向左
  while (minDot > leftSection[0]) {
    for (let i = 0; i < mapArr.length; i++) {
      let itemMap = mapArr[i];
      if(itemMap.has(minDot)){
        // 找到区间的左端点了
      }
      minDot--
    }
  }

  // 以minDot为左端点, 向右

  // 如何证明一个区间在每一个数组中都存在一个数呢 ???
  // 
};



let nums = [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]];
// [20, 24]

console.log(smallestRange(nums));