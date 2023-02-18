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
  // 为什么要用字符串表示大数呢？因为js中仅能安全地存储在 -(2^53 − 1)（Number.MIN_SAFE_INTEGER）到 2^53 − 1（Number.MAX_SAFE_INTEGER）范围内的整数。
  // 超出这个范围，JavaScript 将不能安全地表示整数。也就是超出后可能会出现计算错误
  //  * 如：9007199254740991 + 4 等于 9007199254740996
  return String(BigInt(num1) + BigInt(num2));
};

let num1 = "456", num2 = "77";
// 533

console.log(addStrings(num1, num2));