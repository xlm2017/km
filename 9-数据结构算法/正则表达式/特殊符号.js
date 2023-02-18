// 思路如下: \s : 表示 space ,空格 +: 一个或多个 ^: 开始,^\s,以空格开始 $: 结束,\s$,以空格


// 匹配空格

let a = ' ';
let reg = /\s/;

console.log(reg.test(a));   // true





let b = "a  b  c   ";

console.log(b.replace(' ', '1'));   // a1 b  c  // 只匹配了一个空格

console.log(b.replace(/\s/g, '1'));   // a11b11c111  // 匹配了全部的空格



console.log(b.replaceAll(' ', '1'));   // a1 b  c  // 报错, 只能使用 正则表达式

// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
// The pattern can be a string or a RegExp, 
// and the replacement can be a string or a function to be called for each match. 
// The original string is left unchanged.