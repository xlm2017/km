// 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符
 

// 示例 1：

// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')
// 示例 2：

// 输入：word1 = "intention", word2 = "execution"
// 输出：5
// 解释：
// intention -> inention (删除 't')
// inention -> enention (将 'i' 替换为 'e')
// enention -> exention (将 'n' 替换为 'x')
// exention -> exection (将 'n' 替换为 'c')
// exection -> execution (插入 'u')
 

// 提示：

// 0 <= word1.length, word2.length <= 500
// word1 和 word2 由小写英文字母组成


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let dp = new Array(word1.length + 1);
  dp = dp.fill().map(()=>new Array(word2.length + 1).fill(0));

  // dp[i][j]
  // 第i个(第0, 空字符串) 字符串1 变换 到  第j个(第0, 空字符串) 字符串2 需要的最小步骤

  // 变换方式
  // 插入一个字符  删除一个字符   替换一个字符

  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;    
  }
  for (let j = 0; j <= word2.length; j++) {
    dp[0][j] = j;    
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if(word1[i-1] === word2[j-1]){
        dp[i][j] = dp[i - 1][j - 1];
      }else{
        // 最小步骤

        // 删除
        // dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + 1;

        // 插入 
        // 理解为删除另一个

        // 替换
        // 替换就是dp[i - 1][j - 1] + 1

        // 三种情况结合, 取最小
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];

};




let word1 = "horse", word2 = "ros";
// 3


console.log(minDistance(word1, word2));