

// 这题的技巧就是使用nums记录移动i次后每个位置巧克力的最小值（包括之前移动过程中可能存在的更小值），
// 不需要关心每个巧克力是何时被取走的，只需要在每次移动后计算nums的总和+x*i即可
function test3(nums, x) {
  // 模拟-枚举-抄的
  let n = nums.length;
  let sum = 0;
  let copy = new Array(n);
  for (let i = 0; i < n; i++) {
    copy[i] = nums[i];
    sum += nums[i];
  }
  let cost = 0;
  // n - i 旋转
  for (let i = 1; i < n; i++) {
    cost = i * x; 
    if (cost > sum) {
      break;
    }
    for (let j = 0; j < n; j++) {
      copy[j] = Math.min(copy[j], nums[(i + j) % n]);
      cost += copy[j];
    }
    if (cost < sum) {
      sum = cost;
    }
  }
  return sum;
}

// let nums = [20,1,15], x = 5
// 输出：13


let nums = [15, 150, 56, 69, 214, 203], x = 42;
// let nums = [15,150,56,69,214,203], x = 42;
// 298
// [ 203, 214, 69, 56, 150 ]

// let nums = [31,25,18,59], x = 27;
// 119

console.log(test3(nums, x));