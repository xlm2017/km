// 给你一个数组 nums ，数组中只包含非负整数。定义 rev(x) 的值为将整数 x 各个数字位反转得到的结果。比方说 rev(123) = 321 ， rev(120) = 21 。我们称满足下面条件的下标对 (i, j) 是 好的 ：

// 0 <= i < j < nums.length
// nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
// 请你返回好下标对的数目。由于结果可能会很大，请将结果对 109 + 7 取余 后返回。

 

// 示例 1：

// 输入：nums = [42,11,1,97]
// 输出：2
// 解释：两个坐标对为：
//  - (0,3)：42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121 。
//  - (1,2)：11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12 。
// 示例 2：

// 输入：nums = [13,10,35,24,76]
// 输出：4
 

// 提示：

// 1 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^9


/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
  // nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])

  // 等式转换, 交换律, 两数之和的翻版
  // nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])

  let mod = 10 ** 9 + 7;
  let map = new Map();
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    // map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);   
    let rev = (nums[i] + '').split("").reverse().join("") * 1;
    map.set(nums[i] - rev, map.has(nums[i] - rev) ? map.get(nums[i] - rev) + 1 : 1);   
  }
  // console.log(map);
  map.forEach((val,key) => {
    console.log(val,key);
    ans += val * (val-1) / 2;
  })
  return ans % mod;


  // 官方解
  const MOD = 1000000007;
  let res = 0;
  const h = new Map();
  for (const i of nums) {
    let temp = i, j = 0;
    while (temp > 0) {
        j = j * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    res = (res + (h.get(i - j) || 0)) % MOD;
    h.set(i - j, (h.get(i - j) || 0) + 1);
  }
  return res;
};

// let nums = [42,11,1,97];

let nums = [22,34,42,11,2,42,11,1,97];
// 13


console.log(countNicePairs(nums));


// 超出时间限制  66 / 84 个通过的测试用例