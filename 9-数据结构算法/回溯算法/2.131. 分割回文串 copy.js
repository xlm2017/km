// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。



// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 2：

// 输入：s = "a"
// 输出：[["a"]]


// 提示：

// 1 <= s.length <= 16
// s 仅由小写英文字母组成


/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {

};


// let str = "aab";
// [["a","a","b"],["aa","b"]]


// let str = "abc";

// let str = "aaba";
// console.log("返回分割方案:", partition(str));




let str1 = "abbab";
// let str1 = "abbbbbbab";
// [['a', 'b', 'b', 'a', 'b'], ['a', 'bb', 'a', 'b']]

// [["a","b","b","a","b"],["a","b","bab"],["a","bb","a","b"],["abba","b"]]
console.log("返回分割方案:", partition(str1));
