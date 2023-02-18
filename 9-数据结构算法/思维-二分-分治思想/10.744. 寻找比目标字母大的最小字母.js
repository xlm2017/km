// 给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。

// 返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。

 

// 示例 1：

// 输入: letters = ["c", "f", "j"]，target = "a"
// 输出: "c"
// 解释：letters 中字典上比 'a' 大的最小字符是 'c'。


/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let first = letters[0];
  letters.sort((a, b)=>{
    return a.charCodeAt() - b.charCodeAt();
  })
  console.log(letters);

  // 提前设值
  let cur = null;
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    // int mid = L + ((R - L) >> 1);
    console.log('mid:', mid);
    if(letters[mid].charCodeAt() > target.charCodeAt()){
      right = mid - 1;
      if(cur && letters[mid].charCodeAt() < cur.charCodeAt()){
        cur = letters[mid];
      }else{
        cur = letters[mid];
      }
    }else{
      left = mid + 1;
    }
  }
  if(cur){
    return cur;
  }else{
    return first;
  }
};


let letters = ["c", "f", "j"], target = "a"
console.log(nextGreatestLetter(letters, target));