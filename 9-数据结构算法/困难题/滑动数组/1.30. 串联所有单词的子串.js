// 给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。

//  s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。

// 例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
// 返回所有串联字串在 s 中的开始索引。你可以以 任意顺序 返回答案。

 

// 示例 1：

// 输入：s = "barfoothefoobarman", words = ["foo","bar"]
// 输出：[0,9]
// 解释：因为 words.length == 2 同时 words[i].length == 3，连接的子字符串的长度必须为 6。
// 子串 "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
// 子串 "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。
// 输出顺序无关紧要。返回 [9,0] 也是可以的。
// 示例 2：

// 输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// 输出：[]
// 解释：因为 words.length == 4 并且 words[i].length == 4，所以串联子串的长度必须为 16。
// s 中没有子串长度为 16 并且等于 words 的任何顺序排列的连接。
// 所以我们返回一个空数组。
// 示例 3：

// 输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// 输出：[6,9,12]
// 解释：因为 words.length == 3 并且 words[i].length == 3，所以串联子串的长度必须为 9。
// 子串 "foobarthe" 开始位置是 6。它是 words 中以 ["foo","bar","the"] 顺序排列的连接。
// 子串 "barthefoo" 开始位置是 9。它是 words 中以 ["bar","the","foo"] 顺序排列的连接。
// 子串 "thefoobar" 开始位置是 12。它是 words 中以 ["the","foo","bar"] 顺序排列的连接。
 

// 提示：

// 1 <= s.length <= 10^4
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// words[i] 和 s 由小写英文字母组成


var findSubstring = function(s, words) {
  let indexs = [];
  let res = [];
  let map = new Map();
  let mapCopy = new Map();
  let len = 0;
  for(let i = 0; i < words.length; i++){
      len += words[i].length;
      for(let j = 0; j < words[i].length; j++){
        map.set(words[i][j], map.has(words[i][j]) ? map.get(words[i][j]) + 1 : 1);
        mapCopy.set(words[i][j], mapCopy.has(words[i][j]) ? mapCopy.get(words[i][j]) + 1:1);
      }
  }
  // console.log(map);
  // 初始化窗口
  if(s.length < len) return [];
  let l = 0;
  let r = 0;
  for(; r < s.length; r++){
    if(map.has(s[r])){
      if(map.get(s[r]) === 1){
          map.delete(s[r])
      }else{
          map.set(s[r], map.get(s[r]) - 1)
      }
    }else{
      // 中断了, 删除左边的字符
      if(mapCopy.has(s[r])){
        while (s[l] !== s[r]) {
          map.set(s[l], (map.get(s[l]) || 0) + 1)
          l++
        }
        // 再舍弃一位
        // map.delete(s[r])
        // console.log("舍弃一位");
        l++
      }else{
        // 说明整个窗口都不能满足条件了, 重置
        mapCopy.forEach((value, key)=>{
          map.set(key, value);
        })
        l = r + 1
      }
      
    }

    // 检测是否符合条件
    if(r - l + 1 === len){
      // console.log("str:", s.slice(l, r + 1));
      indexs.push(l);
      // console.log(map)
    }
  }

  let wordMap = new Map();
  for (let i = 0; i < words.length; i++) {
    if(wordMap.has(words[i])){
      wordMap.set(words[i], wordMap.get(words[i]) + 1)
    }else{
      wordMap.set(words[i], 1)
    }    
  }

  let wordLen = words[0].length;
  for (let i = 0; i < indexs.length; i++) {
    let word = s.slice(indexs[i], indexs[i] + len)
    // console.log(word)
    let j = 0;
    let isOk = true;
    let mapItem = new Map();
    while (j < word.length) {
      const str = word.slice(j, j + wordLen);
      // console.log(str)
      j += wordLen
      mapItem.set(str, (mapItem.get(str) || 0) + 1)
      if(!wordMap.has(str) || wordMap.get(str) < mapItem.get(str)){
        isOk = false;
        break;
      }
    }
    if(isOk){
      res.push(indexs[i]);
    }
  }

  return res;
};


// let s = "barfoothefoobarman", words = ["foo","bar"];
// [0, 9]


let s = "barfoofoobarthefoobarman", words = ["bar","foo","the"];
// [6, 9, 12]

// let s = "barthefoobarman", words = ["bar","foo","the"];

// barthefoob


console.log(findSubstring(s, words));