// 类默认使用了严格模式

class MyPromise {
  // var PromiseState = 'pending'
  // #PromiseState = 'pending';  // 状态
  // #PromiseResult = null;      // 终值
  // 执行器, 决议函数
  constructor(executor){
    this.initValue()

    executor( this.resolve, this.reject ) // 两个参数

    // executor( this.resolve.bind(this), this.reject.bind(this) ) // 两个参数  
    // 这里很重要的一步是resolve和reject的绑定this，为什么要绑定this呢？这是为了resolve和reject的this指向永远指向当前的MyPromise实例，防止随着函数执行环境的改变而改变

  }
  initValue(){
    this.PromiseState = 'pending'
    this.PromiseResult = null;    
  }
  resolve(){
   console.log("promise内部解决成功", this)    // 未绑定时,由于严格模式, this为undefined
  }
  reject(){
    console.log("promise内部解决失败", this)   // 未绑定时,由于严格模式, this为undefined
  }
}

function toExe(){
  let p1 = new MyPromise((resolve, reject) => {
    console.log(this) // window
    resolve('成功')
    reject('失败')  
  })
  console.log(p1)
}
toExe()
// let p1 = new MyPromise(function exe(resolve, reject) {
//   console.log(this) // window
//   resolve('成功')
//   reject('失败')  
// })
// console.log(p1)


// let p2 = new MyPromise((resolve, reject) => {
//   reject('失败')
//   resolve('成功')
// })
// console.log(p2)

// let p3 = new MyPromise( function(resolve, reject){
//   throw('报错')
// })
// console.log(p3)