let arr = [1, 2, 3];


console.log(arr.slice(1));
// [ 2, 3 ]
console.log(arr.slice(2));
// [3]
console.log(arr.slice(3));
//[]

console.log(arr.slice(-1));
// [ 3 ]

console.log(arr.slice(1, arr.length));
// [ 2, 3 ]


console.log(arr.slice(0, arr.length - 1));
// [ 1, 2 ]

console.log(arr.slice(0, -1));
// [ 1, 2 ]


let nums = [3, 4, 5];
let nums1 = nums.slice(1); // 去头
let nums2 = nums.slice(0, -1); // 去尾
console.log("nums1:", nums1, nums2);
// nums1: [ 4, 5 ] [ 3, 4 ]