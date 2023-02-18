/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function (word1, word2) {
  let obj1 = {};
  for (let i = 0; i < word1.length; i++) {
    if (obj1[word1[i]]) {
      obj1[word1[i]]++
    } else {
      obj1[word1[i]] = 1;
    }
  }

  let obj2 = {};
  for (let i = 0; i < word2.length; i++) {
    if (obj2[word2[i]]) {
      obj2[word2[i]]++
    } else {
      obj2[word2[i]] = 1;
    }
  }

 

  let arr1 = Object.entries(obj1);
  let arr2 = Object.entries(obj2);
  
  if(arr1.length === arr2.length){
    let has1 = false;
    let has2 = false;
    for (const key in obj1) {
      if (Object.hasOwnProperty.call(obj1, key)) {
        if(obj1[key] > 1){
          has1 = true
        }else{
          has2 = true;
        }        
      }
    }
    let has11 = false;
    let has22 = false;
    for (const key in obj2) {
      if (Object.hasOwnProperty.call(obj2, key)) {
        if(obj2[key] > 1){
          has11 = true
        }else{
          has22 = true;
        }        
      }
    }
    if(has1 && has11){
      return true
    }
    if(has2 && has22){
      return true
    }
    return false;
  }
  if(Math.abs(arr1.length - arr2.length) > 2){
    return false;
  }
  
  let big = arr1.length > arr2.length ? obj1 : obj2;
  let small = arr1.length < arr2.length ? obj1 : obj2;


  if(Math.abs(arr1.length - arr2.length) === 1){
    
    // big--  small不变

    for (const key in big) {
      if (Object.hasOwnProperty.call(big, key)) {
        // if(big[key] === 1 && small[key] > 1){
        //   return true;
        // }
        if(big[key] === 1){
          for (const key2 in small) {
            if (Object.hasOwnProperty.call(small, key2)) {
               if(small[key2] > 1 && key!==key2){
                console.log("small");
                return true;
               }              
            }
          }
        }
      }
    }

    // big不变  small++
    for (const key in big) {
      if (Object.hasOwnProperty.call(big, key)) {
        if(big[key] > 1 && small[key]){
          return true;
        }   
      }
    }

    for (const key in small) {
      if (Object.hasOwnProperty.call(small, key)) {
        if(small[key] > 1){
          for (const key2 in big) {
            if (Object.hasOwnProperty.call(big, key2)) {
              if(big[key2]=== 1 && !small[key2]){
                return true;
              }              
            }
          }
        }   
      }
    }

  }

  if(Math.abs(arr1.length - arr2.length) === 2){
    // b中存在一个small中没有的数
    for (const key in big) {
      if (Object.hasOwnProperty.call(big, key)) {
        if(big[key] === 1 && !small[key]){
          //  return true;

          for (const key2 in small) {
            if (Object.hasOwnProperty.call(small, key2)) {
              if(small[key2] > 1 && big[key2]){
                console.log("长度2");
                return true;
              }              
            }
          }
        }
        
      }
    }
  }
  return false;
};


let word1 = "aa", word2 = "ab";  

console.log(isItPossible(word1, word2));