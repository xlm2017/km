var something = (function(){
  var nextVal;

  return {
    // for..of 循环需要
    [Symbol.iterator]: function(){
      return this
    },

    // 标准迭代器接口方法
    next: function(){
      if(nextVal === undefined){
        nextVal = 1
      }
      else{
        nextVal = (3 * nextVal) + 6
      }
      return {
        done: false,
        value: nextVal
      }
    }
  }
})()

something.next().value;
something.next().value;
something.next().value;
something.next().value;

// [Symbol.iterator]
// [...] 语法被称为 计算属性名 . 这在对象术语定义中是指, 指定一个表达式并用这个表达式的结果作为属性的名称, 另外, Symbol.iterator是ES6预定义的特殊Symbol值之一.

for(var v of something){
  console.log(v);

  // 不要死循环
  if(v > 500){
    break
  }
}