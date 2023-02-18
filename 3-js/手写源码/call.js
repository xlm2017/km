// call能实现 A==>B的函数调用

var age = 0
let a = {
    age: 18,
    name(name, sex) {
        console.log("AAA-name:", name, sex, this.age)
    }
}

let b = {
    age: 30,
    name(name, sex) {
        console.log("BBB-name:", name, sex)
    }
}
// a.name.call(b, '哈哈哈', '男')


Object.prototype.mycall = function mycall(obj, ...arg) {
    console.log(Array.isArray(arg))
    console.log(arg, this, obj)
    // this是调用者  如何体现 ?
    // 如何让 a对象的函数 使用 b对象 的 作用域  
    // 作用域的切换, 为什么js可以实现作用域的切换 ? 
    let fn = this
    // fn的真实调用者为obj
    obj.fn = fn
    obj.fn(...arg)
}

a.name.mycall(b, '哈哈哈', '女')
