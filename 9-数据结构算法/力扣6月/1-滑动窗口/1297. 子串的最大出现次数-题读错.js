// 给你一个字符串 s ，请你返回满足以下条件且出现次数最大的 任意 子串的出现次数：

// 子串中不同字母的数目必须小于等于 maxLetters 。
// 子串的长度必须大于等于 minSize 且小于等于 maxSize 。
 

// 示例 1：

// 输入：s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
// 输出：2
// 解释：子串 "aab" 在原字符串中出现了 2 次。
// 它满足所有的要求：2 个不同的字母，长度为 3 （在 minSize 和 maxSize 范围内）。
// 示例 2：

// 输入：s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3
// 输出：2
// 解释：子串 "aaa" 在原字符串中出现了 2 次，且它们有重叠部分。
// 示例 3：

// 输入：s = "aabcabcab", maxLetters = 2, minSize = 2, maxSize = 3
// 输出：3
// 示例 4：

// 输入：s = "abcde", maxLetters = 2, minSize = 3, maxSize = 3
// 输出：0
 

// 提示：

// 1 <= s.length <= 10^5
// 1 <= maxLetters <= 26
// 1 <= minSize <= maxSize <= min(26, s.length)
// s 只包含小写英文字母。


var maxFreq = function(s, maxLetters, minSize, maxSize) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i])||0) + 1);
  }
  let len = map.size;
  let l = 0;
  let r = 0;
  let ans = 0;
  console.log(map);
  while (r < s.length) {
    if(map.get(s[r]) > 1){
      map.set(s[r], map.get(s[r]) - 1);
    }else{
      map.delete(s[r]);
    }
    console.log("迭代:", r, map);
    // 满足条件
    if(len - map.size <= maxLetters && r - l + 1 >= minSize && r - l + 1 <= maxSize){
      ans++;
    }else{
      // 不满足条件的情况下, 窗口左侧收缩
      while (r - l + 1 > maxSize) {
        map.set(s[l], (map.get(s[l]) || 0) + 1);
        l++;
        if(len - map.size <= maxLetters && r - l + 1 >= minSize && r - l + 1 <= maxSize){
          console.log("收缩后满足条件:", l, r);
          ans++;
        }
      }
      while (len - map.size > maxLetters) {
        map.set(s[l], (map.get(s[l]) || 0) + 1);
        l++;
        if(len - map.size <= maxLetters && r - l + 1 >= minSize && r - l + 1 <= maxSize){
          ans++;
        }
      }
    }
    r++;
  }
  return ans;
};


let s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4;
// 2

// let s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3;
// 2

console.log(maxFreq(s, maxLetters, minSize, maxSize));
