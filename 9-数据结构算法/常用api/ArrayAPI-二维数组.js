

// let dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0));

// 初始化一个二维数组
let m, n = 5;
console.log("m:", m, n);   // undefined 5

var i, j = 10;
console.log("i:", i, j);  // undefined 10

// const arr = new Array(5).fill().map(() => new Array(5).fill(0));
const arr = new Array(5).fill().map(() => new Array(5).fill(0));
arr[0][0] = 1
console.log("arr: ", arr);
// arr:  [
//   [ 1, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ]
// ]

// 错误方式, 数组是引用类型, 第二维填充的是同一个数组
const err = new Array(5).fill(new Array(5).fill(0));

err[0][0] = 1
console.log("err: ", err);
// err:  [
//   [ 1, 0, 0, 0, 0 ],
//   [ 1, 0, 0, 0, 0 ],
//   [ 1, 0, 0, 0, 0 ],
//   [ 1, 0, 0, 0, 0 ],
//   [ 1, 0, 0, 0, 0 ]
// ]




// # 字符串没有反转的 api

// javascript实现反转字符串

// 思路：字符串转数组，反转数组，数组转字符串

// split("")：根据空字符串拆分数组

// reverse()：数组反转元素位置

// join("")：数组转回字符串,且不带分隔符