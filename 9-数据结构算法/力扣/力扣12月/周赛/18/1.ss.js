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
        obj1[words[i][k]] = true;
      }
    }
    console.log("obj1:", obj1);
    for (let j = i + 1; j < words.length; j++) {
      let ok = true;
      for (let k = 0; k < words[j].length; k++) {
        if (!obj1[words[j][k]]) {
          ok = false;
          console.log("跳出for", j);
          break;
        }
      }
      console.log("跳出for-2", j);
      if (ok) {
        console.log('合格:', words[i], words[j]);
        ans++;
      }
    }
  }
  return ans;
};

let words = ["aba", "aabb", "abcd", "bac", "aabc"];
// 2
console.log(similarPairs(words));