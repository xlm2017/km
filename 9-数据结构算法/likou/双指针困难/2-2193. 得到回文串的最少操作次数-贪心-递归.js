// 给你一个只包含小写英文字母的字符串 s 。

// 每一次 操作 ，你可以选择 s 中两个 相邻 的字符，并将它们交换。

// 请你返回将 s 变成回文串的 最少操作次数 。

// 注意 ，输入数据会确保 s 一定能变成一个回文串。



// 示例 1：

// 输入：s = "aabb"
// 输出：2
// 解释：
// 我们可以将 s 变成 2 个回文串，"abba" 和 "baab" 。
// - 我们可以通过 2 次操作得到 "abba" ："aabb" -> "abab" -> "abba" 。
// - 我们可以通过 2 次操作得到 "baab" ："aabb" -> "abab" -> "baab" 。
// 因此，得到回文串的最少总操作次数为 2 。
// 示例 2：

// 输入：s = "letelt"
// 输出：2
// 解释：
// 通过 2 次操作从 s 能得到回文串 "lettel" 。
// 其中一种方法是："letelt" -> "letetl" -> "lettel" 。
// 其他回文串比方说 "tleelt" 也可以通过 2 次操作得到。
// 可以证明少于 2 次操作，无法得到回文串。


// 提示：

// 1 <= s.length <= 2000
// s 只包含小写英文字母。
// s 可以通过有限次操作得到一个回文串。




/**
 * @param {string} s
 * @return {number}
 */
function minMovesToMakePalindrome(s) {

  if (s.length <= 1) return 0;
  let c = s[0]
  for (let j = s.length - 1; j > 0; j--) {
    if (s[j] == c) {
      return s.length - 1 - j + minMovesToMakePalindrome(s.substring(1, j) + s.substring(j + 1));
    }
  }
  let mid = Math.floor(s.length / 2);
  return mid + minMovesToMakePalindrome(s.substring(1,));
};

//  作者：masx200
//  链接：https://leetcode.cn/problems/minimum-number-of-moves-to-make-palindrome/solutions/1825793/tan-xin-di-gui-by-masx200-t4s4/
//  来源：力扣（LeetCode）
//  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


let s = "aabb"
// 输出：2


// let s2 = "letelt"
// 输出：2

// let s2 = "aabbc"

let s2 = "abcdeabcd"

// console.log(minMovesToMakePalindrome(s));
console.log(minMovesToMakePalindrome(s2));