// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

 

// 示例 1：

// 输入：s = "bbbab"
// 输出：4
// 解释：一个可能的最长回文子序列为 "bbbb" 。
// 示例 2：

// 输入：s = "cbbd"
// 输出：2
// 解释：一个可能的最长回文子序列为 "bb" 。
 

// 提示：

// 1 <= s.length <= 1000
// s 仅由小写英文字母组成


var longestPalindromeSubseq = function(s) {

  let len = s.length;
  let dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0);    
  }
  // dp[i][j]  表示s的第i个字符到第j个字符组成的子串中, 最长的回文序列的长度是多少

  console.log("dp:", dp);

  for (let i = s.length - 1; i >= 0 ; i--) {
    // 一个字符时, 防止没有进去for 
    dp[i][i] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s.charAt(i) == s.charAt(j)) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }    
  }
  return dp[0][len - 1];
}

let s = "bbbab";
// 4

// let s = 'a';

console.log(longestPalindromeSubseq(s));


// 转移方程
// 如果 s 的第 i 个字符和第 j 个字符相同的话

// f[i][j] = f[i + 1][j - 1] + 2

// 如果 s 的第 i 个字符和第 j 个字符不同的话

// f[i][j] = max(f[i + 1][j], f[i][j - 1])

// 然后注意遍历顺序，i 从最后一个字符开始往前遍历，j 从 i + 1 开始往后遍历，这样可以保证每个子问题都已经算好了。

// 初始化
// f[i][i] = 1 单个字符的最长回文序列是 1

// 结果
// f[0][n - 1]



// 作者：元仲辛
// 链接：https://leetcode.cn/problems/longest-palindromic-subsequence/solutions/15118/dong-tai-gui-hua-si-yao-su-by-a380922457-3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。