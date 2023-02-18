// 非负整数（正整数 + 0 ）:

// let reg = /d+$/;
let reg = /\d+$/;   // 不能忘记\
let num1 = 123
let num11 = "q123";

console.log('c:', reg.test(num1));
console.log('c:', reg.test(num11));





// 正整数

let reg2 = /^[0-9]*[1-9][0-9]*$/
let num2 = '0123';
console.log("正整数:", reg2.test(num2));


