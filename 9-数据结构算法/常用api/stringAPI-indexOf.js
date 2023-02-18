let str = 'stts';

// indexOf(searchString, position)
// 该方法返回指定子字符串在大于或等于 position 位置的第一次出现的索引，默认为 0。
// 如果 position 大于调用字符串的长度，则该方法根本不搜索调用字符串。
// 如果 position 小于零，该方法的行为就像 position 为 0 时一样。

console.log(str.indexOf('t', 0));  // 1
console.log(str.indexOf('t', 1));  // 1
console.log(str.indexOf('t', 2));  // 2

console.log(str.indexOf('s', 0));  // 0
console.log(str.indexOf('s', 1));  // 3

