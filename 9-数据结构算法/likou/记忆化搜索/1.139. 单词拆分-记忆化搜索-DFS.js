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
var wordBreak = function (s, wordDict) {

  const len = s.length;
  let map = new Map();
  for (const word of wordDict) {
    map.set(word, true);
  }

  let memo = new Array(s.length);
  function dfs(start) {

    if (start == len) return true;
    if (memo[start] !== undefined) return memo[start]; // memo中有，就用memo中的

    for (let i = start + 1; i <= s.length; i++) {
      if (map.has(s.slice(start, i))) {
        if(dfs(i)){
          memo[start] = true; // 当前递归的结果存一下
          return true;
        }
      }
      memo[start] = true; // 当前递归的结果存一下    
    }
    memo[start] = false; // 当前递归的结果存一下    
    return false;
  }
  return dfs(0);
}

// let s = "leetcode", wordDict = ["leet", "code"]
// 输出: true



let s = "aaaaaaa", wordDict = ["aaaa", "aaa"];




console.log(wordBreak(s, wordDict));