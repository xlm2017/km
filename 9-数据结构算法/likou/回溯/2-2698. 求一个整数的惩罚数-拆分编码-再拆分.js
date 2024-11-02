

// 分割字符串, 看有多少种分割方式

var punishmentNumber = function (str) {
  let res = [];
  let stack = [];
  function dfs(start) {
    if (start === str.length) {
      let arr = stack.slice();
      res.push(arr);
      let s = arr.reduce((p, c) => p + c);
      console.log("s:", s);
      return;
    }
    for (let i = start; i < str.length; i++) {
      let a = str.slice(start, i + 1) * 1;
      stack.push(a);
      dfs(i + 1);
      stack.pop()
    }
  }

  dfs(0)

  return res;
};

let str = "1296"
// 因为 36 * 36 = 1296 ，且 1296 可以分割成 1 + 29 + 6 。


console.log(punishmentNumber(str));