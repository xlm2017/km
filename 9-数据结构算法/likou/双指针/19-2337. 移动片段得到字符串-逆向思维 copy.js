// 给你两个字符串 start 和 target ，长度均为 n 。每个字符串 仅 由字符 'L'、'R' 和 '_' 组成，其中：

// 字符 'L' 和 'R' 表示片段，其中片段 'L' 只有在其左侧直接存在一个 空位 时才能向 左 移动，而片段 'R' 只有在其右侧直接存在一个 空位 时才能向 右 移动。
// 字符 '_' 表示可以被 任意 'L' 或 'R' 片段占据的空位。
// 如果在移动字符串 start 中的片段任意次之后可以得到字符串 target ，返回 true ；否则，返回 false 。

 

// 示例 1：

// 输入：start = "_L__R__R_", target = "L______RR"
// 输出：true
// 解释：可以从字符串 start 获得 target ，需要进行下面的移动：
// - 将第一个片段向左移动一步，字符串现在变为 "L___R__R_" 。
// - 将最后一个片段向右移动一步，字符串现在变为 "L___R___R" 。
// - 将第二个片段向右移动散步，字符串现在变为 "L______RR" 。
// 可以从字符串 start 得到 target ，所以返回 true 。
// 示例 2：

// 输入：start = "R_L_", target = "__LR"
// 输出：false
// 解释：字符串 start 中的 'R' 片段可以向右移动一步得到 "_RL_" 。
// 但是，在这一步之后，不存在可以移动的片段，所以无法从字符串 start 得到 target 。
// 示例 3：

// 输入：start = "_R", target = "R_"
// 输出：false
// 解释：字符串 start 中的片段只能向右移动，所以无法从字符串 start 得到 target 。
 

// 提示：

// n == start.length == target.length
// 1 <= n <= 105
// start 和 target 由字符 'L'、'R' 和 '_' 组成



/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */

// 正向思维条件太松弛了, 代码复杂度很高, 很难模拟写出来, 根据移动特性, 考虑逆向思维.

// 如果一只手套戴着很不舒服, 很可能不是这个手套尺寸有问题, 而只是因为戴反了, 生活中的小概率事件, 往往很难意识到需要逆向思维.

var canChange = function(start, target) {
  if (start.replaceAll("_", "") !== target.replaceAll("_", "")) return false;
  let i = 0;
  let j = 0;
  let n = start.length;
  while (i < n && j < n) {
    while (i < n && start[i] == '_') {
      i++;
    }
    while (j < n && target[j] == '_') {
      j++;
    }
    // 都是字母了, 进行比较
    if (i < n && j < n) {
      if (start[i] !== target[j]) {
        return false;
      }
      const c = start[i];
      if ((c === 'L' && i < j) || (c === 'R' && i > j)) {
        return false;
      }
      i++;
      j++;
    }
  }
  return true;
};


let start = "_L__R__R_", target = "L______RR"
// 输出：true

console.log(canChange(start, target));