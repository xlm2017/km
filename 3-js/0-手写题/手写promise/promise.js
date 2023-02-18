let p1 = new Promise((resolve, reject) => {
  let res = resolve('成功')
  console.log("res:", res)
  reject('失败')
})
console.log(p1)

let p2 = new Promise((resolve, reject) => {
  reject('失败')
  resolve('成功')
})
console.log(p2)

let p3 = new Promise((resolve, reject) => {
  throw('报错')
})
console.log(p3)


// 没有访问promise内部状态的标准方法.

[[PromiseState]]
[[PromiseResult]]

require('promise-status-async') // 库

console.log(Object.getOwnPropertyNames(Promise))
[
  'length',
  'name',
  'prototype',
  'all',
  'race',
  'resolve',
  'reject',
  'allSettled'
]

console.log(Object.getOwnPropertySymbols(Promise))
// [ Symbol(Symbol.species) ]


console.log(Promise.prototype)

Object.getOwnPropertyNames(Promise.prototype)
// ['constructor', 'then', 'catch', 'finally']

console.log(Object.getOwnPropertySymbols(Promise.prototype))
// [ Symbol(Symbol.toStringTag) ]

Object.prototype.toString.call(Promise)
// '[object Function]'
// .slice(8, -1)

Object.prototype.toString.call(Promise.prototype)
// '[object Promise]'
// .slice(8, -1)



class Arr {
    
}
let a = new Arr()
Object.prototype.toString.call(a)
// '[object Object]'
Object.prototype.toString.call(Arr)
// '[object Function]'
Arr[Symbol.toStringTag] = 'ss'
Object.prototype.toString.call(Arr)
// '[object ss]'




// 关于bind()函数
// ES5 引入了 Function.prototype.bind。调用f.bind(someObject)会创建一个与f具有相同函数体和作用域的函数，
// 但是在这个新函数中，this将永久地被绑定到了bind的第一个参数，无论这个函数是如何被调用的。bind绑定的参数只生效一次。
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a:'yoo'}); // bind只生效一次！
console.log(h()); // azerty

// 传入bind的第二个参数以及后面的，依照先后顺序构成绑定函数的参数。
var foo = {
  x: 3
} 
var bar = function(){
  console.log(this.x);
} 
bar(); // undefined

var boundFunc = bar.bind(foo);

boundFunc(); // 3


// 有时候，我们须要保持this的上下文，也就是在一个运行环境中，想要訪问到的this值。在什么时候须要这么做呢？

// 比方说将一个对象的方法赋值给了一个全局变量，然后在全局变量中调用这种方法，那么this值就不再是原来的对象而是window对象了。
// 但是我们还需要依照对象的方法来调用。

// 又比方说一个方法中包括了闭包，闭包是无法訪问到其外部函数的this对象的，由于this对象是在调用方法的时候自己主动生成，
// 内部函数在搜索这两个变量的时候仅仅会搜索到其自身的活动对象。而不会沿着作用域链往外搜索，所以闭包訪问不到外部函数的this值。

// 在react中，常看到

export default class App extends Component {
  constructor(props) {
    super(props);
    this.foo = this.foo.bind(this);
  }
  
  foo() {
    // todo something
  }
  
  render() {
    return (
      <View>
        <Button onPress={this.foo}/>
      </View>
    )
  }
}

// 如果你传递一个函数名给一个变量，然后通过在变量后加括号’()'来调用这个方法，此时方法内部的this的指向就会丢失。这就会出现外部的foo方法内部的this会丢失指向。

// 为了解决这个问题，我们需要在实例化对象的时候，需要在构造函数中绑定this，使得无论事件处理函数如何传递，它的this的指向都是固定的，固定指向我们所实例化的对象。
// ————————————————
// 版权声明：本文为CSDN博主「覃大畅」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/u013003052/article/details/87894194





/**
 * This function allow you to modify a JS Promise by adding some status properties.
 * Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
 * But modified according to the specs of promises : https://promisesaplus.com/
 */
 function MakeQuerablePromise(promise) {
  // Don't modify any promise that has been already modified.
  if (promise.isFulfilled) return promise;

  // Set initial state
  var isPending = true;
  var isRejected = false;
  var isFulfilled = false;

  // Observe the promise, saving the fulfillment in a closure scope.
  var result = promise.then(
      function(v) {
          isFulfilled = true;
          isPending = false;
          return v; 
      }, 
      function(e) {
          isRejected = true;
          isPending = false;
          throw e; 
      }
  );

  result.isFulfilled = function() { return isFulfilled; };
  result.isPending = function() { return isPending; };
  result.isRejected = function() { return isRejected; };
  return result;
}