

// 什么是函数?
// y = x² + 1   y为返回值, x为参数
function fun(x) {
    return x * x + 1
}


let a = [1, 2, 3, 4, 5]

// 循环
function add(arr) {
    while (arr.length > 1) {
        let v = arr.pop()
        console.log(v, arr)
        arr[arr.length - 1] += v
    }
    return arr[0]

}
let b = add(a)


// 递归
function add2(arr) {
    if (arr.length > 1) {
        let v = arr.pop()
        console.log(v, arr)
        arr[arr.length - 1] += v
        add2(arr)
    } else {
        return arr[0]
    }
}
let c = add(a)

// 迭代
let arr = [1, 2, 3, 4, 5]
arr[Symbol.iterator] = function () {
    return {
        next() {
            if (arr.length > 1) {
                let v = arr.pop()
                arr[arr.length - 1] += v
                return {
                    value: arr[arr.length - 1],
                    done: false
                }
            }
            return {
                value: arr[0],
                done: true
            }
        }
    }
}
for (const v of a) {
    console.log('of:', v, a)
}