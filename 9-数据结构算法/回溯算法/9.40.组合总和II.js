

let candidates = [ 10, 1, 2, 7, 6, 1, 5];
let target = 8;
// [ [ 1, 1, 6 ], [ 1, 2, 5 ], [ 1, 7 ], [ 1, 2, 5 ], [ 1, 7 ], [ 2, 6 ] ]
function combinationSum2(candidates) {
  candidates.sort((a, b) => a - b);
  let res = [];
  let stack = [];
  let obj = {};
  function backtracking(index) {
    if(stack.length){
      let sum = stack.reduce((total, item)=> total + item);
      if(sum === target){
        if(obj[stack.join("")]){
          return;
        }else {
          obj[stack.join("")] = true;
          res.push([...stack]);
          return;
        }
      }
    }
    for (let i = index; i < candidates.length; i++){
      stack.push(candidates[i]);
      backtracking(i + 1);
      stack.pop();
    }
  }
  backtracking(0);
  return res;
}

console.log(combinationSum2(candidates, target));

// 超时