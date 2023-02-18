var x = 1
function *foo(){
  x++
  yield;
  console.log("X:", x)
}
function bar(){
  x++
}

// 构造一个迭代器it来控制这个生成器
var it = foo()

// 这里启动foo()!
it.next()
console.log(x)
bar()
console.log(x)
it.next()
console.log(x)