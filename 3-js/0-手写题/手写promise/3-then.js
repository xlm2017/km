class MyPromise {
  constructor(executor) {
    this.initValue()
    console.log("MyPromise初始化完成")
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      console.log("捕获错误:", e)
      // this.reject.bind(this, e) // 错误写法
      this.reject(e)
    }
  }
  initValue() {
    this.PromiseState = 'pending'
    this.PromiseResult = null;
  }
  resolve(value) {
    // state是不可变的
    if (this.PromiseState !== 'pending') return
    this.PromiseState = 'fulfilled'
    this.PromiseResult = value;
  }
  reject(reason) {
    // state是不可变的
    if (this.PromiseState !== 'pending') return
    this.PromiseState = 'rejected'
    this.PromiseResult = reason;
  }

  // 写then
  then(onFulfilled, onRejected) {
    // 参数校验，确保一定是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    
  }
}

let p1 = new Promise((resolve, reject) => {
  let res = resolve('成功')
  console.log("res:", res)
  reject('失败')
})
// p1.then(()=>{
//   // Uncaught (in promise) ReferenceError: arguments is not defined
//   console.log("参数:", arguments)
// })
p1.then(function a() {
  console.log("参数:", arguments) // 普通函数可使用 , 箭头函数不能使用arguments
})


// var promise = new Promise(fn);
// promise.then(onFulfilled, onRejected);

// 1.这两个onFulfilled和onRejected可选的参数；如果不是函数，则将其忽略；
// 2.如果onFulfilled是一个函数；
// 必须在promise实现后调用，以promise的值（resolve()）作为onFulfilled的第一个参数。
// 在promise实现之前不能调用它。
// 它不能被多次调用
// 3.如果onRejected是一个函数，
// 必须在promise被拒绝之后，以promise的reject作为第一个参数调用它。
// 在promise被拒绝之前不能调用它。
// 它不能被多次调用。
// 4.onFulfilled或onRejected在放入执行上下文(JS引擎的执行环境)堆栈之前不得调用。。
// 5.onFulfilled并且onRejected必须作为函数调用（即没有this值）
// 6.then 可能在同一promise中多次被调用
// 各自的onFulfilled或onRejected会按调用顺序执行；
// 7.then必须返回新的Promise
// promise2 = promise1.then(onFulfilled, onRejected);
// 如果有一个onFulfilled或onRejected返回一个值x，则promise2得到一个值为x的新promise，完成状态是已完成。
// 如果任何一个onFulfilled或onRejected引发异常e，则promise2得到一个值为e的新promise,完成状态是被拒绝。
// 如果onFulfilled不是函数且promise1已完成，则promise2必须使用与相同的值来实现promise1。
// 如果onRejected不是功能而promise1被拒绝，则promise2必须以与相同的理由将其拒绝promise1。
// 以上部分内容翻译自Promise A+规范，更全面更详细的请参考此文档；

// 作者：提鲁战士
// 链接：https://www.jianshu.com/p/08ef6d6f391e
// 来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


{
  // 马上输出 ”成功“
  const p1 = new Promise((resolve, reject) => {
    resolve('成功')
  }).then(res => console.log(res), err => console.log(err))

  // 1秒后输出 ”失败“
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('失败')
    }, 1000)
  }).then(res => console.log(res), err => console.log(err))

  // 链式调用 输出 200
  const p3 = new Promise((resolve, reject) => {
    resolve(100)
  }).then(res => 2 * res, err => console.log(err))
    .then(res => console.log(res), err => console.log(err))

}
