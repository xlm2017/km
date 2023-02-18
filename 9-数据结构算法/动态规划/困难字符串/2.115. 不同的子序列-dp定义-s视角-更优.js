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


// 站在 s 的视角 穷举

// 我们的原问题是计算 s[0..] 的所有子序列中 t[0..] 出现的次数，可以先看看 s[0] 是否能匹配 t[0]，
// 如果不匹配，那没得说，原问题就可以转化为计算 s[1..] 的所有子序列中 t[0..] 出现的次数；

// 但如果 s[0] 可以匹配 t[0]，那么又有两种情况，这两种情况是累加的关系：

// 1、让 s[0] 匹配 t[0]，那么原问题转化为在 s[1..] 的所有子序列中计算 t[1..] 出现的次数。

// 2、不让 s[0] 匹配 t[0]，那么原问题转化为在 s[1..] 的所有子序列中计算 t[0..] 出现的次数。

// 为啥明明 s[0] 可以匹配 t[0]，还不让它俩匹配呢？主要是为了给 s[0] 之后的元素匹配的机会，比如 s = "aab", t = "ab"，就有两种匹配方式：a_b 和 _ab。

// 把以上思路写成状态转移方程：


// 定义：s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j)
// int dp(String s, int i, String t, int j) {
//   if (s[i] == t[j]) {
//       // 匹配，两种情况，累加关系
//       return dp(s, i + 1, t, j + 1) + dp(s, i + 1, t, j);
//   } else {
//       // 不匹配，在 s[i+1..] 的子序列中计算 t[j..] 的出现次数
//       return dp(s, i + 1, t, j);
//   }
// }


// 站在 s 的视角 进行穷举


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
//     if (s.charAt(i) == t.charAt(j)) {
//         // 匹配，两种情况，累加关系
//         res += dp(s, i + 1, t, j + 1) + dp(s, i + 1, t, j);
//     } else {
//         // 不匹配，在 s[i+1..] 的子序列中计算 t[j..] 的出现次数
//         res += dp(s, i + 1, t, j);
//     }
//     // 结果存入备忘录
//     memo[i][j] = res;
//     return res;
// }



/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  // 初始化备忘录为特殊值-1
  let memo = new Array(s.length).fill().map(()=>new Array(t.length).fill(-1));
  return dp(s, 0, t, 0, memo);
};

// 定义：s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j)
function dp(s, i, t, j, memo) {
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

  if(s[i] === t[j]){
    // 匹配，两种情况，累加关系
    res += dp(s, i + 1, t, j + 1, memo) + dp(s, i + 1, t, j, memo);
  }else{
    // 不匹配，在 s[i+1..] 的子序列中计算 t[j..] 的出现次数
    res += dp(s, i + 1, t, j, memo);
  }
  // 结果存入备忘录
  memo[i][j] = res;
  return res;
}



let s = "babgbag", t = "bag";

console.log(numDistinct(s, t));