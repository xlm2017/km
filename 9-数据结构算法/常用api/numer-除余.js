

console.log(102 % 100);  // 2
console.log(102 % 10);   // 2


var shi = 100000
var s_w = parseInt(shi / 100000)
var w = parseInt(shi % 100000 / 10000)
var q = parseInt(shi % 100000 % 10000 / 1000)
var b = parseInt(shi % 100000 % 10000 % 1000 / 100)
var s = parseInt(shi % 100000 % 10000 % 1000 % 100 / 10)
var g = parseInt(shi % 100000 % 10000 % 1000 % 100 % 10 / 1)
//个位 console.log(g)  
//十位 console.log(s)
//百位 console.log(b)
//千位 console.log(q)
//万位 console.log(w)
//十万位 console.log(s_w)