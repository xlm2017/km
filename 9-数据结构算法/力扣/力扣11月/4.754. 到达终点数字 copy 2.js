
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
  // 1...k
  // 假设k为最小的满足
  target = Math.abs(target);
  let start = 0;
  let step = 0;
  while (target > start) {
    step++;
    start = start + step;
  }
  console.log("计算step:", step, start);
  if ((start - target) % 2 === 0) {
    return step;
  } else {
    let val = start + step + 1;
    if ((val - target) % 2 === 0) {
      return step + 1;
    } else {
      return step + 2;
    }
  }
};

console.log("最小步骤:", reachNumber(10));
console.log("\n==========================")



