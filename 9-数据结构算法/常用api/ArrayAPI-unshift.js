

let arr = [5,6,7];

arr.unshift(3, 4);
console.log(arr);
// [ 3, 4, 5, 6, 7 ]


arr.unshift(...[1,2]);
console.log(arr);
// [ 1, 2, 3, 4, 5, 6, 7 ]