


let str1 = `style="width : 50vw ; margin-top:-1em;"`;


// let reg1 = /width[\s\S]*:[\s\S]*(\d+)vw[^;]*;/;
// let reg1 = /width[\s\S]*:[\D]*([0-9]+)vw[^;]*;/;
let reg1 = /width[\s\S]*:[\D]*(\d+)vw[^;]*;/;



let m = str1.match(reg1);

console.log(`m:`, m);
console.log(`Width: ${m[1]}`);

let arr = str1.match(reg1) || [];
for (const iterator of arr) {
  console.log("item:", iterator);
}


console.log("捕获括号中的内容");

// 捕获组
let res = reg1.exec(str1);
console.log(res[1]);


const imageDescription = 'This image has a resolution of 1440×900 pixels.';
const regexpSize = /([0-9]+)×([0-9]+)/;
const match = imageDescription.match(regexpSize);
console.log(`Width: ${match[1]} / Height: ${match[2]}.`);



console.log("================================================")


// let str2 = `"width:7.5vw`;

let str2 = `width:6vw;padding-top:1em;`;

console.log("字符串:", str2);
let reg2 = /width[^:]*:[\D]*(\d+\.*\d*)vw/;

let m2 = str2.match(reg2)||[];
console.log(`str2-m:`, m2);
console.log(`Width: ${m2[1]}`);