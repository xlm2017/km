// 有时候人们会用重复写一些字母来表示额外的感受，比如 "hello" -> "heeellooo", "hi" -> "hiii"。我们将相邻字母都相同的一串字符定义为相同字母组，例如："h", "eee", "ll", "ooo"。

// 对于一个给定的字符串 S ，如果另一个单词能够通过将一些字母组扩张从而使其和 S 相同，我们将这个单词定义为可扩张的（stretchy）。扩张操作定义如下：选择一个字母组（包含字母 c ），然后往其中添加相同的字母 c 使其长度达到 3 或以上。

// 例如，以 "hello" 为例，我们可以对字母组 "o" 扩张得到 "hellooo"，但是无法以同样的方法得到 "helloo" 因为字母组 "oo" 长度小于 3。此外，我们可以进行另一种扩张 "ll" -> "lllll" 以获得 "helllllooo"。
// 如果 s = "helllllooo"，那么查询词 "hello" 是可扩张的，因为可以对它执行这两种扩张操作使得 query = "hello" -> "hellooo" -> "helllllooo" = s。

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
  for (let j = 0; j < words.length; j++) {
    // 双指针
    // 当前词语
    let word = words[j];

    // s的指针
    let x = 0;

    // 扩张次数2次以上
    let times = 0;
    let isOk = true;
    for (let k = 0; k < word.length; k++) {
      //遍历到s字符串结尾
      while (x < s.length) {
        if (word[k] !== s[x]) {
          console.log('字符不一致:', word, k, word[k], s[x]);
          // 第一位字符不一致, 直接无效
          if (x === 0) {
            isOk = false;
            break;
          }
          // 第二位及以上字符不一致, 考虑s字符串前一个字符扩展
          if (s[x - 1] !== s[x]) {
            console.log("第二位及以上字符不一致-s:", s, x, word, word[k]);
            isOk = false;
            break;
          }
          times++;
          x++;
          continue;
        } else {
          // 没有扩展或者扩展符合规则
          if (times === 0 || times >= 2) {
            if (k === word.length - 1) {

              // word一置, 并且word没有字符了,检测s剩余的字符是否都可以扩展2位以上
              while (x < s.length) {
                if (s[x] !== word[k]) {
                  times++;
                  x++;
                } else {
                  x++;
                }
              }
              // 观察是否x也到最后一位,且扩展0次或者2次以上

            } else {
              // x消耗一位
              x++;
              break;
            }
          } else {
            isOk = false;
            break;
          }
        }
      }
      if (!isOk) {
        continue;
      } else {
        if (k === word.length - 1) {
          res.push(word);
        }
      }
    }

  }
  return res;
};

let s1 = "heeellooo"
let words1 = ["hello", "hi", "helo"]
// 1
console.log("对比串:", s1);
console.log("结果:", expressiveWords(s1, words1));


// 一次遍历, 条件过于复杂, 分支太多了

// 思路, 先构造, 忽略细节, 抽象细节, 封装细节