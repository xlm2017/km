const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}
test()

forEach是不能阻塞的，默认是请求并行发起，所以是同时输出1、4、9。

串行解决方案：

async function test() {
  for (let i = 0; i < list.length; i++) {
    let x = list[i]
    const res = await square(x)
    console.log(res)
  }
}
当然，也可以用 for of 语法，就是帅：

async function test() {
  for (let x of list) {
    const res = await square(x)
    console.log(res)
  }
}
还有一个更硬核点的，也是 axios 源码里所用到的，利用 promise 本身的链式调用来实现串行。

let promise = Promise.resolve()
function test(i = 0) {
  if (i === list.length) return
  promise = promise.then(() => square(list[i]))
  test(i + 1)
}
test()


一秒后同时输出 1、4、9

如果要每隔一秒输出把 forEach 换成普通 for 循环或者 for...of... 循环即可

这里并行进行是因为 forEach 实现的问题，源码里用 while 来一次性执行了所有回调

具体参考官网 polyfill： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

你这个用 while 来一次性执行了所有回调描述不太准确吧，普通的for 等于同一个块作用域连续await，而forEach的回调是一个个单独的函数，跟其他回调同时执行，互不干扰

function test() {
    list.forEach(async x=> {
      const res = await square(x)
      console.log(res)
    })

    //forEach循环等于三个匿名函数;
    (async (x) => {
        const res = await square(x)
        console.log(res)
    })(1);
    (async (x) => {
        const res = await square(x)
        console.log(res)
    })(2);
    (async (x) => {
        const res = await square(x)
        console.log(res)
    })(3);

    // 上面的任务是同时进行
  }

  async function test() {
    for (let x of list) {
      const res = await square(x)
      console.log(res)
    }
  }
  //等价于

  async function test() {
      const res = await square(1)
      console.log(res)
      const res2 = await square(2)
      console.log(res)
      const res3 = await square(3)
      console.log(res)
  }


  // 解法一，for循环

async function test() {
  for (let i = 0, len = list.length; i < len; i++) {
    const res = await square(list[i])
    console.log(res)
  }
}
// 解法2 for of循环
async function test() {
  for (x of list) {
    const res = await square(x)
    console.log(res)
  }
}
// 解法3 类似koa里面的compose思想解决
async function test() {
  const compose = (middleware, next) => {
    let index = -1
    return (ctx) => {
      const dispatch = (i) => {
        if (index < i ) {
          index = i
        }
        let fn = middleware[ index ]

        if (index === middleware.length) {
          fn = next
        }

        if (!fn) {
          return Promise.resolve()
        }

        return Promise.resolve(fn(ctx, async () => {
          return dispatch(index + 1)
        }))
      }

      dispatch(0)
    }
  }
  
  const middleware = []
  list.forEach((it) => {
    middleware.push(async (ctx, next) => {
      const res = await square(it)
      console.log(res)
      await next()
    })
  })

  compose(middleware, () => {
    console.log('end')
  })({ name: 'qianlongo' })
}

// 解法4 next思想 也是koa1的中间件执行思想

async function test() {
  let middleware = []

  list.forEach((it) =>{
    middleware.push(async (cb) => {
      const res = await square(it)
      console.log(res)
      cb && cb()
    })
  })
  
  const bindNext = (cbs) => {
    let next = function () {
      console.log('111')
    }
    let len = cbs.length

    while (len--) {
      next = cbs[ len ].bind(null, next)
    }

    return next
  }

  bindNext(middleware)()
}

// 解法5 利用promise的链式调用
function test() {
  let promise = Promise.resolve()

  list.forEach(x => {
    promise = promise.then(() => square(x)).then((res) => {
      console.log(res)
    })
  })
}


test()

forEach大概可以这么理解

Array.prototype.forEach = function (callback) {
  // this represents our array
  for (let index = 0; index < this.length; index++) {
    // We call the callback for each entry
    callback(this[index], index, this)
  }
}
所以是1秒后输出1, 4, 9; 几乎同时;但是有调用先后顺序;
改进的话, 大家都答了, 我就不嫌丑了...