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
var canChange = function(start, target) {
  start = start.split("");
  target = target.split("");
  let l1 = 0;
  let l2 = 0;
  let len = start.length;
  while (l1 < len && l2 < len) {
    if(target[l2] !== start[l1]){
      switch (target[l2]) {
        case "L":
          if(start[l1] !== "_"){
            return false;
          }else{
            // 寻找右侧是否存在一个L, 如果有,就对齐, 没有就false
            let j = l1;
            while (j < len) {
              if(start[j] === "R")return false;
              if(start[j] === "L"){
                break;
              }
              j++;
            }
            if(j < len){
              start[j] = "_";
              l1++;
              l2++;
            }else{
              return false;
            }
          }
          break;
        case "R":
          
          break;
        case "_":
          
          break;
        default:
          break;
      }
    }else{
      l1++;
      l2++;
    }
  }
  return true;
};


let start = "_L__R__R_", target = "L______RR"
// 输出：true

console.log(canChange(start, target));