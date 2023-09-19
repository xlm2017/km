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
  let max = 0;
  let maxSub = "";
  let l = 0;
  let r = 0;
  while (r < s.length) {
    // 开始判断
    let str = s.slice(l, r + 1);
    // 不满足
    while (str && l < r && s.indexOf(str) === -1 || s.indexOf(str) === l) {
      l++;
      str = s.slice(l, r + 1);
    }
    // 满足
    if (l <= r && s.indexOf(str) !== -1 && s.indexOf(str) !== l) {
      if (max < str.length) {
        max = str.length;
        maxSub = str;
      }
    }
    r++;
  }
  return maxSub;
};

// let s = "banana";
// "ana"

// let s = "abcabc";

// let s = "abcd";
// ""

let s = "nnpxouomcofdjuujloanjimymadkuepightrfodmauhrsy";
// ma
// fodmauhr 错误的


// l <= r
// let s = "aa";
// "a"

console.log(longestDupSubstring(s));




// 较慢
function longestDupSubstring2 (s) {
  // 存储最长子串
  let maxStr = ''
  // 滑动窗口遍历字符串
  for (let i = 0; i < s.length; i++) {
    // 窗口宽度为当前子串长度
    for (let j = i + maxStr.length + 1; j < s.length; j++) {
      // 截取当前窗口内子串
      let curStr = s.slice(i, j)
      // 查询左指针后面是否存在相同子串
      if (s.indexOf(curStr, i + 1) > -1) maxStr = curStr
      // 左指针后面不存在相同子串则跳出循环
      else break
    }
  }
  // 返回结果
  return maxStr
}