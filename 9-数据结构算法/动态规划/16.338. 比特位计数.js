// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。

 

// 示例 1：

// 输入：n = 2
// 输出：[0,1,1]
// 解释：
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 示例 2：

// 输入：n = 5
// 输出：[0,1,1,2,1,2]
// 解释：
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 

// 提示：

// 0 <= n <= 105
 

// 进阶：

// 很容易就能实现时间复杂度为 O(n log n) 的解决方案，你可以在线性时间复杂度 O(n) 内用一趟扫描解决此问题吗？


/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  
  let dp = new Array(n+1);
  for(let i = 0; i <= n; i++){
    
    // 数字转二进制字符串
    let val = i.toString(2);
    console.log(val, typeof val);

    let sum = 0;
    for (let j = 0; j < val.length; j++) {
      if(val[j] === '1')sum++;     
    }
    dp[i] = sum;
  }
  return dp;
};

let n1 = 10;
// [ 0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2 ]
console.log(countBits(n1));