// 给你一个正整数 n 。

// 请你将 n 的值替换为 n 的 质因数 之和，重复这一过程。

// 注意，如果 n 能够被某个质因数多次整除，则在求和时，应当包含这个质因数同样次数。
// 返回 n 可以取到的最小值。

 

// 示例 1：

// 输入：n = 15
// 输出：5
// 解释：最开始，n = 15 。
// 15 = 3 * 5 ，所以 n 替换为 3 + 5 = 8 。
// 8 = 2 * 2 * 2 ，所以 n 替换为 2 + 2 + 2 = 6 。
// 6 = 2 * 3 ，所以 n 替换为 2 + 3 = 5 。
// 5 是 n 可以取到的最小值。
// 示例 2：

// 输入：n = 3
// 输出：3
// 解释：最开始，n = 3 。
// 3 是 n 可以取到的最小值。
 

// 提示：

// 2 <= n <= 10^5


/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function(n) {
  
  // 判断一个数是否是质数, 只能被1和自身整除
  function isPrime(num) {
    if(num === 2){
      return true;
    }
    let i = 2;
    while (i < num) {
      if(num % i === 0){
        return false;
      }
      i++
    }
    return true;
  }

  
  // 将一个数分解为质数相乘
  function resolveNum(num){
    let i = 2;
    while(num % i !== 0){
      i++;
    }
    let k = num / i;
    console.log("i:", i, k);
    
    if(isPrime(i)){
      arr.push(i);
    }else{
      resolveNum(i);
    }
    
    if(isPrime(k)){
      arr.push(k);
    }else{
      // console.log("k:", k);
      resolveNum(k);
    }
  }
  let arr = [];
  let map = new Map();
  while(!isPrime(n) && !map.has(n)){
    map.set(n);
    arr = [];
    // console.log("n:", n);
    resolveNum(n);
    // console.log("arr:", arr);
    n = arr.reduce((t, i)=> t + i);
  }
  return n;
};

// let n = 15;
// 5

// let n = 4;
// 4

let n = 18;
// 5
// 9 错误

console.log(smallestValue(n));