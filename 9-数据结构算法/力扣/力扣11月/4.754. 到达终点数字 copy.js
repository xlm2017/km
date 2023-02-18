
// 在一根无限长的数轴上，你站在0的位置。终点在target的位置。


// 你可以做一些数量的移动 numMoves :

// 每次你可以选择向左或向右移动。
// 第 i 次移动（从  i == 1 开始，到 i == numMoves ），在选择的方向上走 i 步。
// 给定整数 target ，返回 到达目标所需的 最小 移动次数(即最小 numMoves ) 。



// 示例 1:

// 输入: target = 2
// 输出: 3
// 解释:
// 第一次移动，从 0 到 1 。
// 第二次移动，从 1 到 -1 。
// 第三次移动，从 -1 到 2 。
// 示例 2:

// 输入: target = 3
// 输出: 2
// 解释:
// 第一次移动，从 0 到 1 。
// 第二次移动，从 1 到 3 。

// -10^9 <= target <= 10^9
// target != 0


// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory

/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  if (target == 0) return 0;
  let start = 0;
  let step = 1;
  // while (start !== target) {
  while (true) {
    // 逻辑主体
    // 优化逻辑主体, 判断大小
    if (start < target) {
      start = start + step
      console.log(`加step:${step}`, start);

      step++;
      if (step > 100) {
        return `太多了${start}`;
      }
      continue;
    }
    if (start > target) {
      start = start - step
      console.log(`减step:${step}=`, start);

      step++;
      if (step > 100) {
        return `太多了${start}`;
      }
      continue;
    }
    if (start === target) {
      console.log("找到目标值:", step);
      return step;
    }
    if (step > 100) {
      return `太多了${start}`;
    }
    // step++;
  }
  // return step;
};

console.log("最小步骤:", reachNumber(9));
console.log("\n==========================")
// console.log("最小步骤:", reachNumber(91));

// 0 1 3 6  // 3步


// 9
// 1  3  6  10  15  9   // 6步到达

// 1  3  6  10  5   11  4  12  3  13  // 大小判断

// 1  3  6  10  5   -1  6  -2  7  -3  8  -4  9 


// 判断偏左还是偏右

// 3       6
// 4       9
// 5  5    10   15
// 6  11   9    9   21  


// (start + step) % target

// ( 10 + 5 ) % 9 = 6 - 9 == 9

// ( 10 - 5 ) % 9 = 


// let r1 = 5 % 9
console.log(r1); // 5