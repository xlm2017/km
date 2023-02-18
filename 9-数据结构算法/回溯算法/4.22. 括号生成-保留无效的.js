// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。



// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]


// 提示：
// 1 <= n <= 8


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  let arr = ['(', ')'];
  // 原路返回
  let stack = ["("];
  function backtracking (deep) {
    if (deep === 2 * n) {
      let stackTemp = JSON.parse(JSON.stringify(stack));
      // 问题转换, 检测有效符号
      let temp = [stackTemp[0]];
      for (let i = 1; i < stackTemp.length; i++) {
        const element = stackTemp[i];
        if (!temp.length) {
          temp.push(element);
        } else {
          if (temp[temp.length - 1] === "(") {
            if (element === ')') {
              temp.pop()
            } else {
              temp.push(element);
            }
          } else {
            temp.push(element);
          }
        }
      }
      if (!temp.length) {
        let str = stackTemp.join("");
        // res.push(stackTemp);
        res.push(str);
      }
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      stack.push(arr[i]);
      backtracking(deep + 1);
      stack.pop()
    }

  }
  backtracking(1);
  return res;
};

let n1 = 3;
let n3 = ['((()))', '(()())', '(())()', '()(())', '()()()'] // 5
let n4 = [
  '(((())))', '((()()))',
  '((())())', '((()))()',
  '(()(()))', '(()()())',
  '(()())()', '(())(())',
  '(())()()', '()((()))',
  '()(()())', '()(())()',
  '()()(())', '()()()()'
]  // 14
console.log(generateParenthesis(n1));