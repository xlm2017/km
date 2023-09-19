

// 字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列 beginWord -> s1 -> s2 -> ... -> sk：

// 每一对相邻的单词只差一个字母。
//  对于 1 <= i <= k 时，每个 si 都在 wordList 中。注意， beginWord 不需要在 wordList 中。
// sk == endWord
// 给你两个单词 beginWord 和 endWord 和一个字典 wordList ，返回 从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0 。


// 示例 1：

// 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// 输出：5
// 解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
// 示例 2：

// 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// 输出：0
// 解释：endWord "cog" 不在字典中，所以无法进行转换。


// 提示：

// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord、endWord 和 wordList[i] 由小写英文字母组成
// beginWord != endWord
// wordList 中的所有字符串 互不相同



/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {


  let map = new Map();
  for (const char of beginWord) {
    console.log(char);
    map.set(char, (map.get(char) || 0) + 1);
  }

  console.log("map:", map);

  let second = [];
  for (let i = 0; i < wordList.length; i++) {
    const element = wordList[i];
    let map1 = new Map();
    for (const char of element) {
      map1.set(char, (map1.get(char) || 0) + 1);
    }

    let v = compareObj(map, map1);
  }


};

function compareObj (map1, map2) {
  // for (let char = "a"; char <= "z"; char++) {
  //   console.log("char:", char);
  // }
  let count = 0;
  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    const char = String.fromCharCode(i);
    // console.log(char);
    count += Math.abs((map1.get(char) || 0) - (map2.get(char) || 0));
    if(count > 1){
      return false;
    }
  }
  return true;
}


let beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
// 输出：5


console.log(ladderLength(beginWord, endWord, wordList));