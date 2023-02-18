

let arr = ['A', 'C', 'B'];

arr.sort((a, b) => {
  // return b - a; // 无效
  return b.charCodeAt() - a.charCodeAt();
})

console.log('arr:', arr);