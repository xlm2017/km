

let map = new Map();

map.set(1, 11);
console.log(map.size);
// 1

map.delete(1)
console.log(map.size);
// 0


let v = map.get(2)
console.log(v, typeof v);
// undefined undefined