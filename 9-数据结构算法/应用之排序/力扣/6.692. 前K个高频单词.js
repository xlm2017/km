// 给定一个单词列表 words 和一个整数 k ，返回前 k 个出现次数最多的单词。

// 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率， 按字典顺序 排序。

 

// 示例 1：

// 输入: words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// 输出: ["i", "love"]
// 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
//     注意，按字母顺序 "i" 在 "love" 之前。
// 示例 2：

// 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// 输出: ["the", "is", "sunny", "day"]
// 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
//     出现次数依次为 4, 3, 2 和 1 次。
 

// 注意：

// 1 <= words.length <= 500
// 1 <= words[i] <= 10
// words[i] 由小写英文字母组成。
// k 的取值范围是 [1, 不同 words[i] 的数量]
 

// 进阶：尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。


/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  
  let obj = {}
  for (let i = 0; i < words.length; i++) {
    if(obj[words[i]]){
      obj[words[i]]++
    }else{
      obj[words[i]] = 1
    }  
  }
  
  let arr = Object.entries(obj);
  // [ [ 'the', 4 ], [ 'day', 1 ], [ 'is', 3 ], [ 'sunny', 2 ] ]
  console.log("arr:", arr);


  // [ [ 'i', 2 ], [ 'love', 2 ], [ 'leetcode', 1 ], [ 'coding', 1 ] ]

  arr.sort((a,b)=>{
    if(b[1] === a[1]){
      // return a[0] - b[0];
      // return b[0] - a[0];
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  })

  let res = [];

  for (let i = 0; i < k; i++) {
    res.push(arr[i][0])    
  }
  return res;
};


// let words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]
// let k = 4
// ["the", "is", "sunny", "day"]

let words = ["i","love","leetcode","i","love","coding"];
let k = 3
// ["i","love","coding"]

console.log(topKFrequent(words, k));



console.log("字符串相减:", 'leet' - 'code');