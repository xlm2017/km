// 可以把生成器看做一个值的生产者, 我们通过迭代器接口的next()调用一次提取出一个值
// 严格来说, 生成器本身并不是iterable, 尽管非常类似--当你执行一个生成器, 就得到了一个迭代器

function *foo(){

}
var it = foo()

// 可以通过生成器实现前面的这个something无限数字序列生产者

function *something(){
  var nextVal;
  while(true){
    if(nextVal === undefined){
      nextVal = 1
    }
    else {
      nextVal = (3 * nextVal) + 6
    }
    yield nextVal;
  }
}