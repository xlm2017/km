

// 如果 word[0,...,i] 所表示的 数值 能被 m 整除，div[i] = 1
// 否则，div[i] = 0


/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
  let res = [];
  let arr = [];
  let yu = null;
  for (let i = 0; i < word.length; i++) {
    if(i > 0){
      if(res[i - 1] === 1){
        res.push((word[i]*1) % m === 0 ? 1 : 0);
        yu = (word[i]*1) % m;
      }else{
        yu = (word[i]*1 + arr[i -1]*10) % m;
        res.push( yu === 0 ? 1 : 0);
      }
    }else{
      res.push((word[i]*1) % m === 0 ? 1 : 0);
      yu = (word[i]*1) % m;
    }
    arr.push(yu);
  }
  return res; 
};


// let word = "86217457695827338571", m = 8;

// 输出：
// [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1]
// 预期:
// [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]


let word = "998244353", m = 3;

console.log(divisibilityArray(word, m));

console.log(86217 % 8);