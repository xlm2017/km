// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。



// 示例 1：

// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]


// 提示：

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [[]];

  let stack = [];
  let set = new Set();

  function backtracking (start) {
    // if(stack.length === nums.length){
    //   return;
    // }

    // set.add([...stack].join(""));
    // if(!set.has(stack.join(""))){
    // set.add([...stack].join(""));
    // if (!set.has([...stack].join(""))) {
    //   res.push([...stack]);
    // }

    for (let i = start; i < nums.length; i++) {

      // if(i > 0 && nums[i] === nums[i-1]){
      //   continue;
      // }
      // [ [], [ 1 ], [ 1, 2 ], [ 2 ] ]

      stack.push(nums[i]);

      // console.log("str:", [...stack].join(""));

      if (!set.has([...stack].join(""))) {
        res.push([...stack]);
      }
      set.add([...stack].join(""));


      // res.push([...stack]);


      backtracking(i + 1);
      stack.pop();
    }

  }
  backtracking(0);

  return res;
};

// let nums = [1, 2, 2];
// [[],[1],[1,2],[1,2,2],[2],[2,2]]



let nums = [4,4,4,1,4];
//       [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]

// 错误: [[],[4],[4,4],[4,4,4],[4,4,4,1],[4,4,4,1,4],[4,4,4,4],[4,4,1],[4,4,1,4],[4,1],[4,1,4],[1],[1,4]]

console.log(subsetsWithDup(nums));