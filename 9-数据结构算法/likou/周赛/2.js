


function test2(s) {
  let cnt = 0;
  let str = s.split("");
  for (let i = 0; i < s.length; i++) {
    if(cnt === 0){
      if(s[i] !== "a"){
        str[i] = String.fromCharCode(s[i].charCodeAt() - 1);
        cnt++
      }
      if(i === s.length - 1 && cnt === 0){
        str[i] = String.fromCharCode(s[i].charCodeAt() - 1);
      }
    }else{
      if(s[i] === "a"){
        break;
      }else{
        str[i] = String.fromCharCode(s[i].charCodeAt() - 1);
      }
    }
  }
  return str.join("");
}

let s = "cbabc"
// 输出："baabc"
// s.charCodeAt
console.log(test2(s));


let a = 65;
// console.log(String.fromCharCode(a));