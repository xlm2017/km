/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-24 11:19:30
 * @LastEditTime: 2023-02-24 11:19:54
 * @LastEditors: xlm
 */



class EventEmitter {
  // 初始化事件对象
  constructor() {
    this.events = {}
  }

  // 事件监听，监听的过程就是订阅，也就是把订阅者收集起来
  on(eventName, callback) {
    // 如果不存在该事件，则进行数组初始化
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    // 存在对应的数组继续订阅收集，则把事件推入收集数组
    this.events[eventName].push(callback)
    // 返回自身 方便链式调用
    return this
  }

  // 事件触发，触发的过程就是发布，也就是通知订阅者
  emit(eventName, ...args) {
    // 不存在该事件，则不触发
    if (!this.events[eventName]) {
      return this
    }
    // 存在则对收集的订阅者一一通知(函数一一执行)
    const fns = this.events[eventName]
    // 执行的时候绑定自身this
    fns.forEach(fn => fn.apply(this, args))
    // 返回自身 方便链式调用
    return this
  }

  // 解绑事件，取消订阅，将订阅者从订阅者数组中移除
  remove(eventName, callback) {
    if (!this.events[eventName]) {
      return this;
    }
    // 没有指定解绑事件? 就是没有指定对应的订阅者，那么移除所有订阅者
    if (!callback) {
      this.events[eventName] = null
      return this
    }
    // 否则找到该事件, 就是对应的订阅者，将其移除
    const index = this.events[eventName].indexOf(callback);
    this.events[eventName].splice(index, 1);
    return this;
  }

  // 单次绑定事件,执行完后解绑
  once(eventName, callback) {
    const only = () => {
      callback.apply(this, arguments);
      this.remove(eventName, only);
    };
    this.on(eventName, only);
    return this;
  }
}


const emt = new EventEmitter()
// 订阅者1
const listener1 = function (...args) {
  console.log('意林的第一个订阅者', ...args);
}
// 订阅者2
const listener2 = function (...args) {
  console.log('意林的第二个订阅者', ...args);
}
// 收集订阅者，将杂志命名为'yilin'
emt.on('yilin', listener1)
emt.on('yilin', listener2)

// 500ms后订阅者1不想要该杂志了，进行取消订阅
setTimeout(() => {
  emt.remove('yilin', listener1)
}, 500)

// 1秒后意林杂志更新了，进行发布，通知订阅者，这时由于订阅者1取消订阅了，所以订阅者1就不会执行了
setTimeout(() => {
  emt.emit('yilin', 'hello world')
}, 1000)

// 打印结果为：1s后打印 `意林的第二个订阅者 hello world`
