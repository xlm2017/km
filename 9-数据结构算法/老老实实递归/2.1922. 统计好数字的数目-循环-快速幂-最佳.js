// 我们称一个数字字符串是 好数字 当它满足（下标从 0 开始）偶数 下标处的数字为 偶数 且 奇数 下标处的数字为 质数 （2，3，5 或 7）。

// 比方说，"2582" 是好数字，因为偶数下标处的数字（2 和 8）是偶数且奇数下标处的数字（5 和 2）为质数。但 "3245" 不是 好数字，因为 3 在偶数下标处但不是偶数。
// 给你一个整数 n ，请你返回长度为 n 且为好数字的数字字符串 总数 。由于答案可能会很大，请你将它对 109 + 7 取余后返回 。

// 一个 数字字符串 是每一位都由 0 到 9 组成的字符串，且可能包含前导 0 。



// 示例 1：

// 输入：n = 1
// 输出：5
// 解释：长度为 1 的好数字包括 "0"，"2"，"4"，"6"，"8" 。
// 示例 2：

// 输入：n = 4
// 输出：400
// 示例 3：

// 输入：n = 50
// 输出：564908303


// 提示：

// 1 <= n <= 1015



/**
 * @param {number} n
 * @return {number}
 */
const mod = 1000000007n;
/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  // 0 2 4 6 8 
  // 3 5 7
  // 5^((n+1)/2) * 4^(n/2)
  return pow(5n, BigInt(Math.floor((n + 1) / 2))) * pow(4n, BigInt(Math.floor(n / 2))) % mod;
};

function pow (x, n) {
  let ans = 1n;
  while (n > 0) {
    if (n & 1n) ans = ans * x % mod;
    x = x * x % mod;
    n >>= 1n;
  }
  return ans;
}

//  作者：我不吃饼干
//  链接：https://leetcode.cn/problems/count-good-numbers/solutions/858866/javascript-bigint-kuai-su-mi-by-idonteat-hp7j/
//  来源：力扣（LeetCode）
//  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


let n = 50
// 输出：564908303



console.log(countGoodNumbers(n));



// 算法思路
// 当n为偶数时， a^{n} = （a^{2}）\frac{n}{2}
// 当n为奇数时，让n - 1 变成偶数，加上 a ，再用偶数方法算 



console.log("5的25次方:", Math.pow(5, 25), Math.pow(5, 25) % mod);
console.log("5的25次方:", quickPow(5, 25), QuickRow(5, 25));
console.log("4-5的25次方:", Math.pow(5, 25) % mod + Math.pow(4, 25) % mod);




