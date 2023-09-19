


// 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

// 实现 MyStack 类：

// void push(int x) 将元素 x 压入栈顶。
// int pop() 移除并返回栈顶元素。
// int top() 返回栈顶元素。
// boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。


// 注意：

// 你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
// 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。


// 示例：

// 输入：
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// 输出：
// [null, null, null, 2, 2, false]

// 解释：
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // 返回 2
// myStack.pop(); // 返回 2
// myStack.empty(); // 返回 False


// 提示：

// 1 <= x <= 9
// 最多调用100 次 push、pop、top 和 empty
// 每次调用 pop 和 top 都保证栈不为空


// 进阶：你能否仅用一个队列来实现栈。

var MyStack = function () {
  //声明队列和TOP
  this.queue = [];
  this.TOP = undefined;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  //从尾部入列
  this.queue.push(x);
  this.TOP = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  //返回值res为pop删除的元素
  let res = '';
  //temp缓存剩余值
  let temp = [];
  while (this.queue.length > 1) {
    //此时TOP既代表队列尺寸大于1最后一次循环值也代表栈顶的值
    this.TOP = this.queue.shift();
    //缓存将TOP存入
    temp.push(this.TOP);
  }
  // 剩余最后一个元素为res
  res = this.queue.shift();
  //交换temp和队列的值
  this.queue = temp;
  temp = null;
  //返回结果
  return res;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  //返回TOP
  return this.TOP;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  //当队列长度为0则为空
  return !this.queue.length;
};



var obj = new MyStack()
obj.push(x)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
