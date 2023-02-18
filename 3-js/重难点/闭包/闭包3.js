function zhang() {
  let localVar = new Uint8Array(1000000000)
  let localVar2 = new Uint8Array(1000000000)
  function dirtyFunc3() { return localVar }
  function cleanFunc() { }

  return cleanFunc
}

let fun = zhang()
console.dir(fun)

// dirtyFunc3和cleanFunc共享同一个[[Scopes]]项，
// 但这个[[Scopes]]项并不会因为dirtyFunc3被回收而动态更新！
// 所以无辜的cleanFunc就只好一直带着这1GB的垃圾，内存泄漏妥妥的。