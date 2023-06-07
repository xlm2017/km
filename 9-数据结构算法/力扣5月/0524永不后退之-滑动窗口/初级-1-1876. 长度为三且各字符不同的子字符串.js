// 如果一个字符串不含有任何重复字符，我们称这个字符串为 好 字符串。

// 给你一个字符串 s ，请你返回 s 中长度为 3 的 好子字符串 的数量。

// 注意，如果相同的好子字符串出现多次，每一次都应该被记入答案之中。

// 子字符串 是一个字符串中连续的字符序列。

 

// 示例 1：

// 输入：s = "xyzzaz"
// 输出：1
// 解释：总共有 4 个长度为 3 的子字符串："xyz"，"yzz"，"zza" 和 "zaz" 。
// 唯一的长度为 3 的好子字符串是 "xyz" 。
// 示例 2：

// 输入：s = "aababcabc"
// 输出：4
// 解释：总共有 7 个长度为 3 的子字符串："aab"，"aba"，"bab"，"abc"，"bca"，"cab" 和 "abc" 。
// 好子字符串包括 "abc"，"bca"，"cab" 和 "abc" 。
 

// 提示：

// 1 <= s.length <= 100
// s​​​​​​ 只包含小写英文字母。


 /**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  let nums = 0;
  if(s.length < 3) return 0;
  let left = 0, right = 0;
  let len = 0;
  for (; right < s.length; right++) {
    len++;
    if(len === 3){
      // 收集满了
      let str = s.substring(left, right + 1);
      // console.log("str:", str);
      let set = new Set(str.split(""));
      if(set.size === 3){
        nums++;
      }
      len--;
      left++;
    }    
  }
  return nums;
};

let s = "xyzzaz";
// 1

// let s = "aababcabc";
// 4

console.log(countGoodSubstrings(s));


// 根据题意, 维护一个窗口大小为3的窗口, 在字符串上, 从左往右滑动到结尾










var countGoodSubstrings = function(s) {
  let queue = [], count = 0;
  for (let i = 0; i < s.length; i++) {
      if (queue.includes(s[i])) {
          queue.splice(0, queue.indexOf(s[i])+1);
      }
      queue.push(s[i]);
      if(queue.length == 3) {
          count++;
          queue.shift();
      }
  }
  return count;
};


// 作者：小鸡炖蘑菇
// 链接：https://leetcode.cn/problems/substrings-of-size-three-with-distinct-characters/solutions/1731483/dai-ma-jian-ji-yi-chong-huan-bu-cuo-de-j-w2bh/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。