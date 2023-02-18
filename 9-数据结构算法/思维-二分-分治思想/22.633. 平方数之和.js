// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c 。



// 示例 1：

// 输入：c = 5
// 输出：true
// 解释：1 * 1 + 2 * 2 = 5
// 示例 2：

// 输入：c = 3
// 输出：false


// 提示：

// 0 <= c <= 2^31 - 1


/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {
    const b = Math.sqrt(c - a * a);
    if (b === parseInt(b)) {
      return true;
    }
  }
  return false;

  // 作者：力扣官方题解
  // 链接：https://leetcode.cn/problems/sum-of-square-numbers/solutions/747079/ping-fang-shu-zhi-he-by-leetcode-solutio-8ydl/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};

let c = 5;

console.log(judgeSquareSum(c));