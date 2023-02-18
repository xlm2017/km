

let obj1 = {
  value: 1,
  next: {
    value: 2,
    next: null
  }
}

let temp = obj1.next;
obj1.next = null;


console.log('temp:', temp);  // { value: 2, next: null }
console.log('obj1:', obj1);  // { value: 1, next: null }
console.log('temp2:', temp, obj1.next);  // { value: 2, next: null }  null
console.log('\n');


let pre = null;
pre = obj1;
obj1 = temp;

console.log("循环temp:", temp);
console.log("循环pre:", pre);
console.log("循环cur:", obj1);
console.log("\n")