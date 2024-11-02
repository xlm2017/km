
// 163   169

let str = 'skwhhaaunskegmdtutlgtteunmuuludii'

let obj = {};

let map = new Map();

for (const char of str) {
  obj[char] = obj[char] ? undefined : 1;
  if(map.has(char)){
    map.delete(char)
  }else{
    map.set(char, 1)
  }
}

console.log(map);

// console.log(obj);
console.log(str.length);
// 33  16 1 16

// w