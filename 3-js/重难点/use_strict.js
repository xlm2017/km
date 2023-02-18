'use strict'
let r = eval(1+2)
// console.log("r:", r)

(function(){
  'use strict';
  // let rr = eval(1+2)  // TypeError: eval(...) is not a function
  // console.log("rr:", rr)

  let b = {
    s: 1
  }
  delete b.s
  console.log(b)
}());


(function(){
  'use strict';
  let b = {
    s: 1
  }
  delete b.s
  console.log(b)
}());