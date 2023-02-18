

let str = '/Users/xlm/Documents/company/cloud-library-desk-ui/node_modules/_electron@12.2.3@electron/dist/Electron.app/Contents/MacOS/geeboo/35002/temp-1607285580654825474.epub';

let arr = str.split('/');

console.log(arr);

let reg = /\d+/;

// let val = reg.match(arr.pop());
let s = arr.pop();
console.log("s:", s);
let val = s.match(reg);


console.log("val:", val);
console.log("val:", val[0]);