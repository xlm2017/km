// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。



// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 2：

// 输入：s = "a"
// 输出：[["a"]]


// 提示：

// 1 <= s.length <= 16
// s 仅由小写英文字母组成


/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  if (s.length == 1) {
    return [[s]];
  }
  // 判断回文串
  function isOkSub (s) {
    if (s.length === 1) {
      return true;
    }
    let i = 0;
    let j = s.length - 1;
    while (j - i >= 1) {
      if (s[i] !== s[j]) {
        return false;
      } else {
        i++;
        j--;
      }
    }
    return true;
  }

  // 收集有效的回文串
  let res = [];
  let stack = [];  // 收集栈
  // 递归函数,回溯
  function backtracking (string) {
    for (let i = 1; i < string.length + 1; i++) {
      // 从第一个字符开始截取
      let str = string.slice(0, i);
      if (!isOkSub(str)) {
        continue;
      }
      stack.push(str);
      // 递归剩余的字符串
      let remainStr = string.slice(i);
      // console.log(i, '-', string, "截取后剩余字符串:", remainStr, stack);
      if (remainStr) {
        if (remainStr.length === 1) {
          let arr = stack.concat([remainStr]);
          res.push(arr);
          stack.pop();
          continue;
        }
        backtracking(remainStr);
        // 回溯
        stack.pop();
      } else {
        // 没有剩余的字符串了
        // console.log("没有剩余的字符串了");
        let arr = stack.concat([]);
        res.push(arr);
        stack = [];
      }
    }
  }

  // 调用函数
  backtracking(s);
  return res;
};


// let str = "aab";
// [["a","a","b"],["aa","b"]]


// let str = "abc";

// let str = "aaba";
// console.log("返回分割方案:", partition(str));






// 
// let str1 = "cbbbcc";
let str1 = "aab";
console.log("返回分割方案:", partition(str1));
