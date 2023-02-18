/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let res = []
  //   let arr = new Array(s.length).fill(0); 
  //   let arr = s.split(""); 
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    console.log("i的值:", i, s[i], s.length);
    let reg = /^[A-Za-z]/
    if (arr.length === 0) {
      if (reg.test(s[i])) {
        // if (s[i] >= 97 && s[i] <= 122 || s[i] >= 65 && s[i] <= 90) {
        console.log("s[i]:", '大写或者小写', s[i]);
        arr.push(s[i].toLowerCase());
        arr.push(s[i].toUpperCase());
      } else {
        arr.push(s[i]);
      }
    } else {
      console.log("arr数组非空");
      if (reg.test(s[i])) {
        // if (s[i] >= 97 && s[i] <= 122 || s[i] >= 65 && s[i] <= 90) {
        let newArr = []
        for (let j = 0; j < arr.length; j++) {
          newArr.push(arr[j] + '' + s[i].toLowerCase());
          newArr.push(arr[j] + '' + s[i].toUpperCase());
        }
        arr = newArr;
        console.log("字母:", arr);
      } else {
        for (let j = 0; j < arr.length; j++) {
          arr[j] = arr[j] + '' + s[i];
        }
        console.log("数字:", arr);
      }
    }
  }
  return arr;
};


let s = "a1b2";
let ar = letterCasePermutation(s);

console.log("ar:", ar);