// 给你一个字符串 s ，考虑其所有 重复子串 ：即 s 的（连续）子串，在 s 中出现 2 次或更多次。这些出现之间可能存在重叠。

// 返回 任意一个 可能具有最长长度的重复子串。如果 s 不含重复子串，那么答案为 "" 。



// 示例 1：

// 输入：s = "banana"
// 输出："ana"
// 示例 2：

// 输入：s = "abcd"
// 输出：""


// 提示：

// 2 <= s.length <= 3 * 104
// s 由小写英文字母组成


var longestDupSubstring = function (s) {
  let subMap = new Map();
  let maxLen = s.length - 1;
  while (maxLen > 0) {
    let max = 0;
    let maxSub = "";
    let l = 0;
    let r = 0;
    while (r < s.length) {
      // 不满足条件的情况下, 窗口左侧收缩
      while (r - l + 1 > maxLen) {
        l++;
      }
      // 满足条件
      if (r - l + 1 === maxLen) {
        subMap.set(s.slice(l, r + 1), (subMap.get(s.slice(l, r + 1)) || 0) + 1);
      }
      r++;
    }

    subMap.forEach((value, key) => {
      max = Math.max(max, value);
      if (max > 1 && value === max) {
        maxSub = key
      }
      console.log(max, value, key);
    })
    if(max > 1){
      return maxSub;
    }
    subMap.clear();
    maxLen--;
  }
  return "";
};

// let s = "banana";

let s = "aa";


console.log(longestDupSubstring(s));