// 给定一个长度为 n 的整数数组 arr ，它表示在 [0, n - 1] 范围内的整数的排列。

// 我们将 arr 分割成若干 块 (即分区)，并对每个块单独排序。将它们连接起来后，使得连接的结果和按升序排序后的原数组相同。

// 返回数组能分成的最多块数量。



// 示例 1:

// 输入: arr = [4,3,2,1,0]
// 输出: 1
// 解释:
// 将数组分成2块或者更多块，都无法得到所需的结果。
// 例如，分成 [4, 3], [2, 1, 0] 的结果是 [3, 4, 0, 1, 2]，这不是有序的数组。
// 示例 2:

// 输入: arr = [1,0,2,3,4]
// 输出: 4
// 解释:
// 我们可以把它分成两块，例如 [1, 0], [2, 3, 4]。
// 然而，分成 [1, 0], [2], [3], [4] 可以得到最多的块数。
// 对每个块单独排序后，结果为 [0, 1], [2], [3], [4]


// 提示:

// n == arr.length
// 1 <= n <= 10
// 0 <= arr[i] < n
// arr 中每个元素都 不同


var maxChunksToSorted = function (arr) {
  // 单调栈
  // 1. 后一个块里的最小值 大于 前一个块的最大值
  // 2. 循环遍历数组，先假设每一个元素都能作为一个独立的块，push 到栈里
  // 3. 整个过程记录下 栈顶的最大值
  // 4. 当遇到小于栈顶的值时，就需要先 pop 出栈，直到找到大于它的值，而过程中 pop 出去的元素也是可以丢弃的，
  // 因为它们都在这两个值范围内，且一定是属于一个块的
  const stack = [];
  let max = -1;
  for (const num of arr) {
    if (num > max) {
      max = num;
      stack.push(num);
    } else {
      while (stack.length && num < stack[stack.length - 1]) {
        stack.pop();
      }
      stack.push(max);
    }
  }
  return stack.length;
};


let arr = [1, 0, 2, 3, 4];
// 4

// let arr2 = [2,0,1];
let arr2 = [1, 2, 0, 3];
// 2

console.log(maxChunksToSorted(arr));
console.log(maxChunksToSorted(arr2));