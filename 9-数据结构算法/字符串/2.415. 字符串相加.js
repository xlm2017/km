// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

 

// 示例 1：

// 输入：num1 = "11", num2 = "123"
// 输出："134"
// 示例 2：

// 输入：num1 = "456", num2 = "77"
// 输出："533"
// 示例 3：

// 输入：num1 = "0", num2 = "0"
// 输出："0"
 

 

// 提示：

// 1 <= num1.length, num2.length <= 104
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  // 思路,  字符串转数组后操作,   相当于大数相加
  let arr1 = num1.split(""); 
  let arr2 = num2.split(""); 
  let temp1 = arr1.length > arr2.length ? arr1 : arr2;
  let temp2 = arr1.length > arr2.length ? arr2 : arr1;
  arr1 = temp1;
  arr2 = temp2;
  let j = temp2.length - 1;
  let jia = false;
  // console.log("arr1:", arr1, arr2);
  for (let i = arr1.length - 1; i >= 0; i--) {
    if(j === -1){
      j = 0;
      arr2[j] = 0;
    }
    if(jia){
      let n = arr1[i]*1 + arr2[j]*1 + 1;
      if(n > 9){
        jia = true;
        arr1[i] = n % 10;
        if(i === 0){
          arr1.unshift(1);
          // console.log("jia");
          return arr1.join("");
        } 
      }else{
        arr1[i] = n;
        jia = false;
      }
    }else{
      let n = arr1[i]*1 + arr2[j]*1;
      if(n > 9){
        jia = true;
        arr1[i] = n % 10;
        if(i === 0){
          // console.log("fei");
          arr1.unshift(1);
          return arr1.join("");
        } 
      }else{
        arr1[i] = n;
        jia = false;
      }
    } 
    j--;
    if(i === 0){
      // console.log("最后一个:", arr1);
      return arr1.join("");
    }   
  }
};

let num1 = "456", num2 = "77";
// 533

console.log(addStrings(num1, num2));