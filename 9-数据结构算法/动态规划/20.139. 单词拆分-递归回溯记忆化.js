// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

 

// 示例 1：

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
// 示例 2：

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
//      注意，你可以重复使用字典中的单词。
// 示例 3：

// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false
 

// 提示：

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s 和 wordDict[i] 仅有小写英文字母组成
// wordDict 中的所有字符串 互不相同


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const set = new Set(wordDict);
  const flag = new Map(); // 记录已经求解过的子串
  const dfs = (pos) => {
      if (pos >= s.length) return true;
      const end = pos + 20; // 每个单词最长的长度
      for (let i=pos; i<end && i < s.length; ++i) {
          const str = s.slice(pos, i+1);
          if (set.has(str)) {
              if (flag.has(i+1)) {
                  const res = flag.get(i+1);
                  if (res) return true;
                  continue;
              }
              const res = dfs(i+1);
              flag.set(i+1, res);
              if (res) {
                  return true;
              }
          }
      }
      return false;
  }
  return dfs(0);
};

// let s1 = "leetcode";
// let wordDict1 = ["leet","code"];


let s1 = "bccdbacdbdacddabbaaaadababadad";
let wordDict1 = ["cbc","bcda","adb","ddca","bad","bbb","dad","dac","ba","aa","bd","abab","bb","dbda","cb","caccc","d","dd","aadb","cc","b","bcc","bcd","cd","cbca","bbd","ddd","dabb","ab","acd","a","bbcc","cdcbd","cada","dbca","ac","abacd","cba","cdb","dbac","aada","cdcda","cdc","dbc","dbcb","bdb","ddbdd","cadaa","ddbc","babb"];

// 失败


console.log(wordBreak(s1, wordDict1));