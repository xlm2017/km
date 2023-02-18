// class MyPromise{
//     constructor(fn){
//     //   executor 执行函数
//     }
//     then(){

//     }
//     all(){

//     }
//     race(){

//     }
//     finally(){

//     }
// }


function promiseFirst(executor) {
    this.status = 'pending'   // fulfilled rejected
    this.value = null
    this.reason = null
    let that = this
    function resolve(value) {
        if (that.status === 'pending') {
            that.status = 'fulfilled'
            that.value = value
        }
    }
    function reject(value) {
        if (that.status === 'pending') {
            that.status = 'rejected'
            that.value = value
        }
    }
    executor(resolve, reject)
}
promiseFirst.prototype.then = function (params) {
    
}