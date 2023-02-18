

let arr2 = [1,3,4];

function arrayToLink(arr) {


  let header = {}
  let current = header
  for (let i = 0; i < arr.length; i++) {
    current.next = { val: arr[i], next: null }
    current = current.next
    console.log("header-next:", header.next);
  }
  return header.next

}

console.log(arrayToLink(arr2));