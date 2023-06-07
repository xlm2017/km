

// 给出基数为 -2 的两个数 arr1 和 arr2，返回两数相加的结果。

// 数字以 数组形式 给出：数组由若干 0 和 1 组成，按最高有效位到最低有效位的顺序排列。例如，arr = [1,1,0,1] 表示数字 (-2)^3 + (-2)^2 + (-2)^0 = -3。数组形式 中的数字 arr 也同样不含前导零：即 arr == [0] 或 arr[0] == 1。

// 返回相同表示形式的 arr1 和 arr2 相加的结果。两数的表示形式为：不含前导零、由若干 0 和 1 组成的数组。



// 示例 1：

// 输入：arr1 = [1,1,1,1,1], arr2 = [1,0,1]
// 输出：[1,0,0,0,0]
// 解释：arr1 表示 11，arr2 表示 5，输出表示 16 。
// 示例 2：

// 输入：arr1 = [0], arr2 = [0]
// 输出：[0]
// 示例 3：

// 输入：arr1 = [0], arr2 = [1]
// 输出：[1]


// 提示：

// 1 <= arr1.length, arr2.length <= 1000
// arr1[i] 和 arr2[i] 都是 0 或 1
// arr1 和 arr2 都没有前导0


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function (arr1, arr2) {

  let num1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    num1 += Math.pow(-2, arr1.length - i - 1) * arr1[i];
  }
  let num2 = 0;
  for (let i = 0; i < arr2.length; i++) {
    num2 += Math.pow(-2, arr2.length - i - 1) * arr2[i];
  }

  // arr1 表示 11，arr2 表示 5，输出表示 16 
  let res = num1 + num2;
  function decimalToNegativeBinary (num) {
    var result = [];
    // 使用 do while 解决 num 等于 0 的情况
    do {
      var temp = num % -2;
      temp == 0 ? result.push('0') : result.push('1');
      num = Math.floor(num / -2);
    } while (num != 0);

    // 反转数组
    result.reverse();

    return result.join('');
  }
  let v = decimalToNegativeBinary(res);
  return v.split('').map(item => item * 1);
};

let arr1 = [1, 1, 1, 1, 1], arr2 = [1, 0, 1];
// [ 1, 0, 0, 0, 0 ]

console.log(addNegabinary(arr1, arr2));