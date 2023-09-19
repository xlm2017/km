// 给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：

// () 得 1 分。
// AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
// (A) 得 2 * A 分，其中 A 是平衡括号字符串。
 

// 示例 1：

// 输入： "()"
// 输出： 1
// 示例 2：

// 输入： "(())"
// 输出： 2
// 示例 3：

// 输入： "()()"
// 输出： 2
// 示例 4：

// 输入： "(()(()))"
// 输出： 6
 

// 提示：

// S 是平衡括号字符串，且只含有 ( 和 ) 。
// 2 <= S.length <= 50


var scoreOfParentheses = function(s) {
  let stack = [];
  // 当前层级
  let level = 0;
  // 如果存在层, 则临时存储, 每一层级对应的分数
  let levelScore = [0];
  for (let i = 0; i < s.length; i++) {
    if(s[i] === "("){
      stack.push("(");
      level++;
    }else{
      if(stack.length && stack[stack.length - 1] === "("){
        if(levelScore[level + 1]){
          levelScore[level] = (levelScore[level + 1]) * 2 + (levelScore[level] || 0);
        }else{
          levelScore[level] = (levelScore[level] || 0) + 1;
        }
        levelScore[level + 1] = 0;
        // 消除一个平衡字符串
        level--;
      }
    }     
  }
  return levelScore[1];
};

let s = "(()(()))";
// 6

console.log(scoreOfParentheses(s));