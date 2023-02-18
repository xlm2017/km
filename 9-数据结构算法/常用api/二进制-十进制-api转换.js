// 我们将十进制转为二进制，简单一点的可以使用num.toString(2)这个方法，即可转为二进制.例如：
// 128.toString(2) 得到的结果即为10000000, 所以这题就好办了，直接看JS代码：


function valueAtBit(num, bit) {
  var str2 = num.toString(2)
  return str2[str2.length - bit]
}


var num = 11000000;
console.log(parseInt(num,2));
// 输出结果为：192 


function convertToBinary(num) {
  var str = num.toString(2)
  // 8- str.length 即获取到与8位相差几位
  for(let i = 0; i < 8 - str.length; i++) {
      // 注意，是'0' + str 而不是str + '0'
      str  = '0' + str
  }
  return str
}
