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


// 我写的错误的, 别人的在下面
var longestDecomposition = function (text) {

  let ans = 1;

  let l = 0;
  let r = text.length - 1;
  let lastL = l;
  let lastR = r;
  while (l < r) {
    while (text[l] === text[r] && lastL === l && lastR === r) {
      ans += 2;
      l++;
      r--;
      // 为了方便计算, 备份供下次计算
      lastL = l;
      lastR = r;
    }
    // 子串不等 计算是否是回文串
    let i = lastL;
    let j = r;
    while (i <= l) {
      if (text[i] !== text[r]) {
        break;
      }
      i++;
      j++;
    }
    if (i > l) {
      console.log("匹配:", text[i], text[j], i);
    } else {

    }
    l++;
    r--;
  }
  return ans;
};



let text = "ghiabcdefhelloadamhelloabcdefghi"
//  adam
// 输出：7


console.log(longestDecomposition(text));





/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition2 = function (text) {
  let l = 1, r = text.length - 1, start = 0, k = 0;

  while (l <= r) {
    if (text.substring(start, l) === text.substring(r, text.length - start)) {
      k += 2;
      start = l;
    }

    l++;
    r--;
  }

  return k + (start < text.length / 2 ? 1 : 0)
};