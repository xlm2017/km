// 给定一个字符串 s 和一个字符串字典 wordDict ，在字符串 s 中增加空格来构建一个句子，使得句子中所有的单词都在词典中。以任意顺序 返回所有这些可能的句子。

// 注意：词典中的同一个单词可能在分段中被重复使用多次。

 

// 示例 1：

// 输入:s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// 输出:["cats and dog","cat sand dog"]
// 示例 2：

// 输入:s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// 输出:["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// 解释: 注意你可以重复使用字典中的单词。
// 示例 3：

// 输入:s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// 输出:[]
 

// 提示：

// 1 <= s.length <= 20
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 10
// s 和 wordDict[i] 仅有小写英文字母组成
// wordDict 中所有字符串都 不同


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  let len = s.length;
  let wordSet = new Set(wordDict);
  let res = [];
  let str = '';
  let stack = [];
  function back_track(start){
    if(start === len){
      // res.push(str);
      // str = '';
      res.push([...stack].join(" "));

      return;
    }
    for (let i = 1; i <= len; i++) {
      let prefix = s.slice(start, i);
      if(wordSet.has(prefix)){
        str = str + ' ' + prefix;
        // console.log("满足的前缀:", prefix, str);

        stack.push(prefix);

        back_track(i);     

        stack.pop(); 
      }else{
        continue;
      }
    }
  }
  back_track(0);
  return res;
};

let s1 = "catsanddog";
let wordDict1 = ["cat","cats","and","sand","dog"];

console.log(wordBreak(s1, wordDict1));