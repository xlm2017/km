
console.time("setTimeout1")
setTimeout(() => {
    console.log("setTimeout1")
    // let arr = new Array(10000)
    // for (let i = 0; i < arr.length; i++) {
    //     const element = arr[i];
    // }
}, 1113)
console.timeEnd("setTimeout1")
console.time("setTimeout2")
setTimeout(() => {
    console.log("setTimeout2")
}, 1112)
console.timeEnd("setTimeout2")


setTimeout(() => {
    console.log("1")
    setTimeout(() => {
        console.log("11")
    }, 1000)
}, 1000)
setTimeout(() => {
    console.log("2")
}, 2000)
setTimeout(() => {
    console.log("22")
}, 2002)
setTimeout(() => {
    console.log("3")
}, 3000)