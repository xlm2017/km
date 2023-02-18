

let a = 12345;


let d = a % 10;
let aa = a / 10;

console.log(d);   // 5
console.log(aa);  // 1234.5
console.log(Number.parseInt(aa));  // 1234



while (a > 0) {
  let d = a % 10;
  a = Number.parseInt(a / 10);
  console.log(d, a);
}