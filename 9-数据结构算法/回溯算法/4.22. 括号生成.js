// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。



// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]


// 提示：
// 1 <= n <= 8


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let dp = new Array(n + 1);
  dp[0] = [];
  dp[1] = ['()'];
  let one = '()'
  for (let i = 2; i <= n; i++) {
    let res = [];
    for (let j = 0; j < dp[i - 1].length; j++) {
      let str = dp[i - 1][j];
      // 在每一个位置插入字符串()
      for (let index = 0; index <= str.length; index++) {
        // 组成新的字符串
        let str1 = str.slice(0, index);
        let str2 = str.slice(index);
        let newStr = str1 + one + str2;
        if (!res.includes(newStr)) {
          res.push(newStr);
        }
      }
      dp[i] = res;
    }
  }
  return dp[n];
};

let n1 = 4;
console.log(generateParenthesis(n1));