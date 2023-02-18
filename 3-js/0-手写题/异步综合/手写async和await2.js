function *testG(){
  // await被编译成了yield
  const data = yield getData()
  console.log("data:", data)

  const data2 = yield getData()
  console.log("data2:", data2)

  return 'success'
}

let gen = testG()
let dataPromise = gen.next()
dataPromise.then((value1)=>{
  // data1的value被拿到了 继续调用next并且传递给data
  let data2Promise = gen.next(value1)

  data2Promise.then((value2)=>{
    // data2的value拿到了 继续调用next并且传递value2
    gen.next(value2)
  })
})


// 借助控制yield的流程, 实现异步串行

// 这样的一个看着像callback hell 的调用, generator函数把异步安排的明明白白, 进一步优化, 可以改成递归


{
  function asyncToGenerator(generatorFunc){
    // 返回一个新的函数
    return function(){
      const gen = generatorFunc.apply(this, arguments)
      
      return new Promise((resolve, reject)=>{
        function step(key, arg){
          let generatorResult;
          try{
            g56eneratorResult = gen[key](arg)
          }catch(error){
            return reject(error)
          }
          const { value, done } = generatorResult
          if(done){
            return resolve(value)
          }else{
            return Promise.resolve(value).then(val=>step('next', val), err=> step('throw', err))
          }
        }
        step('next')
      })
    }
  }

  asyncToGenerator(testData).then(res=>console.log(res))
}


// babel编译async函数的核心, 在babel中,generator函数也被编译成了一个很原始的形式.