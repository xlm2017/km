
// 给你一个以字符串形式表述的 布尔表达式（boolean） expression，返回该式的运算结果。

// 有效的表达式需遵循以下约定：

// "t"，运算结果为 True
// "f"，运算结果为 False
// "!(expr)"，运算过程为对内部表达式 expr 进行逻辑 非的运算（NOT）
// "&(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 与的运算（AND）
// "|(expr1,expr2,...)"，运算过程为对 2 个或以上内部表达式 expr1, expr2, ... 进行逻辑 或的运算（OR）


// 示例 1：
// 输入：expression = "!(f)"
// 输出：true

// 示例 2：
// 输入：expression = "|(f,t)"
// 输出：true

// 示例 3：
// 输入：expression = "&(t,f)"
// 输出：false

// 示例 4：
// 输入：expression = "|(&(t,f,t),!(t))"
// 输出：false


/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  console.log("初始字符串:", expression);
  let stack = [];
  // let stack = [expression[0]];
  let curBool = null;
  // while (stack.length) {
  //   // 判断当前栈顶元素

  // }
  for (let i = 0; i < expression.length; i++) {
    const element = expression[i];
    if (element === 't') {
      curBool = true
    } else if (element === 'f') {
      curBool = false
    } else {
      if (element === ")") {
        // 从栈中找到最近的左括号
        // while(true){

        // }
        for (let j = stack.length - 1; j > 0; j--) {
          if (stack[j] === "(") {
            // 取出这一段逻辑,并计算这段逻辑, 
            let string = expression.substring(j, i + 1);
            console.log("找到括号:", string);
            // 清空括号内容, 递归剩余的字符串
            let sub1 = expression.substring(0, j);
            let sub2 = expression.substring(i + 1);
            let str = sub1 + sub2;
            console.log("新字符串:", str);
            break;
          }
        }
      } else {
        stack.push(element);
      }
    }

  }
};

let expression = "|(&(t,f,t),!(t))";

console.log("parseBoolExpr:", parseBoolExpr(expression));