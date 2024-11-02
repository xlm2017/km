// n 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。

// 每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。

// 如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。

// 就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。

// 给你一个字符串 dominoes 表示这一行多米诺骨牌的初始状态，其中：

// dominoes[i] = 'L'，表示第 i 张多米诺骨牌被推向左侧，
// dominoes[i] = 'R'，表示第 i 张多米诺骨牌被推向右侧，
// dominoes[i] = '.'，表示没有推动第 i 张多米诺骨牌。
// 返回表示最终状态的字符串。


// 示例 1：

// 输入：dominoes = "RR.L"
// 输出："RR.L"
// 解释：第一张多米诺骨牌没有给第二张施加额外的力。
// 示例 2：


// 输入：dominoes = ".L.R...LR..L.."
// 输出："LL.RR.LLRRLL.."


// 提示：

// n == dominoes.length
// 1 <= n <= 105
// dominoes[i] 为 'L'、'R' 或 '.'



/**
 * @param {string} dominoes
 * @return {string}
 */

// 参考 https://leetcode.cn/problems/push-dominoes/solutions/651557/cchao-100de-liang-ci-bian-li-by-ffreturn-63yp/
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const n = dominoes.length;
  let diff = new Array(n).fill(0);

  // 从左往右
  let weight = 0;
  for (let i = 0; i < n; ++i) {
    if (dominoes[i] === 'R') {
      weight = n;
    } else if (dominoes[i] === 'L') {
      weight = 0;
    } else {
      weight = Math.max(weight - 1, 0);
    }
    diff[i] = weight;
  }

  // 从右往左
  weight = 0;
  for (let i = n - 1; i >= 0; --i) {
    if (dominoes[i] === 'L') {
      weight = n;
    } else if (dominoes[i] === 'R') {
      weight = 0;
    } else {
      weight = Math.max(weight - 1, 0);
    }
    diff[i] -= weight;
  }

  let res = '';
  for (let i = 0; i < n; ++i) {
    res += diff[i] > 0 ? 'R' : (diff[i] < 0 ? 'L' : '.');
  }

  return res;
};


let dominoes = ".L.R...LR..L.."
// 输出："LL.RR.LLRRLL.."

let dominoes2 = ".R...L.."
// ".RR.LL.."


console.log(pushDominoes(dominoes));


// 解题思路
// 处理分2种：

// L和R是不变
// .: 需要考虑两边L和R谁离它近，谁近最终状态是谁，如果一样则为 .
// 如何判断谁近

// 位置一个数组表示对于两个点L和R的差异 diff
// 采用两次遍历
// 从左往右，设置权重 weight
// R: 设置 weight=N
// .: 设置 weight-1
// L: 设置 weight=0
// 更新diff += weight (L表示负数)
// 从右往左，设置权重 weight
// L: 设置 weight=N
// .: 设置 weight-1
// R: 设置 weight=0
// 更新diff -= weight (R表示负数)
// 遍历 diff 如果大于0则是R，小于0则是L，否则是.