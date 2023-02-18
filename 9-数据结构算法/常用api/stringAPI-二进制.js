


// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt


// String.prototype.codePointAt()
// codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。

// 语法
// str.codePointAt(pos)
// Copy to Clipboard
// 参数
// pos
// 这个字符串中需要转码的元素的位置。

// 返回值
// 返回值是在字符串中的给定索引的编码单元体现的数字，如果在索引处没找到元素则返回 undefined 。

// 描述
// 如果在指定的位置没有元素则返回 undefined。如果在索引处开始没有 UTF-16 代理对，将直接返回在那个索引处的编码单元。


// 'ABC'.codePointAt(1);          // 66
// '\uD800\uDC00'.codePointAt(0); // 65536

// 'XYZ'.codePointAt(42); // undefined




// String.prototype.charCodeAt()
// charCodeAt() 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元

// str.charCodeAt(index)


// 参数
// index
// 一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。

// 返回值
// 指定 index 处字符的 UTF-16 代码单元值的一个数字；如果 index 超出范围，charCodeAt() 返回 NaN。

// 描述
// Unicode 码点（code points）的范围从 0 到 1114111 (0x10FFFF）。开头的 128 个 Unicode 编码单元和 ASCII 字符编码一样。（关于 Unicode 的更多信息，可查看 JavaScript Guide。）






let a = '\n';
// 换行符 

console.log(a.charCodeAt());    // 10



let b = " ";
// 空格

console.log(b.charCodeAt());    // 32


// ascii 编码
// ASCII (American Standard Code for Information Interchange)：
// 美国信息交换标准代码是基于拉丁字母的一套电脑编码系统，主要用于显示现代英语和其他西欧语言。
// 它是最通用的信息交换标准，并等同于国际标准 ISO/IEC 646。
// ASCII第一次以规范标准的类型发表是在1967年，最后一次更新则是在1986年，到目前为止共定义了128个字符 [1]  