{
  let localVar = new Uint8Array(1000000000)
  let localVar2 = new Uint8Array(1000000000)
  function dirtyFunc3() { return localVar }
  function cleanFunc() { }
}
var dirtyFunc3 = null
console.dir(cleanFunc)