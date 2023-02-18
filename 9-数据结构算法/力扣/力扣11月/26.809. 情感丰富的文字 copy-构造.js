// 有时候人们会用重复写一些字母来表示额外的感受，比如 "hello" -> "heeellooo", "hi" -> "hiii"。我们将相邻字母都相同的一串字符定义为相同字母组，例如："h", "eee", "ll", "ooo"。

// 对于一个给定的字符串 S ，如果另一个单词能够通过将一些字母组扩张从而使其和 S 相同，我们将这个单词定义为可扩张的（stretchy）。扩张操作定义如下：选择一个字母组（包含字母 c ），然后往其中添加相同的字母 c 使其长度达到 3 或以上。

// 例如，以 "hello" 为例，我们可以对字母组 "o" 扩张得到 "hellooo"，但是无法以同样的方法得到 "helloo" 因为字母组 "oo" 长度小于 3。此外，我们可以进行另一种扩张 "ll" -> "lllll" 以获得 "helllllooo"。如果 s = "helllllooo"，那么查询词 "hello" 是可扩张的，因为可以对它执行这两种扩张操作使得 query = "hello" -> "hellooo" -> "helllllooo" = s。

// 输入一组查询单词，输出其中可扩张的单词数量。



// 示例：

// 输入：
// s = "heeellooo"
// words = ["hello", "hi", "helo"]
// 输出：1
// 解释：
// 我们能通过扩张 "hello" 的 "e" 和 "o" 来得到 "heeellooo"。
// 我们不能通过扩张 "helo" 来得到 "heeellooo" 因为 "ll" 的长度小于 3 。


// 提示：

// 1 <= s.length, words.length <= 100
// 1 <= words[i].length <= 100
// s 和所有在 words 中的单词都只由小写字母组成。


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  let res = [];
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr.length) {
      if (s[arr[arr.length - 1]] !== s[i]) {
        arr.push(i);
      }
    } else {
      arr.push(i);
    }
  }
  arr.push(s.length);
  console.log('下标队列:', arr);

  let wordsIndexs = [];
  for (let i = 0; i < words.length; i++) {
    let arr = [];
    for (let j = 0; j < words[i].length; j++) {
      if (arr.length) {
        if (words[i][arr[arr.length - 1]] !== words[i][j]) {
          arr.push(j);
        }
      } else {
        arr.push(j);
      }
    }
    arr.push(words[i].length);
    console.log('arr:', arr, words[i]);
    wordsIndexs.push(arr);
  }
  for (let i = 0; i < wordsIndexs.length; i++) {
    let wordIndexs = wordsIndexs[i];
    if (arr.length !== wordIndexs.length) {
      continue;
    }
    for (let j = 0; j < wordIndexs.length; j++) {
      const index = wordIndexs[j];
      if (arr[j] < s.length && s[arr[j]] !== words[i][index]) {
        console.log('比较:', s[arr[j]], words[i][index]);
        break;
      }
      if (j > 0) {
        let num1 = arr[j] - arr[j - 1];
        let num2 = wordIndexs[j] - wordIndexs[j - 1];
        console.log('差别:', words[i], num1, num2);
        // num2具有扩展性, 扩展两个及以上, 3倍以上
        if ((num1 >= 3 && num1 - num2 >= 1) || num2 === num1) {
          // console.log('差别2:', words[i], num1, num2, arr, wordIndexs, j);
          if (j === wordIndexs.length - 1) {
            // 最后一个字母了
            // 计算长度
            // let numS = s.length - arr[j] - 1;
            // let numW = words[i].length - wordIndexs[j] - 1;
            // if ((num1 - num2) >= 2 || num2 === num1) {
            res.push(words[i]);
            // }
          }
          // continue;
        } else {
          // console.log('差别1:', words[i], num1, num2, arr, wordIndexs, j);
          break;
        }
      } else {
        // continue;
      }
      // console.log('j:', j);
      // res.push(words[i]);
    }
  }
  return res.length;
};

// let s1 = "heeellooo";
// let words1 = ["hello", "hi", "helo"];
// let words1 = ["hello", "hi", "helloo"];
// 1

// let s1 = 'dddiiiinnssssssoooo';
// let words1 = ["dinnssoo", "ddinso", "ddiinnso", "ddiinnssoo", "ddiinso", "dinsoo", "ddiinsso", "dinssoo", "dinso"];
// 3


let s1 = 'heeellooo';
let words1 = ["hello", "hi", "helo"];
// 1

console.log("对比串:", s1);
console.log("结果:", expressiveWords(s1, words1));


// 一次遍历, 条件过于复杂, 分支太多了

// 思路, 构造, 忽略细节, 抽象细节, 封装细节, 压缩细节, 冷处理细节,  统一细节  借助构造, 构造结构