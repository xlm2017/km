

let a = {
  n: 1
}

let b = a;
// 每一个变量都有一个指针, b的指针指向了 a的指针指向的地址.


b = 1;
// b的指针切换了方向, 指向了字面量 1 所代表的地址.

let c = b;
console.log(c);
// 1

c = {
  s: 1
}
// c的指针又换了一个指向的地址, 换成字面量 {s:1}所在的地址

console.log(a);
// { n: 1 }

console.log(b);
// 1

console.log(c);
// { s: 1 }

// 