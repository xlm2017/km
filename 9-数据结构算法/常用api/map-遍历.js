

map.forEach((key, val) => {
  // ...//操作
})


for (let [key, val] of map.entries()) {
  // ...
}
//类似forEach遍历


let keys = map.keys();
let arr = Array.from(keys);


let keys2 = map.keys();
let arr2 = [...keys];