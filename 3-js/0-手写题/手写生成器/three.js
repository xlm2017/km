function *foo(x){
  var y = x * (yield 'Hello')
  return y
}

var it = foo(6)

var res = it.next()   // 第一个next(),并不传入任何东西
console.log("res.value:", res.value)

res = it.next(7)      // 向等待的yield传入7
console.log("res.value:", res.value)


// yield...和next(...)这一对组合起来, 在生成器中构成了一个双向消息传递系统.