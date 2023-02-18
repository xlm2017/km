let arr = new Array(3)
arr.fill(1)
console.log(arr)

let arr2 = [1, 2]

console.log(arr.__proto__ === Array.constructor)  // false
console.log(arr2.__proto__ === Array.prototype)   // true
