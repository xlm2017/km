// 给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。

// 在执行上述操作后，返回包含相同字母的最长子字符串的长度。



// 示例 1：

// 输入：s = "ABAB", k = 2
// 输出：4
// 解释：用两个'A'替换为两个'B',反之亦然。
// 示例 2：

// 输入：s = "AABABBA", k = 1
// 输出：4
// 解释：
// 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
// 子串 "BBBB" 有最长重复字母, 答案为 4。
// 可能存在其他的方法来得到同样的结果。


// 提示：

// 1 <= s.length <= 105
// s 仅由大写英文字母组成
// 0 <= k <= s.length


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */


//  分解成26个子问题 1 全是'A'的最长连续子数组 2 全是'B'的最长连续子数组 ...

//  使用滑动窗口解决子问题

var characterReplacement = function (s, k) {

  var n = s.length;
  var max_len = 0;
  let start = 'A'.charCodeAt();
  let end = 'Z'.charCodeAt();
  // for(var ch = 'A'; ch <= 'Z'; ++ch){
  for(var ch = start; ch <= end; ++ch){
    
    var l = 0, r = 0;
    var k_cnt = 0;
    for(; r < n; ++r){
      // k_cnt += s[r] == ch ? 0 : 1;
      k_cnt += s[r].charCodeAt() == ch ? 0 : 1;
      // console.log("k计数器:", s[r], ch, k_cnt);
      while(l <= r && k_cnt > k){
        k_cnt -= s[l].charCodeAt() == ch ? 0 : 1;
        ++l;
      }
      max_len = Math.max(max_len, r + 1 - l);
    }
  
    // console.log("ch:", ch, max_len);
  }

  return max_len;
};
// 作者：Linke66
// 链接：https://leetcode.cn/problems/longest-repeating-character-replacement/solutions/1471192/bao-li-hua-chuang-by-linke66-n-rzv4/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// let s = "ABAB", k = 2;
// 4

// let s = "ABBB", k = 2;
// 4

let s = "AABABBA", k = 1;
// 4

console.log(characterReplacement(s, k));


// let a = "A";
// console.log(++a);