// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。

// 根据维基百科上 h 指数的定义：h 代表“高引用次数” ，一名科研人员的 h 指数 是指他（她）至少发表了 h 篇论文，并且每篇论文 至少 被引用 h 次。如果 h 有多种可能的值，h 指数 是其中最大的那个。

 

// 示例 1：

// 输入：citations = [3,0,6,1,5]
// 输出：3 
// 解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
//      由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
// 示例 2：

// 输入：citations = [1,3,1]
// 输出：1
 

// 提示：

// n == citations.length
// 1 <= n <= 5000
// 0 <= citations[i] <= 1000


var hIndex = function(citations) {
  // 计数数组, 数值为下标
  let arr = [];
  for (let i = 0; i < citations.length; i++) {
    arr[citations[i]] = (arr[citations[i]] || 0) + 1;    
  }
  console.log(arr);

  let max = 0;
  let sum = 0;
  let sumArr = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    if(arr[index]){
      sum += arr[index];
    }
    sumArr[index] = sum;
  }
  console.log("后缀和:", sumArr);

  for (let i = 1; i < sumArr.length; i++) {
    if(i <= sumArr[i]){
      max = Math.max(max, i);
    }    
  }
  return max; 
};




let citations = [3,0,6,1,5];
// 3

// let citations = [0];

console.log(hIndex(citations));







var hIndex2 = function (citations) {
  const n = citations.length;
  const max = Math.max(...citations) + 1;
  const cnt = new Array(max).fill(0);
  let sum = 0; // 引用次数至少h次的论文篇数

  for (let c of citations) {
    cnt[c]++;
  }

  for (let h = max - 1; h >= 0; --h) {
    sum += cnt[h];
    // 引用次数至少h次的论文数 >= h
    // （其余论文数肯定 <= h）
    if (sum >= h) {
      return h;
    }
  }

  return 0;
};




