/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  if (words.length === 1) {
    return 0;
  }
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    let obj1 = {};
    for (let k = 0; k < words[i].length; k++) {
      if (!obj1[words[i][k]]) {
        obj1[words[i][k]] = 1;
      }
    }
    // console.log("obj1:", obj1);
    let arr1 = Object.keys(obj1);
    arr1.sort((a,b)=>a.charCodeAt() - b.charCodeAt());
    for (let j = i + 1; j < words.length; j++) {
      let obj2 = {};
      for (let k = 0; k < words[j].length; k++) {
        if (!obj2[words[j][k]]) {
          obj2[words[j][k]] = 1;
        }
      }
      // console.log("obj2:", obj2);
      let arr2 = Object.keys(obj2);
      arr2.sort((a,b)=>a.charCodeAt() - b.charCodeAt());
      console.log(arr1, arr2);
      if(arr1.join("") === arr2.join("")){
        ans++;
      }
    }
  }
  return ans;
};

let words = ["aba", "aabb", "abcd", "bac", "aabc"];
// 2
console.log(similarPairs(words));