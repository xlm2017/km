// 给你一个整数 n 。如果两个整数 x 和 y 满足下述条件，则认为二者形成一个质数对：

// 1 <= x <= y <= n
// x + y == n
// x 和 y 都是质数
// 请你以二维有序列表的形式返回符合题目要求的所有 [xi, yi] ，列表需要按 xi 的 非递减顺序 排序。如果不存在符合要求的质数对，则返回一个空数组。

// 注意：质数是大于 1 的自然数，并且只有两个因子，即它本身和 1 。

 

// 示例 1：

// 输入：n = 10
// 输出：[[3,7],[5,5]]
// 解释：在这个例子中，存在满足条件的两个质数对。 
// 这两个质数对分别是 [3,7] 和 [5,5]，按照题面描述中的方式排序后返回。
// 示例 2：

// 输入：n = 2
// 输出：[]
// 解释：可以证明不存在和为 2 的质数对，所以返回一个空数组。 
 

// 提示：

// 1 <= n <= 106

// 埃氏筛
// 埃氏筛法的基本思想 ：从2开始，将每个质数的倍数都标记成合数，以达到筛选素数的目的。


/**
 * @param {number} n
 * @return {number[][]}
 */
 var findPrimePairs = function(n) {
  let prime = new Array(n).fill(1);
  prime[0] = 0;
  prime[1] = 0;
  for (let i = 2; i * i <= n; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = 0;
      }
    }
  }
  const res = [];
  for (let i = 0; i <= n >> 1; i++) {
    let anthor = n - i;
    if (prime[i] && prime[anthor]) res.push([i, anthor]);
  }
  return res;
};

let n = 10
// 输出：[[3,7],[5,5]]


console.log(findPrimePairs(n));