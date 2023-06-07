

// 当一个字符串 s 包含的每一种字母的大写和小写形式 同时 出现在 s 中，就称这个字符串 s 是 美好 字符串。
// 比方说，"abABB" 是美好字符串，因为 'A' 和 'a' 同时出现了，且 'B' 和 'b' 也同时出现了。
// 然而，"abA" 不是美好字符串因为 'b' 出现了，而 'B' 没有出现。

// 给你一个字符串 s ，请你返回 s 最长的 美好子字符串 。如果有多个答案，请你返回 最早 出现的一个。
// 如果不存在美好子字符串，请你返回一个空字符串。



// 示例 1：

// 输入：s = "YazaAay"
// 输出："aAa"
// 解释："aAa" 是一个美好字符串，因为这个子串中仅含一种字母，其小写形式 'a' 和大写形式 'A' 也同时出现了。
// "aAa" 是最长的美好子字符串。
// 示例 2：

// 输入：s = "Bb"
// 输出："Bb"
// 解释："Bb" 是美好字符串，因为 'B' 和 'b' 都出现了。整个字符串也是原字符串的子字符串。
// 示例 3：

// 输入：s = "c"
// 输出：""
// 解释：没有美好子字符串。
// 示例 4：

// 输入：s = "dDzeE"
// 输出："dD"
// 解释："dD" 和 "eE" 都是最长美好子字符串。
// 由于有多个美好子字符串，返回 "dD" ，因为它出现得最早。


// 提示：

// 1 <= s.length <= 100
// s 只包含大写和小写英文字母。


/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  const n = s.length;
  let maxPos = 0;
  let maxLen = 0;
  for (let i = 0; i < n; ++i) {
    let lower = 0;
    let upper = 0;
    for (let j = i; j < n; ++j) {
      if ('a' <= s[j] && s[j] <= 'z') {
        lower |= 1 << (s[j].charCodeAt() - 'a'.charCodeAt());
      } else {
        upper |= 1 << (s[j].charCodeAt() - 'A'.charCodeAt());
      }
      if (lower === upper && j - i + 1 > maxLen) {
        maxPos = i;
        maxLen = j - i + 1;
      }
    }
  }
  return s.slice(maxPos, maxPos + maxLen);

  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/longest-nice-substring/solutions/1240201/zui-chang-de-mei-hao-zi-zi-fu-chuan-by-l-4l1t/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


  // 题目关于美好字符串的定义为: 字符串中的每个字母的大写和小写形式同时出现在该字符串中。检测时，由于英文字母 ‘a’−‘z’\texttt{`a'}-\texttt{`z'}‘a’−‘z’ 最多只有 262626 个, 
  // 因此可以利用二进制位来进行标记，lower\textit{lower}lower 标记字符中出现过小写英文字母，upper\textit{upper}upper 标记字符中出现过大写英文字母。
  // 如果满足 lower=upper\textit{lower} = \textit{upper}lower=upper ，我们则认为字符串中所有的字符都满足大小写形式同时出现，则认定该字符串为美好字符串。


  // 1<<20 表示将二进制数 1 左移 20 位，即在二进制数的末尾添加 20 个 0，
};


// let s = "YazaAay";
// "aAa"

let s = "cChH";
// "cChH"


console.log(longestNiceSubstring(s));