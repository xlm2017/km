/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-27 16:58:36
 * @LastEditTime: 2023-02-27 17:10:53
 * @LastEditors: xlm
 */



function names(a, b) {
  
  console.log("name", arguments);
  
  let arr = Array.from(arguments);
  console.log("arr:", arr);
  // arr: [ 1, 2 ]


  let first = [].shift.call(arguments);
  console.log("first:", first);
  // first: 1 
}

// name [Arguments] { '0': 1, '1': 2 }
console.log(names(1, 2))
