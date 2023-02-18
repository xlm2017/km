

let a = {
  n: 1,
  next : null,
}

let b = a;

b.next = {
  s: 2
}

console.log(a);
// { n: 1, next: { s: 2 } }


console.log(b);
// { n: 1, next: { s: 2 } }


// 引用类型, b 指向了 a 的 地址

// 通过 a 或者 b 修改地址中的值, a, b 指向的值都会变化