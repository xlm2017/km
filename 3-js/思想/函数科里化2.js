// 函数的柯里化，是 Javascript 中函数式编程的一个重要概念。
// 它返回的，是一个函数的函数。其实现方式，需要依赖参数以及递归，
// 通过拆分参数的方式，来调用一个多参数的函数方法，以达到减少代码冗余，增加可读性的目的。

function sum (a, b, c) {
  console.log(a + b + c);
}
sum(1, 2, 3); // 6
毫无疑问，sum 是个简单的累加函数，接受3个参数，输出累加的结果。

假设有这样的需求，sum的前2个参数保持不变，最后一个参数可以随意。那么就会想到，在函数内，是否可以把前2个参数的相加过程，给抽离出来，因为参数都是相同的，没必要每次都做运算。

如果先不管函数内的具体实现，调用的写法可以是这样： sum(1, 2)(3); 或这样 sum(1, 2)(10); 。就是，先把前2个参数的运算结果拿到后，再与第3个参数相加。

这其实就是函数柯里化的简单应用。

柯里化的实现
sum(1, 2)(3); 这样的写法，并不常见。拆开来看，sum(1, 2) 返回的应该还是个函数，因为后面还有(3) 需要执行。

那么反过来，从最后一个参数，从右往左看，它的左侧必然是一个函数。以此类推，如果前面有n个() ，那就是有n个函数返回了结果，只是返回的结果，还是一个函数。是不是有点递归的意思？

网上有一些不同的柯里化的实现方式，以下是个人觉得最容易理解的写法：

function curry (fn, currArgs) {
  return function () {
    let args = [].slice.call(arguments);

    // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
    if (currArgs !== undefined) {
      args = args.concat(currArgs);
    }

    // 递归调用
    if (args.length < fn.length) {
      return curry(fn, args);
    }

    // 递归出口
    return fn.apply(null, args);
  }
}
解析一下 curry 函数的写法：

首先，它有 2 个参数，fn 指的就是本文一开始的源处理函数 sum。currArgs 是调用 curry 时传入的参数列表，比如(1, 2)(3) 这样的。

再看到 curry 函数内部，它会整个返回一个匿名函数。

再接下来的 let args = [].slice.call(arguments); ，意思是将 arguments 数组化。arguments 是一个类数组的结构，它并不是一个真的数组，所以没法使用数组的方法。我们用了 call 的方法，就能愉快地对 args 使用数组的原生方法了。在这篇 「干货」细说 call、apply 以及 bind 的区别和用法 中，有关于 call 更详细的用法介绍。

currArgs !== undefined 的判断，是为了解决递归调用时的参数拼接。

最后，判断 args 的个数，是否与 fn(也就是 sum)的参数个数相等，相等了就可以把参数都传给 fn，进行输出；否则，继续递归调用，直到两者相等。

测试一下：

function sum (a, b, c) {
  console.log(a + b + c);
}

const fn = curry(sum);

fn(1, 2, 3); // 6
fn(1, 2)(3); // 6
fn(1)(2, 3); // 6
fn(1)(2)(3); // 6
都能输出 6 了，搞定！

柯里化的用途
理解了柯里化的实现之后，让我们来看一下它的实际应用。柯里化的目的是，减少代码冗余，以及增加代码的可读性。来看下面这个例子：

const persons = [
  { name: 'kevin', age: 4 },
  { name: 'bob', age: 5 }
];

// 这里的 curry 函数，之前已实现
const getProp = curry(function (obj, index) {
  const args = [].slice.call(arguments);
  return obj[args[args.length - 1]];
});

const ages = persons.map(getProp('age')); // [4, 5]
const names = persons.map(getProp('name')); // ['kevin', 'bob']
在实际的业务中，我们常会遇到类似的列表数据。用 getProp 就可以很方便地，取出列表中某个 key 对应的值。

需要注意的是，const names = persons.map(getProp('name')); 
执行这条语句时 getProp 的参数只有一个 name，而定义 getProp 方法时，传入 curry 的参数有2个，obj 和 index（这里必须写 2 个及以上的参数）。

为什么要这么写？关键就在于 arguments 的隐式传参。

const getProp = curry(function (obj, index) {
  console.log(arguments);
  // 会输出4个类数组，取其中一个来看
  // {
  //     0: {name: "kevin", age: 4},
  //     1: 0,
  //     2: [
  //         {name: "kevin", age: 4},
  //         {name: "bob", age: 5}
  //     ],
  //     3: "age"
  // }
});
// map 是 Array 的原生方法，它的用法如下：

var new_array = arr.map(function callback (currentValue[, index[, array]]) {
  // Return element for new_array
}[, thisArg]);
// 所以，我们传入的 name，就排在了 arguments 的最后。为了拿到 name 对应的值，
// 需要对类数组 arguments 做点转换，让它可以使用 Array 的原生方法。所以，最终 getProp 方法定义成了这样：

const getProp = curry(function (obj, index) {
  const args = [].slice.call(arguments);
  return obj[args[args.length - 1]];
});
// 当然，还有另外一种写法，curry 的实现更好理解，但是调用的代码却变多了，大家可以根据实际情况进行取舍。

const getProp = curry(function (key, obj) {
  return obj[key];
});

const ages = persons.map(item => {
  return getProp(item)('age');
});
const names = persons.map(item => {
  return getProp(item)('name');
});
// 最后，来看一个 Memoization 的例子。它用于优化比较耗时的计算，通过将计算结果缓存到内存中，这样对于同样的输入值，下次只需要中内存中读取结果。

function memoizeFunction (func) {
  const cache = {};
  return function () {
    let key = arguments[0];
    if (cache[key]) {
      return cache[key];
    } else {
      const val = func.apply(null, arguments);
      cache[key] = val;
      return val;
    }
  };
}

const fibonacci = memoizeFunction(function (n) {
  return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(100)); // 输出354224848179262000000
console.log(fibonacci(100)); // 输出354224848179262000000
// 代码中，第2次计算 fibonacci(100) 则只需要在内存中直接读取结果。