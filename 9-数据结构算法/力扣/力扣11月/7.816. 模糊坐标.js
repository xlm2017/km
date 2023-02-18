// 我们有一些二维坐标，如 "(1, 3)" 或 "(2, 0.5)"，然后我们移除所有逗号，小数点和空格，得到一个字符串S。返回所有可能的原始字符串到一个列表中。

// 原始的坐标表示法不会存在多余的零，所以不会出现类似于"00", "0.0", "0.00", "1.0", "001", "00.01"或一些其他更小的数来表示坐标。此外，一个小数点前至少存在一个数，所以也不会出现“.1”形式的数字。

// 最后返回的列表可以是任意顺序的。而且注意返回的两个数字中间（逗号之后）都有一个空格。



// 示例 1:
// 输入: "(123)"
// 输出: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
// 示例 2:
// 输入: "(00011)"
// 输出:  ["(0.001, 1)", "(0, 0.011)"]
// 解释: 
// 0.0, 00, 0001 或 00.01 是不被允许的。
// 示例 3:
// 输入: "(0123)"
// 输出: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]



/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  let res = [];
  for (let i = 2; i < s.length - 1; i++) {
    let str1 = s.slice(0, i);
    let str2 = s.slice(i, s.length);
    let str = str1 + ',' + str2;
    console.log("包含逗号的str:", str, str1, str2);

    // 00111  000011


    // 字符串加点判断
    // 字符串加点, 观察可知, 最后一位, 不能为0,
    // 用栈描述的话, 如果包含一个点, 这个数字组成的栈, 栈顶元素不能为0
    // 由于有两个数, 第二个数也可以加点, 点位组合, 左边 n种 * 右边 m种, 排列组合, 

    // 具体到字符串, 点的前后都要有数字, 所以一个字符时, 不能加点, 加点遍历只能从第一个下标位置开始

    for (let j = 1; j < str1.length; j++) {
      let s1 = ''
      console.log('str1[j]:', str[j]);
      if (j < str1.length - 1) {
        console.log("str1加点操作:", j, str1[j]);

        if (str1[str1.length - 1] == 0) {
          if (str1.length > 2) {
            console.log("不能加点");
            continue;
          }
        } else {

          // 有小数点, 两位以上的整数部分的话, 首位不能为0
          if (str1.slice(0, j + 1).length > 2) {
            if (str1[1] === '0') {
              continue;
            }
          }
          if (str1.slice(j + 1).length > 2) {
            if (str1[str1.length - 1] === '0') {
              continue;
            }
          }

          s1 = str1.slice(0, j + 1) + '.' + str1.slice(j + 1);
        }

      }
      if (j === str1.length - 1) {
        console.log("str1无加点:", str1);
        if (str1[1] == '0' && str1.length > 2) {
          continue;
        }
        s1 = str1
      }

      // 判断过滤掉前面有 0 的情况
      // 0.0 00, 0001  00.01 不允许出现


      for (let k = 0; k < str2.length - 1; k++) {
        console.log('str2[k]:', str2[k]);
        let s2 = ''
        if (k < str2.length - 2) {
          console.log("str2加点操作:", k, str2[k]);

          if (str2[str2.length - 2] == 0) {
            console.log("不能加点");
            continue;
          } else {

            // 有小数点, 两位以上的整数部分的话, 首位不能为0
            if (str2.slice(0, k + 1).length > 1) {
              if (str2[0] === '0') {
                continue;
              }
            }

            if (str2.slice(k + 1).length > 2) {
              if (str2[str2.length - 2] === '0') {
                continue;
              }
            }

            s2 = str2.slice(0, k + 1) + '.' + str2.slice(k + 1);
          }

        }
        if (k === str2.length - 2) {
          console.log("str2无加点:", str2);
          if (str2[0] == '0' && str2.length > 2) {
            continue;
          }
          s2 = str2
        }

        // 收集
        res.push(s1 + ', ' + s2);
        console.log("s1:", s1);
        console.log("s2:", s2);
      }
    }
  }

  return res;
};


// let str = "(123)"

// let str = "(0123)"
// 预期: ["(0, 1.23)","(0, 12.3)","(0, 123)","(0.1, 2.3)","(0.1, 23)","(0.12, 3)"]


// let str = '(00011)'
// 预期结果 ["(0, 0.011)","(0.001, 1)"]


let str = '(100)'
// 预期结果 ["(10, 0)"]


console.log("结果集:", ambiguousCoordinates(str));

// let str1 = str.slice(0, 2);
// let str2 = str.slice(2, str.length);
// console.log(str1 + ',' + str2);

// let str3 = str.slice(0, str.length - 2);
// console.log(str3);