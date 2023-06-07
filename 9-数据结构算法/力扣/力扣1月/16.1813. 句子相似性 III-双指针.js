// 一个句子是由一些单词与它们之间的单个空格组成，且句子的开头和结尾没有多余空格。比方说，"Hello World" ，"HELLO" ，"hello world hello world" 都是句子。
// 每个单词都 只 包含大写和小写英文字母。

// 如果两个句子 sentence1 和 sentence2 ，可以通过往其中一个句子插入一个任意的句子（可以是空句子）而得到另一个句子，那么我们称这两个句子是 相似的 。
// 比方说，sentence1 = "Hello my name is Jane" 且 sentence2 = "Hello Jane" ，我们可以往 sentence2 中 "Hello" 和 "Jane" 之间插入 "my name is" 得到 sentence1 。

// 给你两个句子 sentence1 和 sentence2 ，如果 sentence1 和 sentence2 是相似的，请你返回 true ，否则返回 false 。



// 示例 1：

// 输入：sentence1 = "My name is Haley", sentence2 = "My Haley"
// 输出：true
// 解释：可以往 sentence2 中 "My" 和 "Haley" 之间插入 "name is" ，得到 sentence1 。
// 示例 2：

// 输入：sentence1 = "of", sentence2 = "A lot of words"
// 输出：false
// 解释：没法往这两个句子中的一个句子只插入一个句子就得到另一个句子。
// 示例 3：

// 输入：sentence1 = "Eating right now", sentence2 = "Eating"
// 输出：true
// 解释：可以往 sentence2 的结尾插入 "right now" 得到 sentence1 。
// 示例 4：

// 输入：sentence1 = "Luky", sentence2 = "Lucccky"
// 输出：false


// 提示：

// 1 <= sentence1.length, sentence2.length <= 100
// sentence1 和 sentence2 都只包含大小写英文字母和空格。
// sentence1 和 sentence2 中的单词都只由单个空格隔开。


/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {

  const words1 = sentence1.split(" ");
  const words2 = sentence2.split(" ");
  let i = 0, j = 0;
  while (i < words1.length && i < words2.length && words1[i] === words2[i]) {
    console.log("相等i:", i);
    i++;
  }
  while (j < words1.length - i && j < words2.length - i && words1[words1.length - j - 1] === words2[words2.length - j - 1]) {
    console.log("相等j:", i);
    j++;
  }
  // console.log("i-j:", i, j);
  return i + j == Math.min(words1.length, words2.length);

  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/sentence-similarity-iii/solutions/2062566/ju-zi-xiang-si-xing-iii-by-leetcode-solu-vjy7/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

};

// let sentence1 = "My name is Haley", sentence2 = "My Haley";

// let sentence1 = "of", sentence2 = "A lot of words";

// let sentence1 = "Luky", sentence2 = "Lucccky";

let sentence1 = "A";
let sentence2 = "a A b A";
// true;

console.log(areSentencesSimilar(sentence1, sentence2));



// 字符串按空格分割 + 双指针

// 思路

// 根据题意，两个句子 sentence1 和 sentence2
​
//  ，如果是相似的，那么这两个句子按空格分割得到的字符串数组 words1和 words2，

// 一定能通过往其中一个字符串数组中插入某个字符串数组（可以为空），得到另一个字符串数组。

// 这个验证可以通过双指针完成。

// i 表示两个字符串数组从左开始，最多有 i 个字符串相同。
// j 表示剩下的字符串数组从右开始，最多有 j 个字符串相同。
// 如果 i+j 正好是某个字符串数组的长度，那么原字符串就是相似的。
