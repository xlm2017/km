function foo(something){
  this.a = something
}
var obj1 = {
  foo: foo
}
var obj2 = {}
obj1.foo(2)
console.log(obj1.a)

obj1.foo.call(obj2, 2)
console.log(obj2.a)

var bar = new obj1.foo(4)
console.log(obj1.a)
console.log(bar.a)


// new大于隐式绑定




//new与硬绑定比较
{
  function foo(something){
    this.a = something
  }
  var obj1 = {}
  var bar = foo.bind(obj1)
  bar(2)
  console.log(obj1.a)

  var baz = new bar(3)
  console.log(obj1.a)
  console.log(baz.a)
}
