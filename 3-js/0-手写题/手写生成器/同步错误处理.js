function *main(){
  var x = yield 'Hello World!'
  yield x.toLowerCase()  // 引发一个异常
}
var it = main()

console.log("it.next().value:", it.next().value)   

try{
  it.next(42)
}
catch(err){
  console.log(err)
}