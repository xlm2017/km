
let arr = [
  1 === 1 && 2
];
console.log(arr);
// [ 2 ]


let arr2 = [
  1 === 2 && 2
];
console.log(arr2);
// [ false ]


let a = 1 === 2 && 123;
console.log(a);
// false

let a2 = 1 === 2 && 123 || 1;
console.log(a2);
// 1


let a3 = 1 === 2 && 123 || 0;
// 0