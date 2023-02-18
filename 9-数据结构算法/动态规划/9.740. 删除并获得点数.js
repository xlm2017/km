// 给你一个整数数组 nums ，你可以对它进行一些操作。

// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。



// 示例 1：

// 输入：nums = [3,4,2]
// 输出：6
// 解释：
// 删除 4 获得 4 个点数，因此 3 也被删除。
// 之后，删除 2 获得 2 个点数。总共获得 6 个点数。
// 示例 2：

// 输入：nums = [2,2,3,3,3,4]
// 输出：9
// 解释：
// 删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
// 之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
// 总共获得 9 个点数。


// 提示：

// 1 <= nums.length <= 2 * 104
// 1 <= nums[i] <= 104


/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  // 处理数组, 转化成map
  // let map = new Map();
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // if(map.has(element)){

    // }
    if (obj[element]) {
      obj[element] += 1
    } else {
      obj[element] = 1
    }
  }
  console.log("obj:", obj);
  let arr = Object.keys(obj).sort((a, b) => a - b);
  console.log("arr:", arr);
  let dp = new Array(arr.length);
  for (let j = 0; j < arr.length; j++) {
    const ele = arr[j];
    if (j === 0) {
      dp[0] = ele * obj[ele];
    }
    if (j === 1) {
      if (Math.abs(ele - arr[j - 1]) > 1) {
        dp[j] = dp[0] + ele * obj[ele];
      } else {
        dp[j] = Math.max(dp[0], ele * obj[ele]);
      }
      continue;
    }
    if (j > 1) {
      if (Math.abs(ele - arr[j - 1]) > 1) {
        dp[j] = dp[j - 1] + ele * obj[ele];
      } else {
        // dp[j] = Math.max(dp[j - 1], ele * obj[ele]) + dp[j - 2];
        // dp[j] = Math.max(dp[j - 1], ele * obj[ele]);
        // if (ele * obj[ele] < obj[arr[j - 1]] * arr[j - 1]) {
        //   dp[j] = dp[j - 1];
        // } else {
        //   dp[j] = dp[j - 2] + ele * obj[ele];
        // }

        // dp[j] = Math.max(dp[j - 1], ele * obj[ele]) + dp[j - 2];

        if ((arr[j - 1] - arr[j - 2]) == 1) {
          dp[j] = Math.max(dp[j - 1], ele * obj[ele] + dp[j - 2]);
        } else if (ele * obj[ele] < obj[arr[j - 1]] * arr[j - 1]) {
          dp[j] = dp[j - 1];
        } else {
          dp[j] = dp[j - 2] + ele * obj[ele];
        }

        if (j == 2) {
          console.log(arr[j - 1] - arr[j - 2], ele * obj[ele], ele * obj[ele] + dp[j - 2]);
          console.log('调试:', dp[0], dp[j - 1], dp[j]);
        }
      }
      continue;
    }
  }
  console.log("dp:", dp);
  return dp[dp.length - 1];
};

let arr1 = [2, 2, 3, 3, 3, 4];  // 9
// let arr1 = [3, 4, 2];       // 6
// console.log("最大值:", deleteAndEarn(arr1));



// let arr2 = [8, 10, 4, 9, 1, 3, 5, 9, 4, 10];      // 37
let arr2 = [8, 3, 4, 7, 6, 6, 9, 2, 5, 8, 2, 4, 9, 5, 9, 1, 5, 7, 1, 4];      // 61
console.log("最大值:", deleteAndEarn(arr2));