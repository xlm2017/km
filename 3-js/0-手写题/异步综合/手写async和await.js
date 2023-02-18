function *testG(){
  // await被编译成了yield
  const data = yield getData()
  console.log("data:", data)

  const data2 = yield getData()
  console.log("data2:", data2)

  return 'success'
}

// 我们知道, generator函数是不会自动执行的, 每一次调用它的next方法, 会停留在下一个yield的位置
// 利用这个特性, 我们只要写一个自动执行的函数, 就可以让这个generator函数完全实现async函数的功能

const getData = () => new Promise(resolve => setTimeout(()=> resolve('data'), 1000))

let test = asyncToGenerator(
  function* testG(){
    const data = yield getData()
    console.log("data:", data)

    const data2 = yield getData()
    console.log("data2:", data2)

    return 'success'
  }
)
test().then(res => console.log(res))

