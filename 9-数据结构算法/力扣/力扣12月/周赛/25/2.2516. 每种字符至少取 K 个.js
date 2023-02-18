
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
  let str = "aabaaaacaabc aabaaaacaabc";
  // 问题转化为, 从中间去掉一段连续的序列, 使条件成立
  
  let obj = {
  }
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] ? ++obj[s[i]] : 1;
    
    // 后缀++ 不生效 
    // obj[s[i]] = obj[s[i]] ? obj[s[i]]++ : 1;
  }
  console.log('obj:', obj);
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if(element < k){
        return -1;
      }
    }
  }

  let string = s + s;
  let left = s.length - 1;
  let right = s.length;
  let step = 0;
  while (left >= 0 && right <= 2 * s.length - 1) {
    if(obj[s[left]] - 1 >= k){
      left--;
    }    
  }

};

let s = "aabaaaacaabc", k = 2;

console.log(takeCharacters(s, k));