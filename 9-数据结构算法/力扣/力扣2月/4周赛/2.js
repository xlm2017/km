

/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
  let res = [];
  let str = ''; 
  m = BigInt(m);
  for(let i = 0; i < word.length; i++){
     str += word[i]; 
    //  let num = Number.parseInt(str); 
     let num = BigInt(str); 
     res.push(num % m === BigInt(0) ? 1 : 0); 
  } 
  return res; 
};


// let word = "900244353", m = 3;
let word = "86217457695827338571", m = 8;

console.log(divisibilityArray(word, m));