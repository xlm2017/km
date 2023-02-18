

/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
  let n = words.length;
  console.log("N:", n);  
  let step = null;   
  for(let i = startIndex;i < words.length; i++){
      if(words[i] === target){
        step = Math.min( i - startIndex, n - (i - startIndex) );
        break;   
      }
  } 
  for(let i = startIndex - 1;i >= 0; i--){
      if(words[i] === target){
        let step2 = Math.min( startIndex - i, n - (startIndex - i) );
        if(step){
            if(step2 < step){
                step = step2;
            }
        }else{
            step = step2;
        }  
        break;   
      }
  } 
  return step === null ? -1 : step;
};


let words = ["hsdqinnoha","mqhskgeqzr","zemkwvqrww","zemkwvqrww","daljcrktje","fghofclnwp","djwdworyka","cxfpybanhd","fghofclnwp","fghofclnwp"]
let target = "zemkwvqrww"
let startIndex = 8

// 4

console.log(closetTarget(words, target, startIndex));
