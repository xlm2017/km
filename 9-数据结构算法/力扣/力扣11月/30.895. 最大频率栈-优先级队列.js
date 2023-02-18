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
  // 两个哈希表
  // 次数统计
  this.map1 = {};
  // 次数对应的下标列表
  this.map2 = {};

  // 当前 (符合弹出条件的) 下标位置
  maxIndex = null;
  // 最大出现次数, 最大频率
  maxTimes = 1;

  // 优先级数组
  indexArr = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  this.arr.push(val);
  if (this.map1[val]) {
    this.map1[val]++;
    if (this.map1[val] > maxTimes) {
      // 记录最大出现次数
      maxTimes = this.map1[val];
    }
  } else {
    this.map1[val] = 1;
  }


  if (!this.map2[val]) {
    this.map2[val] = [this.arr.length - 1]
  } else {
    this.map2[val].push(this.arr.length - 1)
  }

  // 构建优先级队列 

  if (this.arr.length <= 2) {
    this.indexArr.push(this.arr.length - 1)
  } else {
    // 第三个数起, 统计出现次数
    if (maxTimes === this.map1[val]) {
      this.indexArr.push(this.arr.length - 1)
    } else {

    }
  }


  console.log("arr:", this.arr, '最大频率:', maxTimes);
  console.log("map2:", this.map2, '\n');
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {

  // let maxTimesValue = this.arr[maxTimesIndex];
  // this.arr.splice(maxTimesIndex, 1);
  // return maxTimesValue;
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