/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-22 13:58:20
 * @LastEditTime: 2023-02-22 15:44:39
 * @LastEditors: xlm
 */


let str = "xiong是"

let b = Buffer.from(str);

console.log(b);
// 16进制
// <Buffer 78 69 6f 6e 67>

console.log(Array.from(b));
// [ 120, 105, 111, 110, 103 ]

console.log("str:", b.toString());
// str: xiong
// buf.toString([encoding[, start[, end]]])
// 根据 encoding 指定的字符编码解码 buf 成一个字符串。 start 和 end 可传入用于只解码 buf 的一部分。


// Buffer.isBuffer(obj)

// buf.equals(otherBuffer)
// 比较两个Buffer实例对象，如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。



function toArrayBuffer (myBuf) {
  var res = new Uint8Array(myBuf);
  return res;
}

function toArrayBuffer2 (myBuf) {
  var res = new Int8Array(myBuf);
  return res;
}
function toArrayBuffer3 (myBufint8) {
  var res = new Uint8Array(myBufint8);
  return res;
}

console.log(1, toArrayBuffer(b));
console.log(2, Array.from(toArrayBuffer2(b)));
console.log(3, toArrayBuffer3(toArrayBuffer2(b)));

// str: xiong是

// Uint8Array 0 到 255  8 位无符号整型
// 1 Uint8Array(8) [
//   120, 105, 111,
//   110, 103, 230,
//   152, 175
// ]

// Int8Array  -128 到 127  8 位有符号整型（补码） Java的字节范围 -128-127
// 2 [
//    120, 105, 111,
//    110, 103, -26,
//   -104, -81
// ]

// 互相转换  Int8Array ==>  Uint8Array
// 3 Uint8Array(8) [
//   120, 105, 111,
//   110, 103, 230,
//   152, 175
// ]