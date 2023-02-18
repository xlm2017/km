
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
  let minBool = null;
  for (let i = 0; i < expression.length; i++) {
    const element = expression[i];
    stack.push(element)
    console.log("当前栈中的字符串:", stack.join(""));
    // 检查栈顶元素
    if (element === ')') {
      // 从栈中取出距离顶部最近的 "("
      for (let j = stack.length - 1; j > 0; j--) {
        if (stack[j] === "(") {
          // 取出这一段逻辑,并计算这段逻辑, 
          // let string = expression.substring(j, i + 1);
          let string = stack.slice(j, i + 1).join("");
          console.log("找到括号:", string);
          // 取括号前一位, 检查是否是逻辑操作符号
          // if (j > 0) {
          //   let chars = ['!', '|', '&'];
          //   if (chars.includes(stack[j - 1])) {
          //     let string2 = expression.substring(j - 1, i + 1);
          //     console.log("包括逻辑的括号:", string2);
          //   }
          // }

          if (string.indexOf(",") != -1) {

            let string2 = expression.substring(j - 1, i + 1);
            console.log("包括逗号, 逻辑的括号:", string2);
            if (stack[j - 1] === '|') {
              if (string.indexOf("t") != -1) {
                console.log("表达式为true");
                minBool = true;
              } else {
                console.log("表达式为false");
                minBool = false;
              }
            } else if (stack[j - 1] === '&') {
              if (string.indexOf("f") != -1) {
                console.log("表达式为false");
                minBool = false;
              } else {
                console.log("表达式为true");
                minBool = true;
              }
            }

            // 弹出表达式, 写入值
            stack.splice(j - 1, stack.length - j + 1);
            stack.push(minBool ? 't' : 'f');
            console.log("当前栈信息:", stack);
            console.log("当前简化的字符串:", stack.join(""), '\n');

          } else {
            // 检测前一位是否为 "!"
            if (j > 0) {
              if (stack[j - 1] === '!') {
                console.log("当前表达式值取反");
                if (string.indexOf("t") != -1) {
                  minBool = false
                } else {
                  minBool = true;
                }
              }
              if (stack[j - 1] === '|') {
                if (string.indexOf("t") != -1) {
                  minBool = true
                } else {
                  minBool = false;
                }
              }
              if (stack[j - 1] === '&') {
                if (string.indexOf("f") != -1) {
                  minBool = false
                } else {
                  minBool = true;
                }
              }
              stack.splice(j - 1, stack.length - j + 1);
              stack.push(minBool ? 't' : 'f');
              console.log("当前栈信息", stack);
            }
          }
          break;
        }

      }
    }
  }

  console.log("最后结果:", stack)
  return stack[0] === 't' ? true : false;
};

// let expression = "|(&(t,f,t),!(t))";
let expression = "!(&(!(&(f)),&(t),|(f,f,t)))";
// 预期 false

console.log("parseBoolExpr:", parseBoolExpr(expression));




// 栈弹出 api测试

// let arr = [1, 2, 3, 4]
// arr.splice(2, 2);
// console.log(arr);     //  [1, 2]