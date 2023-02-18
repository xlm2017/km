
// import fs from 'fs'
let fs = require('fs')

let options = {
  copyNo: '123456'
}
console.log(11111)
fs.access('./dist' + options.copyNo, (err) => {
  if (!err) {
    // console.error('myfile already exists');
    return;
  }
  fs.mkdirSync('./dist' + options.copyNo)
  console.log(22222)
})

console.log(3333)



// 11111
// 3333
// 22222