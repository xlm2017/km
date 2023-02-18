function MyPromise(executor){
  'use strict'
  function resolve(){
    console.log("resolve:", this)  // resolve: undefined 严格模式下
  }
  function reject(){}
  console.log('MyPromise:', this)  // 严格模式, 也是本身
  executor(resolve, reject)
}

// let p1 = new MyPromise((resolve, reject)=>{
//   console.log('this:', this)
//   resolve('成功')
// })
let p1 = new MyPromise(function exe(resolve, reject){
  console.log('this:', this)
  resolve('成功')
})

// 默认绑定通常是指函数独立调用，不涉及其他绑定规则。
// 非严格模式下，this指向window，严格模式下，this指向undefined。