
function defineReactive(obj, key, value) {
    this.observer(value); //如果传进来的参数是对象,就回调一下这个函数,就是一个递归函数
    let dep = new Dep(); // 给每一个属性都添加一个具有发布和订阅的功能
    // 要定义属性的对象。
    // 要定义或修改的属性的名称或 Symbol 。
    // 要定义或修改的属性描述符。
    Object.defineProperty(obj, key, {
        get() {
            // 创建watcher时,会获取到对应的内容 并且把watcher放到了全局上
            Dep.target && dep.addSub(Dep.target);
            return value;
        },
        set(newVal) {
            if (value !== newVal) {
                this.observer(newVal); // 给设置的新值也加上 get set 方法
                value = newVal;
                dep.notify();  // 执行观察者更新时的函数
            }
        },
        configurable: true,
        enumerable: false,
        writable: false,
    })
}



