/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  if (words.length === 1) {
    return 0;
  }
  let ans = 0;
  let str = '';
  for (let i = 0; i < 26; i++) {
    str += '0'
  };
  for (let i = 0; i < words.length; i++) {
    // let str = new String();

    let str1 = '';
    for (let i = 0; i < 26; i++) {
      str1 += '0'
    };
    for (let k = 0; k < words[i].length; k++) {
     let index = words[i][k].charCodeAt() - 97;
     str1[index] = '1';
     console.log('str1:', str1);
    }
    for (let j = i + 1; j < words.length; j++) {
      let str2 = '';
      for (let i = 0; i < 26; i++) {
        str2 += '0'
      };
      for (let k = 0; k < words[j].length; k++) {
        let index = words[j][k].charCodeAt() - 97;
        str2[index] = '1';
      }
      console.log(str1, str2);
      if(str1 === str2){
        ans++;
      }
    }
  }
  return ans;
};

let words = ["aba", "aabb", "abcd", "bac", "aabc"];
// 2
console.log(similarPairs(words));