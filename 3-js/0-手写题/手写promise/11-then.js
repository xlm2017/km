
class Promise {
  constructor(exec) {
    console.log("执行器:")
    this.state = 'pending'
    this.cbs = []
    this.result = null
    exec(this.resolve.bind(this))
    // exec(this.resolve)
  }
  resolve(value) {
    console.log("调用resolve:", value)
    this.result = value
    this.cbs.forEach(cb => {
      // 执行then中收集的函数
      cb(value)
    });
    this.state = 'fullied'
    // return res
  }
  then(onResolved) {
    console.log("调用then:")
    if (this.state === 'fullied') {
      // 说明已经执行了resolve
      console.log("已经执行完了resolve")

      // 第二个then,在这里执行
      // let newPro = new Promise((newResolve) => {
      //   this.cbs.push(onResolved(this.result))
      //   newResolve(this.result)
      // })
      // .then((res) => {
      //   console.log("假设")
      // })
      return newPro
    } else if (this.state === 'pending') {
      // 说明还未执行, 
      // 先订阅起来, 等resolve执行完再触发

      // 没有实现链式操作
      // console.log("先订阅起来, 等resolve执行完再触发")
      let newPro = new Promise((newResolve) => {
        // this.cbs.push(onResolved)
        this.cbs.push(() => {
          let res = onResolved(this.result)
          if (res instanceof Promise) {
            res.then(newResolve)
          } else {
            newResolve(res)
          }
        })

      })
      // .then((res) => {
      //   console.log("假设")
      // })
      return newPro


      // return new Promise((newResolve) => {
      //   this.cbs.push(onResolved(this.result))
      //   newResolve(this.result)
      // })

      // 递归解决链式调用

      // 递归临界点分析
      // resolve执行一次, then链式, 取决于then中是否有返回值return,没有默认undefined,  return cb()
      // 每次then调用, 都要获得上次then调用的函数执行的结果
      // let newPro = new Promise((newResolve) => {
      //   this.cbs.push(onResolved(this.result))
      //   newResolve(this.result)
      // })
      // // .then((res) => {
      // //   console.log("假设")
      // // })
      // return newPro
    }
  }
}

function promiseTest1() {
  let pro = new Promise(
    function executor(resolve, reject) {
      let data = {
        name: "张三",
        getName: () => {
          console.log('获得名字', this.name)
          return this.name
        }
      }
      setTimeout(() => {
        resolve(data)
      }, 1000)
    }
  )
  pro.then((res) => {
    console.log("第一个then的结果:", res)
    return res.toString()
    // setTimeout((res) => {
    //   console.log("then的结果", res)
    //   return res.toString()
    // }, 2000)
  })
    .then(res => {
      console.log("新的链式:", res)
    })
}
promiseTest1()

