// 给定一个字符串 s，统计并返回具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是成组连续的。

// 重复出现（不同位置）的子串也要统计它们出现的次数。


// 示例 1：

// 输入：s = "00110011"
// 输出：6
// 解释：6 个子串满足具有相同数量的连续 1 和 0 ："0011"、"01"、"1100"、"10"、"0011" 和 "01" 。
// 注意，一些重复出现的子串（不同位置）要统计它们出现的次数。
// 另外，"00110011" 不是有效的子串，因为所有的 0（还有 1 ）没有组合在一起。
// 示例 2：

// 输入：s = "10101"
// 输出：4
// 解释：有 4 个子串："10"、"01"、"10"、"01" ，具有相同数量的连续 1 和 0 。


// 提示：

// 1 <= s.length <= 105
// s[i] 为 '0' 或 '1'


/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let arr = [];
  let start = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      arr.push(i - start + 1);
      start = i + 1;
    }
  }
  if (s.length - start > 0) {
    arr.push(s.length - start);
  }
  console.log("arr:", arr);
  // let sum = arr.reduce((pre, cur) => pre + cur);
  // return sum - Math.max(...arr);
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += Math.min(arr[i - 1], arr[i]);
  }
  return sum;
};


// let s = "00110011"
// 输出：6

// let s = "00110";
// 3

let s = "00100";
// 2


console.log(countBinarySubstrings(s));