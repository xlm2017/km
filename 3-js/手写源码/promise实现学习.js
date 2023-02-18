
// 1. 基础框架
function MyPromise(executor) {

    function resolve(value) {

    }

    function reject(reason) {

    }

    try {
        executor(resolve, reject);
    } catch (reason) {
        reject(reason);
    }
}


module.exports = MyPromise;

// let MyPromise = require('./MyPromise.js');
// let promise = new MyPromise(function(resolve, reject) {
//   resolve(123);
// })
//   resolve()接收Promise成功值value，reject接收Promise失败原因reason。


// 2. 添加状态机
// 目前实现存在的问题：

// Promise是一个状态机的机制，初始状态为 pending，成功状态为 fulfilled，失败状态为 rejected。
// 只能从 pending -> fulfilled，或者从 pending -> rejected，并且状态一旦转变，就永远不会再变了。
// 所以，我们需要为Promise添加一个状态流转的机制。
{
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';

    function MyPromise(executor) {
        let self = this;
        self.state = PENDING;


        function resolve(value) {
            if (self.state === PENDING) {
                self.state = FULFILLED;
            }
        }

        function reject(reason) {
            if (self.state === PENDING) {
                self.state = REJECTED;
            }
        }

        try {
            executor(resolve, reject);
        } catch (reason) {
            reject(reason);
        }
    }

    module.exports = MyPromise;
}



// 3. 添加then方法


// Promise.prototype.then(onFulfilled, onRejected)
// 添加解决(fulfillment)和拒绝(rejection)回调到当前 promise, 返回一个新的 promise, 将以回调的返回值来resolve.
const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');
});

promise1.then((value) => {
    console.log(value);
    // expected output: "Success!"
});
const promise1 = new Promise((resolve, reject) => {
    resolve('Success!');
});

promise1.then((value) => {
    console.log(value);
    // expected output: "Success!"
});
// VM327:6 Success!
// Promise {<resolved>: undefined}



// const promise1 = new Promise((resolve, reject) => {
//     reject('reject');
// });

// promise1.then((value) => {
//     console.log("ccc,", value);
//     // expected output: "Success!"
// },(value) => {
//     console.log("cuocuo,", value);
//     // expected output: "Success!"
// });
// VM290:9 cuocuo, reject
// Promise {<resolved>: undefined}

// Uncaught (in promise) reject!  没有onRejected时报错,只是浏览器报错, 实际不会报错


// onFulfilled 可选
// 当 Promise 变成接受状态（fulfilled）时调用的函数。该函数有一个参数，即接受的最终结果（the fulfillment  value）。
// 如果该参数不是函数，则会在内部被替换为 (x) => x，即原样返回 promise 最终结果的函数
// onRejected 可选
// 当 Promise 变成拒绝状态（rejected）时调用的函数。该函数有一个参数，即拒绝的原因（rejection reason）。  
// 如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)。

注意：如果忽略针对某个状态的回调函数参数，或者提供非函数(nonfunction) 参数，
那么 then 方法将会丢失关于该状态的回调函数信息，但是并不会产生错误。
如果调用 then 的 Promise 的状态（fulfillment 或 rejection）发生改变，
但是 then 中并没有关于这种状态的回调函数，那么 then 将创建一个没有经过回调函数处理的新 Promise 对象，
这个新 Promise 只是简单地接受调用这个 then 的原 Promise 的终态作为它的终态。



then方法的返回值
当一个 Promise 完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回。如果 then 中的回调函数：

返回了一个值，那么 then 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
没有返回任何值，那么 then 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 undefined。
抛出一个错误，那么 then 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
返回一个已经是接受状态的 Promise，那么 then 返回的 Promise 也会成为接受状态，并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。
返回一个已经是拒绝状态的 Promise，那么 then 返回的 Promise 也会成为拒绝状态，并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。
返回一个未定状态（pending）的 Promise，那么 then 返回 Promise 的状态也是未定的，并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。

{
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';

    function MyPromise(executor) {
        let self = this;

        self.state = PENDING;
        self.value = null;
        self.reason = null;

        function resolve(value) {
            if (self.state === PENDING) {
                self.state = FULFILLED;
                self.value = value;
            }
        }

        function reject(reason) {
            if (self.state === PENDING) {
                self.state = REJECTED;
                self.reason = reason;
            }
        }

        try {
            executor(resolve, reject);
        } catch (reason) {
            reject(reason);
        }
    }

    MyPromise.prototype.then = function (onFuifilled, onRejected) {
        let self = this;

        if (self.state === FULFILLED) {
            onFuifilled(self.value);
        }

        if (self.state === REJECTED) {
            onRejected(self.reason);
        }
    };

    module.exports = MyPromise;
}

// 4. 实现异步调用resolve
// 目前实现存在的问题：

// 同步调用resolve()没有问题，但如果是异步调用，比如放到setTimeout中，因为目前的代码在调用then()方法时，
// state仍是pending状态，当timer到时候调用resolve()把state修改为fulfilled状态，但是onFulfilled()函数已经没有时机调用了。
{
    let bb = new MyPromise((resolve, reject) => {

        resolve("调用成功")  // 这样执行
        // 下面的不执行
        // setTimeout(() => {
        //     resolve("调用成功")
        // }, 2000)

    })
        .then((value) => {
            console.log("我调用了", value)
        })
    // VM794: 7 我调用了 调用成功
}
{
    let bbb = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("调用成功")
        }, 2000)
    })
        .then((value) => {
            console.log("我调用了", value)
        })
    // undefined
    // VM730: 7 我调用了 调用成功   // 两秒后执行
    // bbb Promise {<resolved>: undefined}
}
{
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';

    function MyPromise(executor) {
        let self = this;

        self.state = PENDING;
        self.value = null;
        self.reason = null;
        self.onFulfilledCallbacks = [];
        self.onRejectedCallbacks = [];

        function resolve(value) {
            if (self.state === PENDING) {
                self.state = FULFILLED;
                self.value = value;

                self.onFulfilledCallbacks.forEach(function (fulfilledCallback) {
                    fulfilledCallback();
                });
            }
        }

        function reject(reason) {
            if (self.state === PENDING) {
                self.state = REJECTED;
                self.reason = reason;

                self.onRejectedCallbacks.forEach(function (rejectedCallback) {
                    rejectedCallback();
                });
            }
        }

        try {
            executor(resolve, reject);
        } catch (reason) {
            reject(reason);
        }
    }

    MyPromise.prototype.then = function (onFuifilled, onRejected) {
        let self = this;

        if (self.state === PENDING) {
            self.onFulfilledCallbacks.push(() => {
                onFuifilled(self.value);
            });
            self.onRejectedCallbacks.push(() => {
                onRejected(self.reason);
            });
        }

        if (self.state === FULFILLED) {
            onFuifilled(self.value);
        }

        if (self.state === REJECTED) {
            onRejected(self.reason);
        }
    };

    module.exports = MyPromise;
}

// 5. then返回的仍是Promise
{
    MyPromise.prototype.then = function (onFuifilled, onRejected) {
        let self = this;
        let promise2 = null;

        promise2 = new MyPromise((resolve, reject) => {
            if (self.state === PENDING) {
                self.onFulfilledCallbacks.push(() => {
                    try {
                        let x = onFuifilled(self.value);
                        self.resolvePromise(promise2, x, resolve, reject);
                    } catch (reason) {
                        reject(reason);
                    }
                });
                self.onRejectedCallbacks.push(() => {
                    try {
                        let x = onRejected(self.reason);
                        self.resolvePromise(promise2, x, resolve, reject);
                    } catch (reason) {
                        reject(reason);
                    }
                });
            }

            if (self.state === FULFILLED) {
                try {
                    let x = onFuifilled(self.value);
                    self.resolvePromise(promise2, x, resolve, reject);
                } catch (reason) {
                    reject(reason);
                }
            }

            if (self.state === REJECTED) {
                try {
                    let x = onRejected(self.reason);
                    self.resolvePromise(promise2, x, resolve, reject);
                } catch (reason) {
                    reject(reason);
                }
            }
        });

        return promise2;
    };

    // resolvePromise()是用来解析then()回调函数中返回的仍是一个Promise，这个Promise有可能是我们自己的，
    // 有可能是别的库实现的，也有可能是一个具有then()方法的对象，所以这里靠resolvePromise()来实现统一处理。
    MyPromise.prototype.resolvePromise = function (promise2, x, resolve, reject) {
        let self = this;
        let called = false;   // called 防止多次调用

        if (promise2 === x) {
            return reject(new TypeError('循环引用'));
        }

        if (x !== null && (Object.prototype.toString.call(x) === '[object Object]' || Object.prototype.toString.call(x) === '[object Function]')) {
            // x是对象或者函数
            try {
                let then = x.then;

                if (typeof then === 'function') {
                    then.call(x, (y) => {
                        // 别人的Promise的then方法可能设置了getter等，使用called防止多次调用then方法
                        if (called) return;
                        called = true;
                        // 成功值y有可能还是promise或者是具有then方法等，再次resolvePromise，直到成功值为基本类型或者非thenable
                        self.resolvePromise(promise2, y, resolve, reject);
                    }, (reason) => {
                        if (called) return;
                        called = true;
                        reject(reason);
                    });
                } else {
                    if (called) return;
                    called = true;
                    resolve(x);
                }
            } catch (reason) {
                if (called) return;
                called = true;
                reject(reason);
            }
        } else {
            // x是普通值，直接resolve
            resolve(x);
        }
    };
}


// 6. 让then()方法的回调函数总是异步调用

// Promise属于微任务，这里我们为了方便用宏任务setTiemout来代替实现异步，
// 具体关于宏任务、微任务以及Event Loop可以参考我的另一篇文章带你彻底弄懂Event Loop。

{
    MyPromise.prototype.then = function (onFuifilled, onRejected) {
        let self = this;
        let promise2 = null;

        promise2 = new MyPromise((resolve, reject) => {
            if (self.state === PENDING) {
                self.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFuifilled(self.value);
                            self.resolvePromise(promise2, x, resolve, reject);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, 0);
                });
                self.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(self.reason);
                            self.resolvePromise(promise2, x, resolve, reject);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, 0);
                });
            }

            if (self.state === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFuifilled(self.value);
                        self.resolvePromise(promise2, x, resolve, reject);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
            }

            if (self.state === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        self.resolvePromise(promise2, x, resolve, reject);
                    } catch (reason) {
                        reject(reason);
                    }
                }, 0);
            }
        });

        return promise2;
    };
}

// 7. 实现catch()方法
// 8. 实现finally方法
// 9. 实现done方法
// 10. 实现Promise.all方法
// 11. 实现Promise.race方法
// 12. 实现Promise.resolve方法
// 12. 实现Promise.reject方法
// 13. 实现Promise.deferred方法
// 13. 如何停止一个Promise链
// 14. 如何解决Promise链上返回的最后一个Promise出现错误



Promise.prototype.finally(onFinally)
// 添加一个事件处理回调于当前promise对象，并且在原promise对象解析完毕后，
// 返回一个新的promise对象。回调会在当前promise运行完毕后被调用，无论当前promise的状态是完成(fulfilled)还是失败(rejected)

Promise.all() 方法接收一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入，并且只返回一个Promise实例， 
那个输入的所有promise的resolve回调的结果是一个数组。这个Promise的resolve回调执行是在所有输入的promise的resolve回调都结束，
或者输入的iterable里没有promise了的时候。它的reject回调执行是，
只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，并且reject的是第一个抛出的错误信息。
参数
iterable
一个可迭代对象，如 Array 或 String。
返回值
如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise。
如果传入的参数不包含任何 promise，则返回一个异步完成（asynchronously resolved） Promise。
注意：Google Chrome 58 在这种情况下返回一个已完成（already resolved）状态的 Promise。
其它情况下返回一个处理中（pending）的Promise。这个返回的 promise 之后会在所有的 promise 
都完成或有一个 promise 失败时异步地变为完成或失败。 见下方关于“Promise.all 的异步或同步”示例。返回值将会按照参数内的 promise 顺序排列，而不是由调用 promise 的完成顺序决定。


Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝

Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise 。如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），
就返回一个失败的 promise 和AggregateError类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起。本质上，这个方法和Promise.all()是相反的。

Promise.reject()方法返回一个带有拒绝原因的Promise对象。

Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。如果这个值是一个 promise ，那么将返回这个 promise ；如果这个值是thenable（即带有"then" 方法），
返回的promise会“跟随”这个thenable的对象，采用它的最终状态；否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平。

catch() 方法返回一个Promise，并且处理拒绝的情况。它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。 
(事实上, calling obj.catch(onRejected) 内部calls obj.then(undefined, onRejected)).