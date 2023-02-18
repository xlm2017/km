// 给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的 重复值为 k 。单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。如果 word 不是 sequence 的子串，那么重复值 k 为 0 。

// 给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。



// 示例 1：

// 输入：sequence = "ababc", word = "ab"
// 输出：2
// 解释："ab" 是 "ababc" 的子字符串。
// 示例 2：

// 输入：sequence = "ababc", word = "ba"
// 输出：1
// 解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。
// 示例 3：

// 输入：sequence = "ababc", word = "ac"
// 输出：0
// 解释："ac" 不是 "ababc" 的子字符串。


/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  // let max = 0;
  // for (let i = 0; i < sequence.length; i++) {
  //   const ele1 = sequence[i];

  //   for (let j = 0; j < word.length; j++) {
  //     const ele2 = word[j];
  //     console.log("word[i]:", ele2)
  //   }


  //   if (ele1 === word[i]) {
  //     // 当前句子的单词 等于 字句的开头
  //   }

  //   let k = 0;
  //   while (k < word.length) {
  //     console.log("word--:", word[k]);
  //     k++;
  //   }

  //   console.log("=================================");
  // }

  // return max;




  // 
  let str = '123blqqqq45blaa'
  var v = "bl";
  // var reg = new RegExp("^\d+" + v + "$", "gim"); // re为/^d+bl$/gim
  // let reg = /\d+bl/;
  // let reg = /\d+${v}/;

  // var reg = new RegExp("\\d+" + v, 'g');
  // console.log("正则:", reg);
  // console.log("测试正则:", reg.test(str));
  // console.log("正则匹配组:", str.match(reg));
  // let res = str.replace(reg, 'ss')
  // console.log("res:", res);



  // var reg = new RegExp(word, 'g');
  // console.log("结过:", sequence.match(reg));
  // if (!sequence.match(reg)) {
  //   return 0;
  // } else {
  //   return sequence.match(reg).length;
  // }

  let k = Math.ceil(sequence.length / word.length);
  let res = 0;
  while (k >= 1) {
    let string = new Array(k).fill(word).join("");
    console.log("string:", string);
    var reg = new RegExp(string, 'g');
    console.log("正则匹配组:", sequence.match(reg), k);
    if (sequence.match(reg)) {
      return k;
    }
    k--;
  }
  return res;
};

// let sequence = "ababc";
// let word = "ab";

let sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
let word = "aaaba";
// 预期5


console.log(maxRepeating(sequence, word));