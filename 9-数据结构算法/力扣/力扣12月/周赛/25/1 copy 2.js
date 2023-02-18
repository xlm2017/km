

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    let arr  = [];
    let len = words.length;
    for (let i = 0; i < words.length; i++) {
      if(words[i] === target){
        arr.push(i);
      }    
    }
    if(!arr.length){
      return -1;
    }
    let min = words.length;
    for (let j = 0; j < arr.length; j++) {
      let cur = Math.min(Math.abs(startIndex - arr[j]), len - Math.abs(startIndex - arr[j]));    
      if(cur < min){
        min = cur;
      }
    }
    return min;
};


let words = ["hsdqinnoha","mqhskgeqzr","zemkwvqrww","zemkwvqrww","daljcrktje","fghofclnwp","djwdworyka","cxfpybanhd","fghofclnwp","fghofclnwp"]
let target = "zemkwvqrww"
let startIndex = 8

// 4

console.log(closetTarget(words, target, startIndex));
