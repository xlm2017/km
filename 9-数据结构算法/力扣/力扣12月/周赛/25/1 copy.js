

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
  let step = 0;
  let n = words.length;
  while (true) {
    if(words[startIndex] === target){
      if(step === 0){
        return 0;
      }
    }else{
      step++;
      // words[(i + 1) % n]
    }
  }
};


let words = ["hsdqinnoha","mqhskgeqzr","zemkwvqrww","zemkwvqrww","daljcrktje","fghofclnwp","djwdworyka","cxfpybanhd","fghofclnwp","fghofclnwp"]
let target = "zemkwvqrww"
let startIndex = 8

// 4

console.log(closetTarget(words, target, startIndex));
