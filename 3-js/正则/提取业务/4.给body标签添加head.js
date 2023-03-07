/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-07 09:33:40
 * @LastEditTime: 2023-03-07 10:06:14
 * @LastEditors: xlm
 */


let test1 = `
  <body>
     <div>11111</div>
  </body>
`;

let test2 = `
  <body bg="body">
     <div>11111</div>
  </body>
`;

let test3 = `
  <body bg="body " >
     <div>11111</div>
  </body>
`;

// let reg1 = /\<body[\s\S^\>]\>/;
let reg1 = /(<body[^>]*>)/;
console.log("res:", reg1.exec(test2));

console.log(test3.replace(reg1, `$1
    <head>
    </head>
`));


// ` 左边
// ' 单引号,  右边
console.log(test3.replace(reg1, `$'
    <head>
    </head>
`));



function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%