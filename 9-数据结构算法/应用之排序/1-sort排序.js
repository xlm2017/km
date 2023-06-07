

let arr = [4, 2, 1, 3, 5];

arr.sort((a, b)=>{
  return a - b;
})

// [1, 2, 3, 4, 5]

// compareFn(a, b) 返回值       

// < 0         [a, b]
// > 0         [b, a]
// === 0      保持 a 和 b 原来的顺序


