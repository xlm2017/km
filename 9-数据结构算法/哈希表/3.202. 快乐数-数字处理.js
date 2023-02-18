// 编写一个算法来判断一个数 n 是不是快乐数。

// 「快乐数」 定义为：

// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

 

// 示例 1：

// 输入：n = 19
// 输出：true
// 解释：
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// 示例 2：

// 输入：n = 2
// 输出：false


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set();
  while (true) {
    // n = n + '';
    // let arr = n.split("");
    // console.log('arr:', arr);
    let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   let element = arr[i];
    //   sum = sum + (element * 1) ** 2;
    // }

    function getNext(num) {
      let totalSum = 0;
      while (num > 0) {
          let d = num % 10;
          num = num / 10;
          totalSum += d * d;
      }
      return totalSum;
    }

    sum = getNext(n);

    if(sum === 1){
      return true;
    }else{
      if(set.has(n)){
        return false;
      }else{
        set.add(n);
        n = sum;
      }
    }
  }
};

// let n1 = 19;



// let n1 = 19;
// arr: [ '1', '9' ]
// arr: [ '8', '2' ]
// arr: [ '6', '8' ]
// arr: [ '1', '0', '0' ]

let n1 = 2;

console.log(isHappy(n1));




// console.log(101 % 100);   // 1
// console.log(101 % 10);   // 1


// console.log(2**3);  // 8