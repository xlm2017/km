// 给你一个字符串 s ，考虑其所有 重复子串 ：即 s 的（连续）子串，在 s 中出现 2 次或更多次。这些出现之间可能存在重叠。

// 返回 任意一个 可能具有最长长度的重复子串。如果 s 不含重复子串，那么答案为 "" 。



// 示例 1：

// 输入：s = "banana"
// 输出："ana"
// 示例 2：

// 输入：s = "abcd"
// 输出：""


// 提示：

// 2 <= s.length <= 3 * 104
// s 由小写英文字母组成


var longestDupSubstring = function (s) {
  
};

// let s = "banana";
// "ana"

// let s = "abcabc";

// let s = "abcd";
// ""

let s = "nnpxouomcofdjuujloanjimymadkuepightrfodmauhrsy";
// ma
// fodmauhr 错误的


// l <= r
// let s = "aa";
// "a"

console.log(longestDupSubstring(s));




// 后缀数组是后缀树的一种变种，能够节省空间。构造的方法有「倍增算法」，「DC3算法」。
