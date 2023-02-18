// 红宝石
function add(num1, num2) {
    return num1 + num2
}
function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1)
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments)
        var finalArgs = args.concat(innerArgs)
        return fn.apply(null, finalArgs)
    }
}

var curr = curry(add, 4)
console.log(curr(4))

class Num {
    constructor() {
        this.value = 1
    }
    addOne() {
        this.value += 1
    }

    addTwo() {
        this.value += 2
    }
}

let a = new Num()
let v = a.addOne() + a.addTwo()

{
    var add = function (x) {
        return function (y) {
            return x + y
        }
    }
    var increment = add(1)
    var addTen = add(10)
    increment(2) // 3
    addTen(10)	// 12
    add(10)(10) // 20
    increment(1)  // 2
}