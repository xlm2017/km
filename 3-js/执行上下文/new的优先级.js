

function foo(){
  getName = function(){console.log(1)}
  return this
}
foo.getName = function(){
  console.log(2)
}
foo.prototype.getName = function(){
  console.log(3)
}
var getName = function(){
  console.log(4)
}
function getName(){
  console.log(5)
}

let obj = new foo;

console.log('obj--', obj);

console.log('函数:', foo.getName());

console.log('new:', new foo.getName());