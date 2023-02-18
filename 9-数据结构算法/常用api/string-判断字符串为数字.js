

let a = '1'
let a0 = '0'

let b = 'b'

console.log(Number(a));  // 1
console.log(Number(b));  // NAN

if (Number(a)) {
  console.log('a'); // a
}
if (Number(a0)) {
  console.log('a0');  // 不打印

}
if (Number(b)) {     // 不打印
  console.log('b');
}

if (!isNaN(parseFloat(a))) {
  console.log('number');  // // 打印
}


Number("Hello", 10);//return NAN  

Number("110", 10);//return 110 

Number("t2110", 10);//return NAN  

Number("1f10g", 10);//return NAN



// Number.isInteger判断值是否是整数：

Number.isInteger(1);   // true
Number.isInteger('1'); // false
Number.isInteger(1.1); // false


// parseInt、parseFloat
// 这个方法的特点，一句话，返回字符串开头最长的有效数字。

let str1 = '123';
let str2 = 'abc';
!isNaN(parseFloat(str1)); // true，是数字
!isNaN(parseFloat(str2)); // false，不是数字



NaN === NaN;         // false
NaN == NaN;          // false
Object.is(NaN, NaN); // false


Number(true);         // 1
Number(false);        // 0
Number(null);         // 0
Number('');           // 0


// 4. Number.isNaN、Number.isFinite
// 这两个方法跟对应的全局方法是不一样的。

// Number.isNaN(value)，如果value为NaN返回true，否则返回false。
// Number.isFinite(value)，如果value为数值，且不等于Infinity或-Infinity返回true，否则返回false。
// 区别是全局方法会有强制类型转换，而这两个方法没有强制类型转换：

Number.isNaN(null);      // true
Number.isNaN(true);      // true
Number.isNaN(false);     // true
Number.isNaN('');        // true
// ————————————————
// 版权声明：本文为CSDN博主「普通网友」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/qq_46416934/article/details/126105399


正则表达式
let exp = /^[+-]?d*(.d*)?(e[+-]?d+)?$/;
exp.test('+1.9');   // true
exp.test('-.1e11'); // true
// 这个正则可以判断整数、浮点数、正负数和科学计数法。

// 不过我觉得判断是否是数值用正则，有点小题大做了。

// 6. 终极方案（推荐）
// 我们先看方案：
!isNaN(parseFloat(value)) && isFinite(value);