// 链式调用
class Num {
    constructor(num) {
        this.val = num
    }
    addOne() {
        this.val += 1
        return this
    }
    addTwo() {
        this.val += 2
        return this
    }
}

// let num = 1
// num.addOne().addTwo()  // 4

let a = new Num(1)
console.log("a:", a)
console.log("val:", a.addOne().addTwo())