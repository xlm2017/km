/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    let obj = {};
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== '.') {
        if (obj[board[i][j]]) {
          console.log("行重复");
          return false;
        } else {
          obj[board[i][j]] = true;
        }
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    let obj = {};
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== '.') {
        if (obj[board[j][i]]) {
          console.log("列重复");
          return false;
        } else {
          obj[board[j][i]] = true;
        }
      }
    }
  }


  let arr = new Array(3).fill().map(() => new Array(3).fill().map(() => new Array()));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== '.') {
        arr[Math.floor(i / 3)][Math.floor(j / 3)].push(board[i][j]);
      }
    }
  }

  console.log("arr:", arr);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let ele = arr[i][j];
      if (ele.length !== new Set(ele).size) {
        console.log("9格重复");
        return false;
      }
    }
  }
  return true;
};



let board =
  [   ["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// 输出：true

console.log(isValidSudoku(board));