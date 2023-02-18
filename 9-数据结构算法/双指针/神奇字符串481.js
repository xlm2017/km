/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  let s = '1';
  let i = 0; // 准备构造下一个数的构造下标

  while (i < n) {
    // i指针, 每变化一次,  s新增的数变化一次
    if (s[i] == 1) {
      if (s.length == 1) {
        i++;
        s += "22"
        continue;
      }
      s += "2"
    } else {
      s += '1'
    }
    // console.log("s值1:", s);
    if (s[i] == 2) {
      s += s[s.length - 1];
      console.log("s值1:", s, s[i]);
    }
    i++;
  }

  let sum = 0;
  s = s.slice(0, n);
  console.log("字符串s:", s);
  for (let k = 0; k < s.length; k++) {
    if (s[k] == 1) {
      sum++
    }
  }
  return sum;
};

// let res = magicalString(6);
// console.log("res:", res);

// 122 1121 22122 1 121122


// 1    2     2     1     1     2     1     2     2

// 1    22    11    2     1     22    1     22    11    22





// 正确的
function magicalString2 (n) {
  if (!n) return 0;
  let s = '1';
  let i = 1;  // 构建后面的字符数量的下标
  let sum = 1;
  while (s.length < n) {
    if (s[s.length - 1] == 1) {
      s = s + '2'
      if (s.length == n) {
        return sum;
      }
      if (s[i] == 2) {
        s = s + '2'
      }
    } else {
      s = s + '1'
      sum++;
      if (s.length == n) {
        return sum;
      }
      if (s[i] == 2) {
        s = s + '1';
        sum++;
      }
    }
    i++
  }
  // let sum = 0;
  // s = s.slice(0, n);
  // console.log("字符串s:", s);
  // for (let k = 0; k < s.length; k++) {
  //   if (s[k] == 1) {
  //     sum++
  //   }
  // }
  return sum;
}

let res2 = magicalString2(10);

console.log("res2:", res2);

