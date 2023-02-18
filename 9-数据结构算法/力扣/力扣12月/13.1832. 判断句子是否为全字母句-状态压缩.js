// 全字母句 指包含英语字母表中每个字母至少一次的句子。

// 给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为 全字母句 。

// 如果是，返回 true ；否则，返回 false 。

 

// 示例 1：

// 输入：sentence = "thequickbrownfoxjumpsoverthelazydog"
// 输出：true
// 解释：sentence 包含英语字母表中每个字母至少一次。
// 示例 2：

// 输入：sentence = "leetcode"
// 输出：false
 

// 提示：

// 1 <= sentence.length <= 1000
// sentence 由小写英语字母组成

/**
 * @param {string} sentence
 * @return {boolean}
 */

// 用二进制数来表示出现的字符

var checkIfPangram = function(sentence) {
  let p = 0;
  for(let i = 0; i < sentence.length; i++) {
    // console.log("计算:", sentence[i].charCodeAt() - 'a'.charCodeAt());
    p |= (1 << (sentence[i].charCodeAt() - 'a'.charCodeAt()));
  }
  return p == (1 << 26) - 1;
};

let sentence = "thequickbrownfoxjumpsoverthelazydog";

console.log(checkIfPangram(sentence));