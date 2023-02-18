

let arr = new Array(3).fill().map(() => new Array(3).fill().map(()=> new Array()));


// arr[0][1].push(9);

console.log("arr:", arr);

// return



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


for(let i = 0; i < board.length; i++){
  for(let j = 0; j < board.length; j++){
    if(board[i][j] !== '.'){
      arr[Math.floor(i / 3)][Math.floor(j / 3)].push(board[i][j]);
    }
  }
}
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let ele = arr[i][j];
    if(ele.length  !== new Set(ele).size){
      console.log("size:", new Set(ele).size);
      return false;
    }   
  }
}

console.log("arr:", arr);