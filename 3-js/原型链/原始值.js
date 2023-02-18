let obj = {
  [Symbol.toPrimitive](){
    return 100
  },
  valueOf(){
    return 200
  },
  toString(){
    return 'hello'
  }
}
console.log(obj + 200)
console.log(obj + '200')
console.log(obj < 200, obj > 99)