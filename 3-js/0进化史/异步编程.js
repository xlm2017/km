async function async1 () {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2 () {
    console.log('async2');
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});

console.log('script end');



紧接着，作者先给出了答案。并希望读者先行自我测试。

script start
async1 start
async2
promise1
script end
promise2
async1 end
setTimeout
我在看这道题的时候，先按照自己的理解写出了结果。

script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
一些重要的概念
这里需要先简单地说一些 event loop 的概念。

Javascript是单线程的，所有的同步任务都会在主线程中执行。
主线程之外，还有一个任务队列。每当一个异步任务有结果了，就往任务队列里塞一个事件。
当主线程中的任务，都执行完之后，系统会 “依次” 读取任务队列里的事件。与之相对应的异步任务进入主线程，开始执行。
异步任务之间，会存在差异，所以它们执行的优先级也会有区别。大致分为 微任务（micro task，如：Promise、MutaionObserver等）
和宏任务（macro task，如：setTimeout、setInterval、I/O等）。同一次事件循环中，微任务永远在宏任务之前执行。
主线程会不断重复上面的步骤，直到执行完所有任务。
另外，还有 async/await 的概念。

async 函数，可以理解为是Generator 函数的语法糖。
它建立在promise之上，总是与await一起使用的。
await会返回一个Promise 对象，或者一个表达式的值。
其目的是为了让异步操作更优雅，能像同步一样地书写。
我的理解
再说说我对这道题的理解。

首先，从console的数量上看，会输出8行结果。
再瞟了一眼代码，看到了setTimeout，于是，默默地把它填入第8行。
在setTimeout附近，看到了 console.log( 'script start' ) 和 async1()，可以确认它们是同步任务，会先在主线程中执行。
所以，妥妥地在第1行填入 script start，第2行填入async1方法中的第一行 async1 start。
接下来，遇到了await。从字面意思理解，让我们等等。需要等待async2()函数的返回，同时会阻塞后面的代码。所以，第3行填入 async2。
讲道理，await都执行完了，该轮到console.log( 'async1 end' )的输出了。但是，别忘了下面还有个Promise，
有一点需要注意的是：当 new 一个 Promise的时候，其 resolve 方法中的代码会立即执行。如果不是 async1()的 await 横插一杠，promise1 可以排得更前面。所以，现在第4行填入 promise1。
再接下来，同步任务 console.log( 'script end' ) 执行。第5行填入 script end。
还有第6和第7行，未填。回顾一下上面提到 async/await 的概念，其目的是为了让异步能像同步一样地书写。
那么，我认为 console.log( 'async1 end' ) 就是个同步任务。所以，第6行填入async1 end。
最后，顺理成章地在第7行填入 promise2。
与作者答案的不同
回过头对比与作者的答案，发现第6和第7行的顺序有问题。

再耐心地往下看文章，反复地看了几遍 async1 end 和 promise2 谁先谁后，还是无法理解为何在chrome浏览器中，promise2 会先于 async1 end 输出。

然后，看到评论区，发现也有人提出了相同的疑惑。@rhinel提出，在他的72.0.3622.0（正式版本）dev（64 位）的chrome中，
跑出来的结果是 async1 end 在 promise2 之前。

随即我想到了一种可能，JS的规范可能会在未来有变化。于是，我用自己的react工程试了一下（工程中的babel-loader版本为7.1.5。
.babelrc的presets设置了stage-3），结果与我的理解一致。当前的最新版本 chromeV71，在这里的执行顺序上，的确存在有问题。

于是，我也在评论区给作者留了言，进行了讨论。@rhinel最后也证实，其实最近才发布通过了这个顺序的改进方案，
这篇 《Faster async functions and promises》 详细解释了这个改进，以及实现效果。不久之后，作者也在他文章的最后，补充了我们讨论的结果，供读者参考。