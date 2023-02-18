

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
