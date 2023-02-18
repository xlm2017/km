function Promise(fn) {
  this.cbs = [];
  const resolve = (value) => {
    console.log("调用resolve")
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach((cb) => cb(value));
    });
  }
  fn(resolve);
}
Promise.prototype.then = function (onResolved) {
  return new Promise((resolve) => {
    this.cbs.push(() => {
      const res = onResolved(this.data);
      if (res instanceof Promise) {
        res.then(resolve);
      } else {
        resolve(res);
      }
    });
  });
};

function promiseTest1() {
  let pro = new Promise(
    function executor(resolve, reject) {
      let data = {
        name: "张三",
        getName: () => {
          console.log('获得名字', this.name)
          return this.name
        }
      }
      setTimeout(() => {
        resolve(data)
      }, 1000)
    }
  )
  pro.then((res) => {
    console.log("第一个then的结果:", res)
    return res.toString()
    // setTimeout((res) => {
    //   console.log("then的结果", res)
    //   return res.toString()
    // }, 2000)
  })
    .then(res => {
      console.log("新的链式:", res)
    })
}
promiseTest1()