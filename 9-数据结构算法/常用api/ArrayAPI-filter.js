

// callbackFn 被调用时传入三个参数：

// 元素的值
// 元素的索引
// 被遍历的数组本身

// 151. 反转字符串中的单词

let s = "  hello world  "

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').filter(Boolean).reverse().join(' ');
};


var reverseWords2 = function(s) {
  
};

// 输出："world hello"
console.log(reverseWords(s));
console.log(reverseWords2(s));