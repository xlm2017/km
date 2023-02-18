/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  if (words.length === 1) {
    return 0;
  }
  let ans = 0;
  let arr = new Array(26).fill(0);
  let str = arr.join("");
  for (let i = 0; i < words.length; i++) {
    let arr1 = [...arr];
    for (let k = 0; k < words[i].length; k++) {
     let index = words[i][k].charCodeAt() - 97;
     arr1[index] = 1;
    }
    for (let j = i + 1; j < words.length; j++) {
      let arr2 = [...arr];
      for (let k2 = 0; k2 < words[j].length; k2++) {
        let index2 = words[j][k2].charCodeAt() - 97;
        // arr1[index2] = 0;
        arr2[index2] = 1;
      }
      if(arr1.join("") === arr2.join("") ){
      // if(arr1.join("") === str ){
        console.log(words[i], words[j]);
        ans++;
      }
    }
  }
  return ans;
};

let words = ["aba", "aabb", "abcd", "bac", "aabc"];
// 2
console.log(similarPairs(words));