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


var numDistinct = function (s, t) {
  const ns = s.length, nt = t.length;

  if (ns < nt) {
    return 0;
  }
  const dp = new Array(ns + 1).fill(0).map(() => new Array(nt + 1).fill(0));

  //  s[i] 表示 从下标 0 - i 的子字符串
  //  t[j] 表示 从下标 0 - j 的子字符串
  //  dp[i][j] 表示在 s[i]的子序列中 t[j]出现的个数。

  // 初始化
  // for (let i = 0; i <= m; i++) {
  //   dp[i][n] = 1;
  // }


  // dp[0][j]表示s_0中t_j的个数。s_0是空字符串，只有当j=0时，才有dp[0][j] = 1，
  // 表示s子空串中有一个t子空串，否则dp[0][j] = 0，因为一个空串不可能包含一个非空串。
  for(let i = 0; i <= ns; i++){
    dp[i][0] = 1; 
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      // if(s[i-1] === t[j-1]){
      //   dp[i][j] = dp[i-1][j];
      // }else{
      //   dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
      // } 

      dp[i][j] = dp[i - 1][j] + (s[i - 1] == t[j - 1] ? dp[i - 1][j - 1] : 0);

    }    
  }
  // console.log("dp:", dp);
  return dp[ns][nt];
};




let s = "babgbag", t = "bag";
// 5

console.log(numDistinct(s, t));