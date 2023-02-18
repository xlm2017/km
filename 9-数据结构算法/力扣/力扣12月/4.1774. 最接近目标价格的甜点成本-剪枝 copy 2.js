// 你打算做甜点，现在需要购买配料。目前共有 n 种冰激凌基料和 m 种配料可供选购。而制作甜点需要遵循以下几条规则：

// 必须选择 一种 冰激凌基料。
// 可以添加 一种或多种 配料，也可以不添加任何配料。
// 每种类型的配料 最多两份 。
// 给你以下三个输入：

// baseCosts ，一个长度为 n 的整数数组，其中每个 baseCosts[i] 表示第 i 种冰激凌基料的价格。
// toppingCosts，一个长度为 m 的整数数组，其中每个 toppingCosts[i] 表示 一份 第 i 种冰激凌配料的价格。
// target ，一个整数，表示你制作甜点的目标价格。
// 你希望自己做的甜点总成本尽可能接近目标价格 target 。

// 返回最接近 target 的甜点成本。如果有多种方案，返回 成本相对较低 的一种。



// 示例 1：

// 输入：baseCosts = [1, 7], toppingCosts = [3, 4], target = 10
// 输出：10
// 解释：考虑下面的方案组合（所有下标均从 0 开始）：
// - 选择 1 号基料：成本 7
//   - 选择 1 份 0 号配料：成本 1 x 3 = 3
//     - 选择 0 份 1 号配料：成本 0 x 4 = 0
// 总成本：7 + 3 + 0 = 10 。
// 示例 2：

// 输入：baseCosts = [2, 3], toppingCosts = [4, 5, 100], target = 18
// 输出：17
// 解释：考虑下面的方案组合（所有下标均从 0 开始）：
// - 选择 1 号基料：成本 3
//   - 选择 1 份 0 号配料：成本 1 x 4 = 4
//     - 选择 2 份 1 号配料：成本 2 x 5 = 10
//       - 选择 0 份 2 号配料：成本 0 x 100 = 0
// 总成本：3 + 4 + 10 + 0 = 17 。不存在总成本为 18 的甜点制作方案。
// 示例 3：

// 输入：baseCosts = [3, 10], toppingCosts = [2, 5], target = 9
// 输出：8
// 解释：可以制作总成本为 8 和 10 的甜点。返回 8 ，因为这是成本更低的方案。
// 示例 4：

// 输入：baseCosts = [10], toppingCosts = [1], target = 1
// 输出：10
// 解释：注意，你可以选择不添加任何配料，但你必须选择一种基料。


// 提示：

// n == baseCosts.length
// m == toppingCosts.length
// 1 <= n, m <= 10
// 1 <= baseCosts[i], toppingCosts[i] <= 10^4
// 1 <= target <= 10^4


/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  let ans = baseCosts[0];

  for (let i = 0; i < baseCosts.length; i++) {
    const element = baseCosts[i];
    // 主料
    // 寻找到一种或多种或0种辅料, 使总和最接近target, 且相对较低成本
    if (element < target) {
      //最接近, 判断相差值

      // 0,1,2,n个配料
      // 相同的配料只能两份
      let stack = [element];
      // 已使用的下标
      // let used = {};
      let used = [];
      let res = [];

      // 最接近的值
      let nearest = element;
      function backtracking (array, index) {

        let sum = 0;
        for (let i = 0; i < stack.length; i++) {
          sum += stack[i];
        }

        if (nearest === target) {
          return;
        }
        // 优化终止条件代码
        if (sum < target) {
          let stack1 = JSON.parse(JSON.stringify(stack));
          res.push(stack1);
          // nearest = sum;

          if (Math.abs(sum - target) < Math.abs(target - nearest)) {
            nearest = sum;
          } else if (Math.abs(sum - target) === Math.abs(target - nearest)) {
            if (sum < nearest) {
              nearest = sum;
            }
          }
        } else if (sum === target) {
          let stack1 = JSON.parse(JSON.stringify(stack));
          res.push(stack1);
          console.log("符合条件:", stack1, sum);
          nearest = sum;
          return;
        } else {
          // if (nearest === target) {
          //   return;
          // }
          let stack1 = JSON.parse(JSON.stringify(stack));
          res.push(stack1);
          // 比较前一个值
          if (Math.abs(sum - target) < Math.abs(target - nearest)) {
            nearest = sum;
          } else if (Math.abs(sum - target) === Math.abs(target - nearest)) {
            if (sum < nearest) {
              nearest = sum;
            }
          }
          return;
        }



        for (let j = index; j < array.length; j++) {
          stack.push(array[j]);

          let index1 = used.indexOf(j);
          let index2 = used.lastIndexOf(j);
          if (index1 != index2 && index1 != -1) {
            stack.pop();
            // return;
            continue;
          }

          used.push(j);

          backtracking(array, j);


          stack.pop();

          used.pop();
        }
      }

      toppingCosts.sort((a, b) => a - b);
      backtracking(toppingCosts, 0, 0);

      if (Math.abs(nearest - target) < Math.abs(ans - target)) {
        ans = nearest;
      } else if (Math.abs(nearest - target) === Math.abs(ans - target)) {
        if (nearest < ans) {
          ans = nearest;
        }
      }
      console.log("主料小于目标值:", res, nearest, ans);
    } else if (element === target) {
      return target;
    } else {
      // 大于的情况, 不加辅料
      // dp[i] = element;
      if (Math.abs(element - target) < Math.abs(ans - target)) {
        ans = element;
      } else if (Math.abs(element - target) === Math.abs(ans - target)) {
        if (element < ans) {
          ans = element;
        }
      }
    }

  }
  return ans;
};

// let baseCosts = [1, 7], toppingCosts = [3, 4], target = 10


// let baseCosts = [2, 3], toppingCosts = [4, 5, 100], target = 18
//17

// let baseCosts = [3, 10], toppingCosts = [2, 5], target = 9
// 8   // 10错误

// let baseCosts = [4], toppingCosts = [9], target = 9
// 13

// let baseCosts = [1, 7], toppingCosts = [3, 4], target = 10
// 10

// let baseCosts = [1], toppingCosts = [8, 10], target = 10
// 9

// let baseCosts = [52, 48, 17, 44, 33, 17, 58, 52], toppingCosts = [74, 28, 20, 98, 46, 9, 1, 1, 22, 2], target = 93
// 93

let baseCosts = [8, 4, 4, 5, 8], toppingCosts = [3, 10, 9, 10, 8, 10, 10, 9, 3], target = 6
// 5
console.log("结果:", closestCost(baseCosts, toppingCosts, target));
