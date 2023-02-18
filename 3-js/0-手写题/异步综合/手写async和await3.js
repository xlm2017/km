function* testG() {
  // await被编译成了yield
  const data = yield getData()
  console.log("data:", data)

  const data2 = yield getData()
  console.log("data2:", data2)

  return 'success'
}

let gen = testG()
let dataPromise = gen.next()
dataPromise.then((value1) => {
  // data1的value被拿到了 继续调用next并且传递给data
  let data2Promise = gen.next(value1)

  data2Promise.then((value2) => {
    // data2的value拿到了 继续调用next并且传递value2
    gen.next(value2)
  })
})


// 借助控制yield的流程, 实现异步串行

// 这样的一个看着像callback hell 的调用, generator函数把异步安排的明明白白, 进一步优化, 可以改成递归


{
  function asyncToGenerator(generatorFunc) {

    // 先调用generator函数, 生成迭代器
    // 对应 let gen = testG()
    const gen = generatorFunc.apply(this, arguments)
    
    // 返回一个promise 因为外部是用.then的方式, 或者await的方式去使用这个函数的返回值的
    // let test = asyncToGenerator(testG)
    // test().then(res=> console.log(res))
    return new Promise((resolve, reject) => {
      
      // 内部定义一个step函数 用来一步一步的跨过yield的阻碍
      // key有next和throw两种取值, 分别对应了gen的next和throw方法
      // arg参数则是用来把promise resolve出来的值交给下一个yield
      function step(key, arg) {
        let generatorResult;
        // 这个方法需要包裹在try catch中
        // 如果报错了 就把promise给reject掉 外部通过.catch可以获取到错误
        try {
          g56eneratorResult = gen[key](arg)
        } catch (error) {
          return reject(error)
        }
        // gen.next() 得到的结果是一个 { value, done }的结构
        const { value, done } = generatorResult
        if (done) {
          // 如果已经完成了 就直接resolve这个promise
          // 这个done是在最后一次调用next后才会true
          // 以本文的例子来说 此时的结果是 { done: true, value: "success" }
          // 这个value也就是generator函数最后的返回值
          return resolve(value)
        } else {
          // 除了最后结束的时候外, 每次调用gen.next()
          // 其实是返回 { value: promise, done: false }的结构
          // 这里要注意的是 Promise.resolve 可以接受一个promise为参数
          // 并且这个promise参数被resolve的时候, 这个then才会被调用
          return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
        }
      }
      step('next')
    })
  }
  const getData = () => new Promise(resolve => setTimeout(()=> resolve('data'), 1000))
  asyncToGenerator(testData).then(res => console.log(res))
  
  asyncToGenerator(testG).then(res => console.log(res))
}


// babel编译async函数的核心, 在babel中,generator函数也被编译成了一个很原始的形式.