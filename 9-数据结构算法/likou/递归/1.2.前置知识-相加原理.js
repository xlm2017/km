

// 59 + 66 = 125

// 9 + 6 = 15

// carry = 1
// 5 + 6 + 1 = 2
// 当前值 = (a + b + carry) mod 10

// 新的进位值:  (a + b + carry) / 10  取整


// let arr1 = [1, 2, 5, 9];

// let arr2 =    [9, 9, 6];

// 求两个数组相加得到新数组
function addArr(arr1, arr2) {
  // 数组可以直接倒序, 但是数组不等长, 不好做
  // for (let i = arr1.length - 1; i >= 0; i--) {
    
  // }

  // 对进位值的抽象 
  let carry = 0;
  let res = [];
  while(arr1.length || arr2.length || carry){
    let a = 0, b = 0;
    if(arr1.length){
      a = arr1.pop()
    }
    if(arr2.length){
      b = arr2.pop()
    }
    let c = (a + b + carry) % 10;
    carry = Math.floor((a + b + carry) / 10);
    res.unshift(c);
  }
  return res;
}


let arr1 = [9, 2, 5, 9];

let arr2 =    [9, 9, 6];
    // [ 1, 0, 2, 5, 5 ]

console.log(addArr(arr1, arr2));
