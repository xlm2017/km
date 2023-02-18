// ['1', '2', '3'].map(parseInt) what & why ? #4

// 第一眼看到这个题目的时候，脑海跳出的答案是 [1, 2, 3]，但是真正的答案是[1, NaN, NaN]。

// 首先让我们回顾一下，map函数的第一个参数callback：
// var new_array = arr.map(function callback(currentValue[, index[, array]]) { // Return element for new_array }[, thisArg])
// 这个callback一共可以接收三个参数，其中第一个参数代表当前被处理的元素，而第二个参数代表该元素的索引。

// 而parseInt则是用来解析字符串的，使字符串成为指定基数的整数。
// parseInt(string, radix)
// 接收两个参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。

// 了解这两个函数后，我们可以模拟一下运行情况

// parseInt('1', 0) //radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1
// parseInt('2', 1) //基数为1（1进制）表示的数中，最大值小于2，所以无法解析，返回NaN
// parseInt('3', 2) //基数为2（2进制）表示的数中，最大值小于3，所以无法解析，返回NaN

// map()
// function(currentValue, index,arr)	必须。函数，数组中的每个元素都会执行这个函数
// 函数参数:
// 参数	描述
// currentValue	必须。当前元素的值
// index	可选。当前元素的索引值
// arr	可选。当前元素属于的数组对象
// thisValue	可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
// 如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。