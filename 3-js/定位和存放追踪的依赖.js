// track

// track 收集依赖  存入targetMap
// trigger 触发依赖,使用targetMap
// effect 副作用处理 

// 1. 定义两个全局变量
let targetMap = new WeakMap();
let activeEffect;

// track(obj, 'get', 'x')
function track(target, key) {
    // 首先找obj是否有被追踪
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        // 如果没有被追踪, 那么添加一个
        targetMap.set(target, (depsMap = new Map()));
    }
    // 然后寻找 obj.x 是否被追踪
    let dep = depsMap.get(key)
    if (!dep) {
        // 如果没有被追踪, 那么添加一个
        depsMap.set(key, (dep = new Set()));
    }
    // 如果没有添加 activeEffect 那么添加一个
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
    }
}

// 再写一个trigger
// trigger(obj, 'set', 'x')
// trigger只会去 targetMap中寻找 obj.x的追踪任务, 如果找到了就去重, 然后执行任务
// 也就是说: 抛开取值异常相关, trigger也只做了一件事: 从targetMap取值然后调用该函数值
function trigger(target, key) {
    // 寻找追踪向
    const depsMap = targetMap.get(target);
    // 没找到就什么都不干
    if (!depsMap) {
        return
    }
    // 去重
    const effects = new Set();
    depsMap.get(key).forEach(e => effects.add(e));
    // 执行
    effects.forEach(e => e())
}

// 最后就是effect
// effect(() => {
//     console.log("run cb")
// })

// effect 接收一个回调函数, 然后会被送给track.
// 1. 定义一个内部函数 _effect, 并执行
// 2. 返回一个闭包
// 而内部 _effect也做了两件事
// 1. 将自身赋值给 activeEffect
// 2. 执行 effect 回调函数

function effect(fn) {
   // 定义一个内部 _effect
   const _effect = function (...args){
       // 在执行时将自身赋值给 activeEffect
       activeEffect = _effect;
       // 执行回调
       return fn(...args)
   };
   _effect();
   // 返回闭包
   return _effect;
}