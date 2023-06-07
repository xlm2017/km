

// 如果 word[0,...,i] 所表示的 数值 能被 m 整除，div[i] = 1
// 否则，div[i] = 0


/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function(word, m) {
  let res = [];
  for (let i = 0; i < word.length; i++) {
    res.push((word[i]*1) % m === 0 ? 1 : 0);
  }
  return res; 
};


let word = "86217457695827338571", m = 8;

// 输出：
// [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1]
// 预期:
// [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]

console.log(divisibilityArray(word, m));

console.log(86217 % 8);