// 输入和输出

function *foo(x, y){
  return x * y
}
var it = foo(6, 7)
var res = it.next()
console.log("res.value:", res.value)



// 迭代消息传递

{
  
  function *foo(x){
    var y = x * (yield)
    return y
  }
  
  var it = foo(6)
  
  // 启动foo(...)
  it.next()
  
  var res = it.next(7)
  console.log("res.value:", res.value)

  // 第一个next(...)总是启动一个生成器, 并运行到第一个yield处. 不过, 是第二个next(...)调用完成第一个被暂停的yield表达式, 
  // 第三个next(...)调用完成第二个yield,以此类推.

}