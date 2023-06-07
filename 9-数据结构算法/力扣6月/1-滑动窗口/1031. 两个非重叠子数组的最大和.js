// 给你一个整数数组 nums 和两个整数 firstLen 和 secondLen，请你找出并返回两个非重叠 子数组 中元素的最大和，长度分别为 firstLen 和 secondLen 。

// 长度为 firstLen 的子数组可以出现在长为 secondLen 的子数组之前或之后，但二者必须是不重叠的。

// 子数组是数组的一个 连续 部分。



// 示例 1：

// 输入：nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
// 输出：20
// 解释：子数组的一种选择中，[9] 长度为 1，[6,5] 长度为 2。
// 示例 2：

// 输入：nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
// 输出：29
// 解释：子数组的一种选择中，[3,8,1] 长度为 3，[8,9] 长度为 2。
// 示例 3：

// 输入：nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
// 输出：31
// 解释：子数组的一种选择中，[5,6,0,9] 长度为 4，[0,3,8] 长度为 3。


// 提示：

// 1 <= firstLen, secondLen <= 1000
// 2 <= firstLen + secondLen <= 1000
// firstLen + secondLen <= nums.length <= 1000
// 0 <= nums[i] <= 1000



var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  let preSum = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    preSum.push(sum);
  }
  //  console.log("pre:", preSum);
  let max = 0;
  for (let i = firstLen - 1; i < nums.length; i++) {
    let sum1 = 0;
    if (i === firstLen - 1) {
      //  console.log("1初始化", i);
      sum1 = preSum[firstLen - 1];
    } else {
      sum1 = preSum[i] - preSum[i - firstLen];
    }

    //  console.log("1111:", sum1, i);


    // 右侧部分，小心下标越界
    for (let j = i + 1; j + secondLen - 1 < nums.length; j++) {
      let sum2 = preSum[j + secondLen - 1] - preSum[j - 1];
      max = Math.max(max, sum1 + sum2);
      //  console.log("sum:", sum1, sum2);
    }

    console.log("i:", i, sum1);
    // 左侧的部分
    for (let j = 0; j + secondLen - 1 <= i - firstLen; j++) {
      let sum2 = 0;
      if (j === 0) {
        sum2 = preSum[secondLen - 1]
      } else {
        sum2 = preSum[j + secondLen - 1] - preSum[j - 1];
      }
      console.log("sum2:", sum1, sum2, 'j:', j);
      max = Math.max(max, sum1 + sum2);
    }
  }
  return max;
};




let nums = [0, 6, 5, 2, 2, 5, 1, 9, 4], firstLen = 1, secondLen = 2;
// 20


let nums2 = [2, 1, 8, 10, 12, 9, 5, 0, 3], firstLen2 = 2, secondLen2 = 2
// [10,12] [9,5]    局部最优, 但是全局不是最优
// [8,10]  [12,9]   局部不是最优, 但是全局最优


console.log(maxSumTwoNoOverlap(nums, firstLen, secondLen));