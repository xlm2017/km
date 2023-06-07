

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
const minWindow = (s, t) => {
  let minLen = s.length + 1;
  let start = s.length;     // 结果子串的起始位置
  let map = {};             // 存储目标字符和对应的缺失个数
  let missingType = 0;      // 当前缺失的字符种类数
  for (const c of t) {      // t为baac的话，map为{a:2,b:1,c:1}
    if (!map[c]) {
      missingType++;        // 需要找齐的种类数 +1
      map[c] = 1;
    } else {
      map[c]++;
    }
  }
  console.log("map:", map);
  let l = 0, r = 0;                // 左右指针
  for (; r < s.length; r++) {      // 主旋律扩张窗口，超出s串就结束
    let rightChar = s[r];          // 获取right指向的新字符
    if (map[rightChar] !== undefined) map[rightChar]--; // 是目标字符，它的缺失个数-1
    if (map[rightChar] == 0) missingType--;   // 它的缺失个数新变为0，缺失的种类数就-1
    while (missingType == 0) {                // 当前窗口包含所有字符的前提下，尽量收缩窗口
      if (r - l + 1 < minLen) {    // 窗口宽度如果比minLen小，就更新minLen
        minLen = r - l + 1;
        start = l;                 // 更新最小窗口的起点
      }
      let leftChar = s[l];          // 左指针要右移，左指针指向的字符要被丢弃
      if (map[leftChar] !== undefined) map[leftChar]++; // 被舍弃的是目标字符，缺失个数+1
      if (map[leftChar] > 0) missingType++;      // 如果缺失个数新变为>0，缺失的种类+1
      l++;                          // 左指针要右移 收缩窗口
    }
  }
  if (start == s.length) return "";
  return s.substring(start, start + minLen); // 根据起点和minLen截取子串
};

// 作者：笨猪爆破组
// 链接：https://leetcode.cn/problems/minimum-window-substring/solutions/257928/yi-bu-bu-xing-cheng-hua-dong-chuang-kou-si-lu-shen/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

let s = "ADOBECODEBANC", t = "ABC";

console.log(minWindow(s, t));