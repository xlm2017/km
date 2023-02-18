// 给你一个整数 n ，如果你可以将 n 表示成若干个不同的三的幂之和，请你返回 true ，否则请返回 false 。

// 对于一个整数 y ，如果存在整数 x 满足 y == 3^x ，我们称这个整数 y 是三的幂。

 

// 示例 1：

// 输入：n = 12
// 输出：true
// 解释：12 = 3^1 + 3^2
// 示例 2：

// 输入：n = 91
// 输出：true
// 解释：91 = 3^0 + 3^2 + 3^4
// 示例 3：

// 输入：n = 21
// 输出：false
 

// 提示：

// 1 <= n <= 10^7


/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
  if(n===1){
    return true
  }
  // 贪心算法
  let i = 1;
  let sum = 1;
  let dp = [1];
  let cur = 1;
  while (cur < n) {
    cur = Math.pow(3, i)
    if(cur < n){
      dp.push(cur);
      sum = sum + Math.pow(3, i);
      i++;
    }else if(cur === n){
      return true;
    }
  }

  let res = [];
  let isOk = false;
  let stack = [];
  function dfs(arr) {


    if(stack.length){

      let sum = stack.reduce((total, item)=>{
        return total + item;
      })
      if(sum === n){
        console.log("找到值了");
        isOk = true;
        return true;
      }
    }

    for (let i = 0; i < arr.length; i++) {


      const element = arr[i];

      stack.push(element);

      
      
      let sum = stack.reduce((total, item)=>{
        return total + item;
      })
      if(sum === n){
        console.log("找到值了");
        isOk = true;
      }

      // console.log("每一次的和:", sum);
      // res.push(sum);
      res.push(JSON.parse(JSON.stringify(stack)));

      

      if(i < arr.length - 1){
        let temp = arr.slice(i + 1);
        if(temp.length){
          dfs(temp);
        }
      }else{
        stack.pop();
        return;
      }

      stack.pop();


    }
  }


  dfs(dp);
  console.log("res:", res);
  return isOk;


  // console.log("dp:", dp);
};


let n = 12;
// let n = 10000000;



// 1  3  9  27  81  243

console.log(checkPowersOfThree(n));


let b = Math.pow(10, 7);
// 10000000
console.log("res:", b);