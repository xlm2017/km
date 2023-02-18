function func() {
  const guang = 'guang';
  return function func2() {
    const ssh = 'ssh';
    function func3() {
      const suzhe = 'suzhe';
      // 函数只有使用外部变量的时候, 才会生成相对应的闭包.
      // 函数内部自己的变量, 不会生成闭包.
      console.log(guang)
      console.log(ssh)
    }
    return func3
  }
}
debugger
let fun = func()()
console.log(fun)
// [[Scopes]] Closure