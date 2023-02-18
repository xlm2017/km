

let a = {
  n: 1,
  next : null,
}

let b = a;

b.next = {
  s: 2
}

b = {
  t: 3
}

console.log(a);
// { n: 1, next: { s: 2 } }


console.log(b);
// { n: 1, next: { s: 2 } }
// b指向了新的字面量所代表的地址, a的指向还是不变, 但是值通过 b指针没改之前 修改了一次值
