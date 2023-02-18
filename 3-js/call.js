```
// A对象
let a = {
    name: "aaa",
    toName(age) {
        console.log(age, "我的名字:", this.name)
    }
}
// B对象
let b = {
    name: "bbb",
}
// A对象调用自己的方法
a.toName('A对象')
// A对象具有某种能力, 能打印自己的名字,但是如何与别人共享这种能力呢?
// 编程思想促进了语法的形成 ==>  于是js语法就设计了这种通用能力
a.toName.call(b, 'B对象')
```
再深入思考一下, call语法是基于什么形成的呢 ?
    了解底层语法有助于我们理解高级的语法
因为在底层的语法眼中, 高级语法只不过是工具, 根本不算语法, 不过是由我定义构建处理来的

理解call函数, 核心必要知识
1. 接受函数也可以调用函数这个观念(违反直觉, 需要编程思维, 原型 原型链 prototype)
2. 词法作用域 作用域链(不同浏览器内核不同, 谷歌浏览器是v8设计出来的js执行机制, 底层整个系统基于算法 + 数据结构, 总之, 这就是js执行规则的制定者)
3. 谁是this, 即谁在调用函数
函数调用, 需要知道函数当前的上下文信息,
    因为函数内部的作用域可能会引用函数拥有者的相关信息, 函数拥有者就是函数的上下文,
    找不到需要的信息, 通过作用域链就会在全局作用域寻找

        ```
Object.prototype.mycall = function(obj){
    // a.toName.mycall(b, 'B对象')
    // 拆开分析 , 上面是我们的目标
    // 1. 可以看出, a.toName就是我们要写的这个函数的调用者, 'B对象',就是传入的第二个参数
    let fn = this 
    // 此时fn就是我们要借用的函数 a.toName 用来打印名字, 但是此时它打印的名字依然是A对象的
    // 2. 如何让它打印传入对象obj, 也就是b的名字呢?
    // 作用域分析, 方法一: 将A对象与B对象交换作用域 (v8也许有,但我不知道)
    // 方法二: 打不过就加入, A对象抄袭B对象, 将函数复制一份, 变成自己的函数, 然后调用自己的函数
    obj.copyFn = fn
    obj.copyFn()
}

```
上面是最核心的实现原理, call的本质并不是调用别人的函数, 而是抄袭别人的能力变成自己的能力, 哈哈哈

显然, 上面的mycall还要很多问题
1. 将传入的对象添加了copyFn函数, 可能重置掉对象原有的copyFn, 修改了对象, 需要delete删除
2. 传入对象需要进行类型判断
3. 传入参数需要处理
Object.prototype.mycall = function (obj) {
    obj = obj || window   //node环境下无法使用window 
    // 这里如果害怕属性覆盖可以设置唯一值, 这里就不展开了
    let fn = this
    //给context添加一个方法 指向this
    obj[fn] = this
    // 处理参数 去除第一个参数this 其它传入fn函数
    let arg = [...arguments].slice(1)
    // 或者使用rest运算符获取参数
    // function f(a, ...arg) {
    //     console.log(arg, Array.isArray(arg))
    // }
    // f() //[] true
    // f(1)  //[] true
    // f(1, 2)  //[2] true
    // f(1, 2, 3)  //[2, 3] true
    context[fn](...arg) //执行fn
    delete context[fn] //删除属性
}

这里我们就实现了自己的call, 以后看见call就知道都不过是些雕虫小技了(当然真实的实现方式肯定需要考虑更多因素, 而且在v8更大的环境下, 可能还不止一种实现方式,保持谦虚)

##call的雕虫小技
