// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。



// 示例 1：

// 输入：s = "ab#c", t = "ad#c"
// 输出：true
// 解释：s 和 t 都会变成 "ac"。
// 示例 2：

// 输入：s = "ab##", t = "c#d#"
// 输出：true
// 解释：s 和 t 都会变成 ""。
// 示例 3：

// 输入：s = "a#c", t = "b"
// 输出：false
// 解释：s 会变成 "c"，但 t 仍然是 "b"。


// 提示：

// 1 <= s.length, t.length <= 200
// s 和 t 只含有小写字母以及字符 '#'


let s = "ab#c", t = "ad#c"
// 输出：true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let i = S.length - 1,
    j = T.length - 1,
    skipS = 0,
    skipT = 0;
  //双指针从右往左循环
  while (i >= 0 || j >= 0) {
    while (i >= 0) {//处理掉# 直到left指向的字符右边退格全部处理掉
      if (S[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else break;
    }
    while (j >= 0) {//处理掉# 直到right指向的字符右边退格全部处理掉
      if (T[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else break;
    }
    if (S[i] !== T[j]) return false;//如果处理掉退格之后的字符串不相等，返回false
    i--;//继续循环
    j--;
  }
  return true;//如果循环过程中没返回false 最后就返回true
};


// 作者：小鸡炖蘑菇
// 链接：https://leetcode.cn/problems/backspace-string-compare/solutions/1509881/dai-ma-jian-ji-yi-chong-huan-bu-cuo-de-j-nszn/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


console.log(backspaceCompare(s, t));
