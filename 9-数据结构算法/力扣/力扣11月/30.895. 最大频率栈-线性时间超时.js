// 设计一个类似堆栈的数据结构，将元素推入堆栈，并从堆栈中弹出出现频率最高的元素。

// 实现 FreqStack 类:

// FreqStack() 构造一个空的堆栈。
// void push(int val) 将一个整数 val 压入栈顶。
// int pop() 删除并返回堆栈中出现频率最高的元素。
// 如果出现频率最高的元素不只一个，则移除并返回最接近栈顶的元素。


// 示例 1：

// 输入：
// ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"],
//   [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
// 输出：[null, null, null, null, null, null, null, 5, 7, 5, 4]
// 解释：
// FreqStack = new FreqStack();
// freqStack.push(5);//堆栈为 [5]
// freqStack.push(7);//堆栈是 [5,7]
// freqStack.push(5);//堆栈是 [5,7,5]
// freqStack.push(7);//堆栈是 [5,7,5,7]
// freqStack.push(4);//堆栈是 [5,7,5,7,4]
// freqStack.push(5);//堆栈是 [5,7,5,7,4,5]
// freqStack.pop();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
// freqStack.pop();//返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
// freqStack.pop();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
// freqStack.pop();//返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。


// 提示：

// 0 <= val <= 10^9
// push 和 pop 的操作数不大于 2 * 10^4。
// 输入保证在调用 pop 之前堆栈中至少有一个元素。


var FreqStack = function () {
  this.arr = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  this.arr.push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  // 求符合条件的下标
  let obj = {}
  // let dp = new Array(this.arr.length);
  // dp[0] = 0;

  // 最大次数 
  let maxTimes = 1;
  // 最大次数所在的下标
  let maxTimesIndex = 0;
  for (let i = 0; i < this.arr.length; i++) {
    const element = this.arr[i];
    if (!obj[element]) {
      obj[element] = 1
    } else {
      // obj[element] = obj[element] + 1
      obj[element]++
    }
    if (maxTimes > obj[element]) {

    } else {
      maxTimes = obj[element];
      maxTimesIndex = i;
    }
  }
  // let maxTimesValue = dp[dp.length - 1];

  let maxTimesValue = this.arr[maxTimesIndex];
  this.arr.splice(maxTimesIndex, 1);
  return maxTimesValue;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

let freqStack = new FreqStack();
freqStack.push(5);//堆栈为 [5]
freqStack.push(7);//堆栈是 [5,7]
freqStack.push(5);//堆栈是 [5,7,5]
freqStack.push(7);//堆栈是 [5,7,5,7]
freqStack.push(4);//堆栈是 [5,7,5,7,4]
freqStack.push(5);//堆栈是 [5,7,5,7,4,5]
freqStack.pop();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
freqStack.pop();//返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
freqStack.pop();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
freqStack.pop();//返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。
console.log(freqStack);