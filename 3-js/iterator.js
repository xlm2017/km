var arr = [..."hello"];
console.log(arr)

let obj = {
    a: 1,
    b: 2
}
obj[Symbol.iterator] = function* () {
    let keys = Object.keys(obj);
    //取到key值的长度
    let len = keys.length;
    //定义循环变量
    let n = 0;
    //条件判断
    while (n < len) {
        yield { k: keys[n], v: obj[keys[n++]] };
    }
}
//返回的是个对象的key和value
for (let { k, v } of obj) {
    console.log(k, v);
}