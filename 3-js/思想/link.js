// 链式调用
class Num extends Number {
    constructor(num) {
        // this.val = num
        super(num)
    }
    addOne() {
        // console.log("addOne():", this, this.valueOf(), this.toString())
        // return this.valueOf() + 1
        let num = this.valueOf() + 1
        // let num2 = this.toString() + 1
        // console.log(num, num2)
        return new Num(num)
    }
    addTwo() {
        let num = this.valueOf() + 2
        return new Num(num)
    }
}

let num = new Num(1)
console.log(num, '--num')
// num.addOne().addTwo()  // 4
console.log(num.addOne().addTwo())  // 4




// (5).add(2).minus(1)  // 6
Number.prototype.add = function (val) {
    return this.valueOf() + val
}
Number.prototype.minus = function (val) {
    return this.valueOf() - val
}
