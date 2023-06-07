

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
  // 需要的
  let need = {};
  // 窗口中的字符
  let window = {};
  for (let a of t) {
    // 统计需要的字符
    need[a] = (need[a] || 0) + 1;
  }
  // 左右指针
  let left = 0,
    right = 0;
  let valid = 0;
  // 最小覆盖子串的起始索引及长度
  let start = 0,
    len = Number.MAX_VALUE;
  while (right < s.length) {
    // 即将移入窗口的字符
    let c = s[right];
    // 右移窗口
    right++;
    if (need[c]) {
      // 当前字符在需要的字符中，则更新当前窗口统计
      window[c] = (window[c] || 0) + 1;
      if (window[c] == need[c]) {
        // 当前窗口和需要的字符匹配时，验证数量增加1
        valid++;
      }
    }
    // 当验证数量与需要的字符个数一致时，就应该收缩窗口了
    while (valid == Object.keys(need).length) {
      // 更新最小覆盖子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      //即将移出窗口的字符
      let d = s[left];
      // 左移窗口
      left++;
      if (need[d]) {
        if (window[d] == need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  return len == Number.MAX_VALUE ? "" : s.substr(start, len);

  // 作者：angela
  // 链接：https://leetcode.cn/problems/minimum-window-substring/solutions/1033526/hua-dong-chuang-kou-tong-yong-jie-ti-tao-9v69/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};


let s = "ADOBECODEBANC", t = "ABC";

console.log(minWindow(s, t));