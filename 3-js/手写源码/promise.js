// promise有三种状态: fulfilled, rejected, pending。

// Promise 的优点：
// 一旦状态改变，就不会再变，任何时候都可以得到这个结果

// 可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

// Promise 的缺点:
// 无法取消 Promise

// 当处于pending状态时，无法得知目前进展到哪一个阶段

//  ？？？？？？？？？？？？？
// Uncaught (in promise) ReferenceError: c is not defined
let a = new Promise((resolve, reject) => {
//    let b = 1 + c
   resolve(1)
   reject(2)
})

// Promise的构造函数是同步执行的。then 中的方法是异步执行的。
// Promise 是微任务，setTimeout 是宏任务，同一个事件循环中，promise.then总是先于 setTimeout 执行。
// Promise {<resolved>: 1} 
// a.toString()
// "[object Promise]"


new Promise((resolve, reject) => {
    console.log('初始化');
    resolve();
})
.then(() => {
    new Promise((resolve, reject) => {
        console.log('「嵌套」');
        resolve();
    }).then(()=> {
        throw new Error('有哪里不对了');
    }).catch(()=> {
        console.log('执行「嵌套」');
    })
        console.log('执行「这个」');
})
.catch(() => {
    console.log('执行「那个」');
})
.then(() => {
    console.log('执行「这个」，无论前面发生了什么');
});
// VM454:2 初始化
// VM454:7 「嵌套」
// VM454:14 执行「这个」
// VM454:12 执行「嵌套」
// VM454:20 执行「这个」，无论前面发生了什么
// Promise {<resolved>: undefined}



//  手动实现promise的理论基础

// new Promise()时接收一个executor函数作为参数，该函数会立即执行，函数中有两个参数，它们也是函数，
// 分别是resolve和reject，函数同步执行一定要放在try...catch中，否则无法进行错误捕获。


