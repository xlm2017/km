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
  // let res = false
  // const dp = (restword)=>{
  //     if(res) return 
  //     if(restword==='') return res=true
  //     wordDict.forEach(item=>{
  //         if(restword.indexOf(item)===0){ //单词能拆分
  //             dp(restword.slice(item.length))
  //         }
  //     })
  // }
  // dp(s)
  // return res

  // 以上代码, 提交超时
  // 提交超时 观察用例 aaaaaaaaaa.... ['a','aa','aaa'....]


  // 第二版 应该先搜单词长的 再搜单词短的 要不然搜到啥时候
  // 手动先排个序
  //新添加 
  wordDict.sort((a,b)=>b.length-a.length);


  // 仔细观察 原来aaaaaaaaa....b 最后面带一个B 所以后续搜索明明之前已经搜过的 **不通过的字符串 ** 
  // 还是会重复继续搜 那么没办法了 只能按套路添加一下缓存了
  // 添加disablecache
  let res = false
  const discaches = []
  const dp = (restword)=>{
    if(discaches.includes(restword)) return
    if(res) return 
    if(restword==='') return res=true
    const headcanslice = wordDict.some(item=>{ //如果遗留的字符串已经不能拆了 就存缓存
      if(restword.indexOf(item)===0){
        dp(restword.slice(item.length))
      }
    })
    if(!headcanslice){
      discaches.push(restword);
    }
  }
  dp(s);
  return res;

};

// let s1 = "leetcode";
// let wordDict1 = ["leet","code"];


// let s1 = "cars";
// let wordDict1 = ["car","ca","rs"];

let s1 = 'catsandog';
let wordDict1 = ["cats", "dog", "sand", "and", "cat"];
// false;



// let s1 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab';
// let wordDict1 = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];



// FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory


console.log(wordBreak(s1, wordDict1));