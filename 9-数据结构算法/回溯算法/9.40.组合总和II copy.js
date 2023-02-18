

// let candidates = [ 10, 1, 2, 7, 6, 1, 5];
// let target = 8;
// [ [ 1, 1, 6 ], [ 1, 2, 5 ], [ 1, 7 ], [ 1, 2, 5 ], [ 1, 7 ], [ 2, 6 ] ]


let candidates = [10,1,2,7,6,1,5];
let target = 8;
// [[1,2,5],[1,7],[2,6]]   错误

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
      if(sum > target){
        return;
      }
    }
    for (let i = index; i < candidates.length; i++){

      // 去重
      // if(i > 0 && candidates[i] === candidates[i-1]){
      // if(i - 1 > index && candidates[i] === candidates[i-1]){
      if(i - 1 >= index && candidates[i] === candidates[i-1]){
        continue;
      }

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

// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// 30