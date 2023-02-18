

let obj = {
  a: {
    name: "a",
    b: {
      name: "b",
      c: {
        name: "c"
      }
    }
  }
}
obj.a.b = obj.a;
// Converting circular structure to JSON
// --> starting at object with constructor 'Object'
// --- property 'b' closes the circle
// console.log("obj:", JSON.stringify(obj, null, 2));

console.log(obj.a);