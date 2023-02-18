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
  // 切割点组合问题
  let k = s.length - 1;
  let res = [];
  let stack = [];
  let stackIndex = [];
  function backstracking (string, k, index, end) {
    if (k === 0) {
      let arr = JSON.parse(JSON.stringify(stack));
      let start = stackIndex[stackIndex.length - 1] + 1;
      if (start <= string.length - 1) {
        let remainStr = string.slice(start, string.length);
        if (isOkSub(remainStr)) {
          arr.push(remainStr);
        } else {
          return;
        }
      }
      res.push(arr);
      return;
    }

    for (let i = index; i < string.length + end; i++) {
      let start = 0;
      if (stackIndex.length) {
        start = stackIndex[stackIndex.length - 1] + 1;
      }
      if (start >= i + 1) {
        continue;
      }
      if (stack === string.length) {
        end = 1;
      }
      let ele = string.slice(start, i + 1);

      if (!isOkSub(ele)) {
        continue;
      }
      stack.push(ele);
      stackIndex.push(i);
      backstracking(string, k - 1, index + 1, end);
      // 回溯
      stack.pop();
      stackIndex.pop();
    }
  }
  backstracking(s, k, 0, 0);

  if (s.length > 2 && isOkSub(s)) {
    res.push([s]);
  }
  return res;
};


// let str = "aab";
// [["a","a","b"],["aa","b"]]


// let str = "abc";

// let str = "efe";
// let str = "eee";
// let str = "bb";
// let str = "bbbb";
// console.log("返回分割方案:", partition(str));



let str1 = "cbbbc";
// [["a","b","b","a","b"],["a","b","bab"],["a","bb","a","b"],["abba","b"]]
console.log("返回分割方案:", partition(str1));
