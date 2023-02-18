// 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

// 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

// 题目数据保证答案符合 32 位带符号整数范围。



// 示例 1：

// 输入：s = "rabbbit", t = "rabbit"
// 输出：3
// 解释：
// 如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
// rabbbit
// rabbbit
// rabbbit
// 示例 2：

// 输入：s = "babgbag", t = "bag"
// 输出：5
// 解释：
// 如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag


// 提示：

// 0 <= s.length, t.length <= 1000
// s 和 t 由英文字母组成




// 问题理解: 数一数 s 的子序列中有多少个 t.

// 将原问题分解成更小的子问题, 然后通过子问题的答案推导出原问题的答案.

// 定义一个dp函数

// 定义：s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j)
// int dp(String s, int i, String t, int j)

// 题目让你求出现次数，那你就定义函数返回值为出现次数就可以。

// 题目想要的结果是 dp(s, 0, t, 0)，base case 也很容易写出来，解法框架如下：



// int numDistinct(String s, String t) {
//   return dp(s, 0, t, 0);
// }

// // 定义：s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j)
// int dp(String s, int i, String t, int j) {
//   // base case 1
//   if (j == t.length()) {
//       // t 已经全部匹配完成
//       return 1;
//   }
//   // base case 2
//   if (s.length() - i < t.length() - j) {
//       // s[i..] 比 t[j..] 还短，必然没有匹配的子序列
//       return 0;
//   }

//   // ...
// }



// 站在 t 的视角 进行穷举


// 我们的原问题是求 s[0..] 的所有子序列中 t[0..] 出现的次数，那么可以先看 t[0] 在 s 中的什么位置，
// 假设 s[2], s[6] 是字符 t[0]，那么原问题转化成了在 s[2..] 和 s[6..] 的所有子序列中计算 t[1..] 出现的次数。

// 写成比较偏数学的形式就是状态转移方程：
// -- 定义：s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j)
// dp(s, i, t, j) = SUM( dp(s, k + 1, t, j + 1) where k >= i and s[k] == t[j] )


// 定义：s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j)
// int dp(String s, int i, String t, int j) {
//   int res = 0;
//   // 在 s[i..] 中寻找 k，使得 s[k] == t[j]
//   for (int k = i; k < s.length(); k++) {
//       if (s.charAt(k) == t.charAt(j)) {
//           // 累加结果
//           res += dp(s, k + 1, t, j + 1);
//       }
//   }
//   return res;
// }


// 加上备忘录消除重叠子问题，最终解法如下
// 备忘录
// int[][] memo;

// int numDistinct(String s, String t) {
//     // 初始化备忘录为特殊值 -1
//     memo = new int[s.length()][t.length()];
//     for (int[] row : memo) {
//         Arrays.fill(row, -1);
//     }
//     return dp(s, 0, t, 0);
// }

// // 定义：s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j)
// int dp(String s, int i, String t, int j) {
//     // base case 1
//     if (j == t.length()) {
//         return 1;
//     }
//     // base case 2
//     if (s.length() - i < t.length() - j) {
//         return 0;
//     }
//     // 查备忘录防止冗余计算
//     if (memo[i][j] != -1) {
//         return memo[i][j];
//     }
//     int res = 0;
//     // 执行状态转移方程
//     // 在 s[i..] 中寻找 k，使得 s[k] == t[j]
//     for (int k = i; k < s.length(); k++) {
//         if (s.charAt(k) == t.charAt(j)) {
//             // 累加结果
//             res += dp(s, k + 1, t, j + 1);
//         }
//     }
//     // 存入备忘录
//     memo[i][j] = res;
//     return res;
// }


/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  // 初始化备忘录为特殊值-1
  let memo = new Array(s.length).fill().map(() => new Array(t.length).fill(-1));
  return dp(s, 0, t, 0, memo);
};

// 定义：s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j)
function dp (s, i, t, j, memo) {
  // base case 1
  if (j == t.length) {
    return 1;
  }
  // base case 2
  if (s.length - i < t.length - j) {
    return 0;
  }
  // 查备忘录防止冗余计算
  if (memo[i][j] != -1) {
    return memo[i][j];
  }

  let res = 0;

  // 执行状态转移方程
  // 在 s[i..] 中寻找 k，使得 s[k] == t[j]
  for (let k = i; k < s.length; k++) {
    if (s.charAt(k) == t.charAt(j)) {
      // 累加结果
      res += dp(s, k + 1, t, j + 1, memo);
    }
  }
  // 存入备忘录
  memo[i][j] = res;
  return res;
}


// 带备忘录的动态规划算法的时间复杂度 
// = 子问题的个数 x 函数本身的时间复杂度 
// = 「状态」的个数 x 函数本身的时间复杂度 
// = O(MN) * O(M)
// = O(N * M^2)

// 作者：labuladong
// 链接：https://leetcode.cn/problems/distinct-subsequences/solutions/2074624/dong-tai-gui-hua-wen-ti-de-liang-chong-q-izkj/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


let s = "babgbag", t = "bag";

console.log(numDistinct(s, t));