function foo(){
  console.log(this.a)
}
var a = 2
foo.call(null)


{
  function foo(a, b){
    console.log('a:' + a + ',b:' + b)
  }
  // 把数组'展开'成参数
  foo.apply(null, [2, 3])
  
  //使用bind(...)进行科里化
  var bar = foo.bind(null, 2)
  bar(3)
}


// 更安全的this
// 一种'更安全'的做法是传入一个特殊的对象, 把this绑定到这个对象不会对你的程序产生副作用
// 一个空的非委托的对象 Object.create(null)

// 总是使用null来忽略this绑定可能产生一些副作用, 如果某个函数确实使用了this(比如第三方库中的一个函数), 
// 那默认绑定规则会把this绑定到全局对象(在浏览器中这个对象是window)