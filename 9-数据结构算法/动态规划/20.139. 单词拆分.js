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

  let len = s.length;

  // 假设这是合格的字符串的下标
  // let res = new Array(wordDict.length).fill(0);
  let res = [0];

  // console.log("res:", res);

  while (true) {
   
    // 新的合格的下标
    let newRes = [];

    // 检测合格的列表, 筛选下一轮合格的.
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < wordDict.length; j++) {
        let newS = s.slice(res[i]);
        let str = newS.slice(0, wordDict[j].length); 

        if(str === wordDict[j]){
          newRes.push(res[i] + wordDict[j].length);
          // console.log("index:", res[i] + wordDict[j].length, wordDict[j]);
          if(res[i] + wordDict[j].length === len){
            return true;
          }
        }        
      }
    } 
    res = newRes;
    // console.log("循环匹配:", newRes);
    if(res.length === 0){
      return false;
    }
  }
};

// let s1 = "leetcode";
// let wordDict1 = ["leet","code"];


// let s1 = "cars";
// let wordDict1 = ["car","ca","rs"];

// let s1 = 'catsandog';
// let wordDict1 = ["cats", "dog", "sand", "and", "cat"];
// false;



let s1 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab';
let wordDict1 = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];



// FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory


console.log(wordBreak(s1, wordDict1));