

// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。



// 注意：

// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。


// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
// 示例 2：

// 输入：s = "a", t = "a"
// 输出："a"
// 解释：整个字符串 s 是最小覆盖子串。
// 示例 3:

// 输入: s = "a", t = "aa"
// 输出: ""
// 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
// 因此没有符合条件的子字符串，返回空字符串。


// 提示：

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s 和 t 由英文字母组成


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

  // target
  // let minLen = Infinity, resL;
  let minLength = s.length + 1;  // 目标子串长度, 要求最短
  let start = s.length;   // 目标子串的起始位置

  let map = {};
  // 字符种类
  let kind = 0;
  for (let i = 0; i < t.length; i++) {
    if(map[t[i]]){
      map[t[i]]++
    }else{
      map[t[i]] = 1
      kind++;
    } 
    // need[a] = (need[a] || 0) + 1;
  }
  // console.log(map);
  
  // let left, right = 0;
  let left = 0, right = 0;
  
  for (; right < s.length; right++) {
    let rightChar = s[right];    
    if(map[rightChar] !== undefined){
      map[rightChar]--;
    }
    if(map[rightChar] === 0){
      kind--;
    }
    
    
    // 说明字符种类已经凑齐并且数量也凑齐了, 当前窗口包含所有字符
    while (kind === 0) {
      // 记录当前子串的位置
      if(right - left + 1 < minLength){
        minLength = right - left + 1;
        start = left;
      }

      // 抛弃当前的左指针上的字符, 左指针向右移动
      let leftChar = s[left];
      if (map[leftChar] !== undefined) map[leftChar]++; // 被舍弃的是目标字符，缺失个数+1
      if (map[leftChar] > 0) kind++;      // 如果缺失个数新变为>0，缺失的种类+1
      left++;
      // console.log("left:", leftChar, left);
    }
  }  
  // console.log("start:", start, minLength);
  if (start == s.length) return "";
  return s.substring(start, start + minLength); // 根据起点和minLen截取子串
};


// let s = "ADOBECODEBANC", t = "ABC";

let s = "ABC", t = "ABC";

console.log(minWindow(s, t));