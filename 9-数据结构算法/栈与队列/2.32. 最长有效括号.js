// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

 

// 示例 1：

// 输入：s = "(()"
// 输出：2
// 解释：最长有效括号子串是 "()"
// 示例 2：

// 输入：s = ")()())"
// 输出：4
// 解释：最长有效括号子串是 "()()"
// 示例 3：

// 输入：s = ""
// 输出：0
 

// 提示：

// 0 <= s.length <= 3 * 104
// s[i] 为 '(' 或 ')'


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let len = s.length;
  let stack = [];
  // 无效的字符
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    if(s[i] === ')'){
      if(stack.length){
        if(stack[stack.length - 1] !== '('){
          n++;
        }else{
          stack.pop();
        }
      }else{
        n++;
      }
    }else{
      stack.push(s[i]);
    }
  }
  n += stack.length;
  return len - n;
};

let s1 = ')()())';

let s2 = ')(()())';

let s3 = '()(()';
// 2



console.log(longestValidParentheses(s3));