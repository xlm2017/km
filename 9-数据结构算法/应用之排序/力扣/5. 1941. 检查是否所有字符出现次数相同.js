

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  let obj = {};
  for(let i = 0; i < s.length; i++){
    console.log('i', obj[s[i]]);
    obj[s[i]] = obj[s[i]] ? ++obj[s[i]] : 1;
    // obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;

    // 错误写法
    // obj[s[i]] = obj[s[i]] ? obj[s[i]]++ : 1;
  }
  console.log(obj);
  return (new Set(Object.values(obj))).size === 1;
};


let s1 = 'aaabb'

console.log(areOccurrencesEqual(s1));