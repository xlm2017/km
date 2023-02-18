let s = "I'm a student!"

// 输入：s = "Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"

function reservseWord(s) {
  let start = 0
  let end = 0
  let res = ''
  while (end < s.length) {
    // 遇到空格, 说明是单词,或者是空格
    if (s[end] === ' ') {
      reserve(s, start, end)
      end = end + 1
    }
    // string移动方式
    end++
  }
  function reserve(s, start, end) {
    while (condition) {

    }
  }
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const ret = []
  const arr_length = s.length
  let i = 0
  while (i < arr_length) {
    let start = i
    while (i < arr_length && s[i] != " ") { //找每次的单词的起止位置
      i++
    }
    for (let p = start; p < i; p++) { //从后向前遍历
      ret.push(s.charAt(start + i - 1 - p))
    }
    while (i < arr_length && s[i] == " ") { //push空格
      i++;
      ret.push(" ")
    }
  }
  return ret.join("")
};