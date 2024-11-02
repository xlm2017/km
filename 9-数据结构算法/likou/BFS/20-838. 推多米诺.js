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
var pushDominoes = function (dominoes) {
  // 最近 指针
  let l = null;
  let res = "";
  let start = true;
  for (let i = 0; i < dominoes.length; i++) {
    if (dominoes[i] === '.') {
      continue;
    }
    if (l === null) {
      if (dominoes[i] === "L" || dominoes[i] === "R") {
        l = i;
        if (dominoes[i] === "L") {
          if (start) {
            // 值包括当前点
            res += new Array(i + 1).fill("L").join("");
          }
          start = false;
        } else {
          if (start) {
            // 值包括当前点
            res += new Array(i).fill(".").join("");
            res += "R";
          }
          start = false;
        }
      }
    } else {
      // 四种情况分类讨论
      if (dominoes[l] === "L") {
        if (dominoes[i] === "L") {
          res += new Array(i - l).fill("L").join("");
        } else {
          res += new Array(i - l - 1).fill(".").join("");
          res += "R"
        }
      } else {
        if (dominoes[i] === "L") {
          // 右 >    左 <-
          // 中间一根取点 .
          let dis = i - l - 1;
          if (dis === 0) {
            res += "L";
          } else {
            // console.log("dis:", dis, res)
            if (dis % 2 === 0) {
              res += new Array(dis / 2).fill("R").join("");
              res += new Array((dis / 2) + 1).fill("L").join("");
            } else {
              res += new Array((dis - 1) / 2).fill("R").join("");
              res += ".";
              res += new Array((dis - 1) / 2 + 1).fill("L").join("");
            }
          }
        } else {
          res += new Array(i - l).fill("R").join("");
        }
      }
      l = i;
    }
  }
  if (l === null) {
    return dominoes;
  }

  let cnt = 0;
  for(let k = dominoes.length - 1; k >= 0; k--){
    if(dominoes[k] != "."){
      if(dominoes[k] === "R"){
        res += new Array(cnt).fill("R").join("");
      }else{
        res += new Array(cnt).fill(".").join("");
      }
      break;
    }else{
      cnt++;
    }
  }

  return res;
};

let dominoes = ".L.R...LR..L.."
// 输出："LL.RR.LLRRLL.."

let dominoes2 = ".R...L.."
// ".RR.LL.."


console.log(pushDominoes(dominoes));