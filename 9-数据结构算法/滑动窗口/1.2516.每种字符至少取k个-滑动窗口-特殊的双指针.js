
// 给你一个由字符 'a'、'b'、'c' 组成的字符串 s 和一个非负整数 k 。每分钟，你可以选择取走 s 最左侧 还是 最右侧 的那个字符。

// 你必须取走每种字符 至少 k 个，返回需要的 最少 分钟数；如果无法取到，则返回 -1 。

 

// 示例 1：

// 输入：s = "aabaaaacaabc", k = 2
// 输出：8
// 解释：
// 从 s 的左侧取三个字符，现在共取到两个字符 'a' 、一个字符 'b' 。
// 从 s 的右侧取五个字符，现在共取到四个字符 'a' 、两个字符 'b' 和两个字符 'c' 。
// 共需要 3 + 5 = 8 分钟。
// 可以证明需要的最少分钟数是 8 。
// 示例 2：

// 输入：s = "a", k = 1
// 输出：-1
// 解释：无法取到一个字符 'b' 或者 'c'，所以返回 -1 。
 

// 提示：

// 1 <= s.length <= 105
// s 仅由字母 'a'、'b'、'c' 组成
// 0 <= k <= s.length


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
  const chars = s
  const cnt = [0,0,0]
  for (const c of chars) {
    cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  console.log("cnt:", cnt);
  if (cnt[0] < k || cnt[1] < k || cnt[2] < k) {
    return -1;
  }
  // 使用滑动窗口找中间最长的片段使a最多移除aCnt-k个， b最多移除bCnt-k个， c最多移除cCnt-k个
  const currentCnt = [0,0,0]
  let maxWindowSize = 0;
  let left = 0;
  let right = 0;
  while (left < chars.length) {
    if (right < chars.length) {
      currentCnt[chars[right++].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    while ((currentCnt[0] > cnt[0] - k || currentCnt[1] > cnt[1] - k || currentCnt[2] > cnt[2] - k) 
    && left < chars.length) {
      currentCnt[chars[left++].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    maxWindowSize = Math.max(maxWindowSize, right - left);
    if (right == chars.length) {
      left++;
    }
    console.log("left:", left, right, maxWindowSize);
  }
  return s.length - maxWindowSize;

// 作者：masx200
// 链接：https://leetcode.cn/problems/take-k-of-each-character-from-left-and-right/solutions/2032096/by-masx200-nvmm/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};

// let s = "a";
// let k = 1;  // -1
// let k = 0;

// let s = "aabaaaacaabc";
// let k = 2;
// 8

// let s = 'abc';
// let k = 1;
// 3

// let s = 'acba';  // 3
// let s = 'bcca';  // 3
// let s = 'ccbabcc';  // 4
// let k = 1;


// 反向指针突破, 右侧指针向左处理
// let s = 'caaababcaa';  // 7
let s = 'aabaaaacaabc';  // 8  // aab  aa aa   caabc
let k = 2;

console.log(takeCharacters(s, k));


// 滑动窗口 + 逆向思维

// 问题等价于：从字符串中间删除一段  剩下的两部分中, a,b,c 的数量均大于等于 kkk 个，且要求 剩余的字符串最短
//    ||
//    ||
// 现在问题变成：从字符串中间删除一段, 其中 a,b,ca, b, ca,b,c 的次数最多为, 

