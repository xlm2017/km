class MyPromise {
  constructor(executor) {
    this.initValue()
    console.log("MyPromise初始化完成")
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch(e) {
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
}

let p1 = new MyPromise((resolve, reject) => {
  let res = resolve('成功')
  console.log("res:", res)
  reject('失败')
})
console.log(p1)

let p2 = new MyPromise((resolve, reject) => {
  reject('失败')
  resolve('成功')
})
console.log(p2)

let p3 = new MyPromise((resolve, reject) => {
  throw ('报错')
})
console.log(p3)