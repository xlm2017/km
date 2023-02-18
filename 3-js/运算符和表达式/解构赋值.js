var a, b;

[a = 5, b = 7, c = 9] = [1, undefined];
console.log(a); // 1
console.log(b); // 7
console.log(c); // 9


let { foo, bar, ccc = '111', ddd = '222' } = { foo: "aaa", bar: "bbb", ddd: undefined };
// foo = "aaa"
// bar = "bbb"
// ccc = '111'
// ddd = '222'
console.log(foo, bar, ccc, ddd);


// 交换变量
let x = 1;
let y = 2;

[x, y] = [y, x];