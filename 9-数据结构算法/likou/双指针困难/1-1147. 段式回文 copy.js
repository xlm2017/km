// 你会得到一个字符串 text 。你应该把它分成 k 个子字符串 (subtext1, subtext2，…， subtextk) ，要求满足:

// subtexti 是 非空 字符串
// 所有子字符串的连接等于 text ( 即subtext1 + subtext2 + ... + subtextk == text )
// 对于所有 i 的有效值( 即 1 <= i <= k ) ，subtexti == subtextk - i + 1 均成立
// 返回k可能最大值。



// 示例 1：

// 输入：text = "ghiabcdefhelloadamhelloabcdefghi"
// 输出：7
// 解释：我们可以把字符串拆分成 "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"。
// 示例 2：

// 输入：text = "merchant"
// 输出：1
// 解释：我们可以把字符串拆分成 "(merchant)"。
// 示例 3：

// 输入：text = "antaprezatepzapreanta"
// 输出：11
// 解释：我们可以把字符串拆分成 "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)"。


// 提示：

// 1 <= text.length <= 1000
// text 仅由小写英文字符组成



/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function (text) {

  let ans = 0;
  let str1 = '';
  let str2 = '';
  let len = text.length;
  // let mid = Math.floor(len / 2) - 1;
  for (let i = 0, j = len - 1; i <= j; i++, j--) {
    if (i === j) {
      ans++;
      return ans;
    }
    if (text[i] === text[j] && !str1) {
      ans += 2;
    } else {
      str1 += text[i];
      str2 = text[j] + str2;
      if (str1 === str2) {
        console.log(str1)
        ans += 2;
        str1 = "";
        str2 = "";
      }
    }
  }
  if (str1) {
    ans++;
  }
  return ans;
};



// let text = "ghiabc÷defhelloadamhelloabcdefghi"
//  adam
// 输出：7


let text = "elvtoelvto";
// 2

// let text = "bqrcnnqrcb";
// 6

let text2 = "aaa";
// 3

console.log(longestDecomposition(text));
console.log(longestDecomposition(text2));




let a = "abc";

let b = "abc";

// console.log(a===b);
// true





/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition2 = function (text) {
  if (!text) {
    return 0
  }
  for (let i = 1, n = text.length; i <= n / 2; i++) {
    if (text.substring(0, i) == text.substring(n - i)) {
      return 2 + longestDecomposition2(text.substring(i, n - i))
    }
  }
  return 1
};