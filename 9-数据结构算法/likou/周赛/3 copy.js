


function test3(nums, x) {
  let min = Math.min(...nums);
  let sum = min;
  let index = nums.indexOf(min);
  let arr = nums.slice(0, index);
  arr.push(...nums.slice(index + 1, nums.length).reverse());
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let val = Math.min(min + x, arr[i]);
    console.log(min , val);
    sum += val;
  }
  return sum;
}

// let nums = [20,1,15], x = 5
// 输出：13


let nums = [15,150,56,69,214,203], x = 42;
// let nums = [15,150,56,69,214,203], x = 42;
// 298
// [ 203, 214, 69, 56, 150 ]

// let nums = [31,25,18,59], x = 27;
// 119

console.log(test3(nums, x));