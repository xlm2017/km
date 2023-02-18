var a = [1, , 3, 5, 7, 9]
var it = a[Symbol.iterator]()

it.next().value()
it.next().value()
it.next().value()



let a = {
  name: 'zhang',
  age: 12
}
undefined
for (let v of a) {
  console.log(v, a)
}
// VM404:1 Uncaught TypeError: a is not iterable