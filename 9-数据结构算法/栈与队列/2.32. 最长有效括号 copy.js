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

// 0 <= s.length <= 3 * 10^4
// s[i] 为 '(' 或 ')'


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

  // 匹配栈
  let stack = [];
  // 剩余的下标
  let indexs = [];

  for (let i = 0; i < s.length; i++) {
    indexs.push(i);
    if(s[i] === ')'){
      if(stack.length){
        if(stack[stack.length - 1] !== '('){
        }else{
          stack.pop();
          indexs.pop(i);
          indexs.pop(i);
        }
      }
    }else{
      stack.push(s[i]);
    }
  }
  if(indexs.length === 0){
    return s.length;
  }else if (indexs.length === 1){
    return Math.max(indexs[0], s.length - (indexs[0]+ 1));
  }
  let max = indexs[0];
  for (let i = 1; i < indexs.length; i++) {
    let cur =  indexs[i] - indexs[i-1] - 1;
    if(cur > max){
      max = cur;
    }
    if(i === indexs.length - 1){
      max = Math.max(max, s.length - indexs[i] - 1);
    }  
  }
  console.log("indexs:", indexs);
  return max;
} 

let s1 = ')()())';
// 4

let s22 = ')(()())';
// 6
let s2 = ')(()())()';
// 8

// 建模连续性的 用例
let s3 = '()(()';
// 2

let s4 = '(((((((()';
// 2



console.log(longestValidParentheses(s4));