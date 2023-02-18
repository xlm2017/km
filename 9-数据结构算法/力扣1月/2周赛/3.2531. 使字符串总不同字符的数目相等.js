// 给你两个下标从 0 开始的字符串 word1 和 word2 。

// 一次 移动 由以下两个步骤组成：

// 选中两个下标 i 和 j ，分别满足 0 <= i < word1.length 和 0 <= j < word2.length ，
// 交换 word1[i] 和 word2[j] 。
// 如果可以通过 恰好一次 移动，使 word1 和 word2 中不同字符的数目相等，则返回 true ；否则，返回 false 。



// 示例 1：

// 输入：word1 = "ac", word2 = "b"
// 输出：false
// 解释：交换任何一组下标都会导致第一个字符串中有 2 个不同的字符，而在第二个字符串中只有 1 个不同字符。
// 示例 2：

// 输入：word1 = "abcc", word2 = "aab"
// 输出：true
// 解释：交换第一个字符串的下标 2 和第二个字符串的下标 0 。之后得到 word1 = "abac" 和 word2 = "cab" ，各有 3 个不同字符。
// 示例 3：

// 输入：word1 = "abcde", word2 = "fghij"
// 输出：true
// 解释：无论交换哪一组下标，两个字符串中都会有 5 个不同字符。


// 提示：

// 1 <= word1.length, word2.length <= 10^5
// word1 和 word2 仅由小写英文字母组成。



/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const ord = (c) => c.charCodeAt();

const isItPossible = (s, t) => {
  let a = Array(26).fill(0), b = Array(26).fill(0);
  for (const c of s) a[ord(c) - 97]++;
  for (const c of t) b[ord(c) - 97]++;
  console.log("a:", a);
  console.log("b:", b);
  for (let i = 0; i < 26; i++) {
    if (a[i] > 0) {
      for (let j = 0; j < 26; j++) {
        if (b[j] > 0) {
          // 交换
          a[i]--;
          b[i]++;
          b[j]--;
          a[j]++;
          if (equalDistinct(a, b)) return true;
          // 撤回
          a[i]++;
          b[i]--;
          b[j]++;
          a[j]--;
        }
      }
    }
  }
  return false;
};

const equalDistinct = (a, b) => {
  let cntA = 0, cntB = 0;
  for (let i = 0; i < 26; i++) {
    if (a[i] > 0) cntA++;
    if (b[i] > 0) cntB++;
  }
  return cntA == cntB;
};

// 作者：Wei Chen
// 链接：https://leetcode.cn/problems/make-number-of-distinct-characters-equal/solutions/2051089/js-by-henrychen222-s3z3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

let word1 = "ac", word2 = "b";

console.log(isItPossible(word1, word2));