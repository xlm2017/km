class MyPromise {
  constructor(executor) {
    this.initValue()
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      console.log("捕获错误:", e)
      this.reject(e)
    }
  }
  initValue() {
    this.PromiseState = 'pending'
    this.PromiseResult = null;
    this.onFulfilledCallbacks = [] // 保存成功回调
    this.onRejectedCallbacks = [] // 保存失败回调
  }
  resolve(value) {
    // state是不可变的
    if (this.PromiseState !== 'pending') return
    this.PromiseState = 'fulfilled'
    this.PromiseResult = value;
    // 触发回调
    while (this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.PromiseResult)
    }
  }
  reject(reason) {
    // state是不可变的
    if (this.PromiseState !== 'pending') return
    this.PromiseState = 'rejected'
    this.PromiseResult = reason;
    // 执行保存的成功回调
    while (this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.PromiseResult)
    }
  }

  // 写then
  then(onFulfilled, onRejected) {
    // 参数校验，确保一定是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
    if (this.PromiseState === 'fulfilled') {
      // 如果当前为成功状态，执行第一个回调
      onFulfilled(this.PromiseResult)
    } else if (this.PromiseState === 'rejected') {
      // 如果当前为失败状态，执行第二哥回调
      onRejected(this.PromiseResult)
    }
    // 新增异步处理时候的pending时期状态, 在这个状态中添加队列
    else if (this.PromiseState === 'pending') {
      // 如果状态为待定状态，暂时保存两个回调
      this.onFulfilledCallbacks.push(onFulfilled.bind(this))
      this.onRejectedCallbacks.push(onRejected.bind(this))
    }
  }
}


// 马上输出 ”成功“
const p1 = new MyPromise((resolve, reject) => {
  resolve('成功')
}).then(res => console.log(res), err => console.log(err))

// 1秒后输出 ”失败“  // then的不同步的情况
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('失败')
  }, 1000)
}).then(res => console.log(res), err => console.log(err))

// 链式调用 输出 200
const p3 = new MyPromise((resolve, reject) => {
  resolve(100)
}).then(res => 2 * res, err => console.log(err))
  .then(res => console.log(res), err => console.log(err))