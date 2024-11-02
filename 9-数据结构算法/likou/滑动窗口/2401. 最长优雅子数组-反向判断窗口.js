// 给你一个由 正 整数组成的数组 nums 。

// 如果 nums 的子数组中位于 不同 位置的每对元素按位 与（AND）运算的结果等于 0 ，则称该子数组为 优雅 子数组。

// 返回 最长 的优雅子数组的长度。

// 子数组 是数组中的一个 连续 部分。

// 注意：长度为 1 的子数组始终视作优雅子数组。



// 示例 1：

// 输入：nums = [1,3,8,48,10]
// 输出：3
// 解释：最长的优雅子数组是 [3,8,48] 。子数组满足题目条件：
// - 3 AND 8 = 0
// - 3 AND 48 = 0
// - 8 AND 48 = 0
// 可以证明不存在更长的优雅子数组，所以返回 3 。
// 示例 2：

// 输入：nums = [3,1,5,11,13]
// 输出：1
// 解释：最长的优雅子数组长度为 1 ，任何长度为 1 的子数组都满足题目条件。


// 提示：

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 109


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let maxLen = 1;
    let l = 0, r = 1;
    // 求最大窗口
    while (r < nums.length) {
        let t = r - 1;
        while (t >= l && (nums[t] & nums[r]) === 0) {
            t--;
        }
        l = t + 1;
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    return maxLen;
};


// for循环反向， 更易懂
var longestNiceSubarray2 = function(nums) {
    let l = 0;
    let r = 1;
    let ans = 1;
    while (r < nums.length) {
        for (let i = r - 1; i >= l; i--) {
            if ((nums[r] & nums[i]) !== 0) {
                l = i + 1;
                break;
            }
        }
        ans = Math.max(ans, r - l + 1);
        r++; 
    }
    return ans;
};

let nums = [1, 3, 8, 48, 10];
// 3

// let nums = [338970160, 525086042, 19212931, 213753017, 321613307, 553272419, 190837185, 548628106, 793546945, 243936947];
// 1
// 10错误

let nums2 = [744437702, 379056602, 145555074, 392756761, 560864007, 934981918, 113312475,
    1090, 16384, 33, 217313281,
    117883195, 978927664
];
// 3


// console.log(longestNiceSubarray(nums));
console.log(longestNiceSubarray(nums2));



// console.log(3 & 8);
// console.log(3 & 3);

console.log('测试：', 1090 & 16384);
console.log('测试：', 1090 & 33);
console.log('测试：', 16384 & 33);
// console.log('测试：', 1090 & 217313281);
// console.log('测试：', 16384 & 217313281);
// console.log('测试：', 33 & 217313281);