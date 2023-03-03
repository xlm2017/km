/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-18 17:28:20
 * @LastEditTime: 2023-03-01 14:24:16
 * @LastEditors: xlm
 */


let a = 'aa(123)ff'
let reg1 = /(\([^\(]+\))/
console.log(a.match(reg1))
// [ '(123)', '(123)', index: 2, input: 'aa(123)ff', groups: undefined ]
console.log(reg1.exec(a))
// [ '(123)', '(123)', index: 2, input: 'aa(123)ff', groups: undefined ]




var re = /[0-9]+/g;
var str = '2016-01-02';
var result = re[Symbol.match](str);
console.log(result);  // ["2016", "01", "02"]



// 字符串中的正则 api


let str2 = `
  <ds:KeyInfo>
      <ds:KeyName>ZGePUB.Inc</ds:KeyName>
  </ds:KeyInfo>
  `;
  // <ds:KeyInfo>
  //     11111111111112222222222
  // </ds:KeyInfo>

let regp = /<p(?:(?!<\/p>).|\n)*?<\/p>/gm


// 同时也可以用 ([\d\D]*) 、 ([\w\W]*) 来表示。

// let reg2 = /<ds:KeyInfo>+<\/ds:KeyInfo>/;
// let reg2 = /<ds:KeyInfo>([\s\S]*)<\/ds:KeyInfo>/g;
// let reg2 = /<ds:KeyInfo>(?<first>[\s\S!<\/ds:KeyInfo>]*)<\/ds:KeyInfo>/gm;

// let reg2 = /<ds:KeyInfo>([\s\S]*)<\/ds:KeyInfo>/gm;
let reg2 = /<ds:KeyInfo>(?<first>[\s\S!<\/ds:KeyInfo>]*)<\/ds:KeyInfo>/g;


console.log(reg2.exec(str2));


let arr2 = [...str2.matchAll(reg2)];
console.log("arr2:", arr2);