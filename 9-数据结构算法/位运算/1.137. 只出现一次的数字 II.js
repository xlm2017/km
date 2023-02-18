// 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

// 你必须设计并实现线性时间复杂度的算法且不使用额外空间来解决此问题。



// 示例 1：

// 输入：nums = [2,2,3,2]
// 输出：3
// 示例 2：

// 输入：nums = [0,1,0,1,0,1,99]
// 输出：99


// 提示：

// 1 <= nums.length <= 3 * 10^4
// -2^31 <= nums[i] <= 23^1 - 1
// nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 由于数组中的元素都在 int\texttt{int}int（即 323232 位整数）范围内，
  // 因此我们可以依次计算答案的每一个二进制位是 0 还是 1。
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let total = 0;
    for (const num of nums) {
      // 每个数转换为二进制后, 在第 i 位, 统计 值为1的数的总数
      total += num >> i & 1;
    }
    if (total % 3 != 0) {
      // 当前这个位置, 有个数不能达成3个
      ans |= (1 << i);
      console.log("ans:", ans);
    }
  }
  return ans;
};

//   0011
//   0011
//   0011
//   0101

//    1 1
//    

let nums = [3, 3, 3, 5];

console.log(singleNumber(nums));

