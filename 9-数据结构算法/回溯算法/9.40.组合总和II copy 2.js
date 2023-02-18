

// 给定的数组可能有重复的元素，先排序，使得重复的数字相邻，方便去重。

// for 枚举出选项时，加入下面判断，从而忽略掉同一层重复的选项，避免产生重复的组合。比如[1,2,2,2,5]，
// 选了第一个 2，变成 [1,2]，它的下一选项也是 2，跳过它，因为如果选它，就还是 [1,2]。

// if (i - 1 >= start && candidates[i - 1] == candidates[i]) {
//     continue;
// }
// 当前选择的数字不能和下一个选择的数字重复，给子递归传i+1，避免与当前选的i重复。

let candidates = [ 10, 1, 2, 7, 6, 1, 5];
let target = 8;
// [ [ 1, 1, 6 ], [ 1, 2, 5 ], [ 1, 7 ], [ 1, 2, 5 ], [ 1, 7 ], [ 2, 6 ] ]
const combinationSum2 = (candidates, target) => {
  candidates.sort((a,b) => a - b ); // 升序排序
  const res = [];

  const dfs = (start, temp, sum) => { // start是索引 当前选择范围的第一个
    if (sum >= target) {        // 爆掉了，不用继续选了
      if (sum == target) {      // 满足条件，加入解集
        res.push(temp.slice()); // temp是引用，所指向的内存后续还要操作，所以拷贝一份
      }
      return;                   // 结束当前递归
    }
    for (let i = start; i < candidates.length; i++) {             // 枚举出当前的选择
      if (i - 1 >= start && candidates[i - 1] == candidates[i]) { // 当前选项和左邻选项一样，跳过
        continue;
      }
      temp.push(candidates[i]);              // 作出选择
      dfs(i + 1, temp, sum + candidates[i]); // 基于该选择，继续选择，递归
      temp.pop();               // 上面的递归结束，撤销选择，回到选择前的状态，切入另一分支
    }
  };

  dfs(0, [], 0);
  return res;
};

console.log(combinationSum2(candidates, target));

// 超时

// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// 30