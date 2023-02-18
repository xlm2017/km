


function deleteNode(head, n) {
  let deep = 0;
  let cur = head;
  while(cur){
    deep++;
    cur = cur.next;
  }

  let index = deep - n + 1;
  console.log(index);

  
  let next = head;

  if(index === 1){
    return head.next;
  }

  let deep2 = 1;
  while(next){
    if(deep2 === index - 1){
      // console.log('目标节点:', next);
      if(next.next.next){
        next.next = next.next.next;
      }else{
        next.next = next.next.next;
      }
      return head;
    }
    next = next.next;
    deep2++;
  }
  return head;
}


// let head = {
//   val: 4,
//   next: {
//     val: 5,
//     next: {
//       val: 1,
//       next: {
//         val: 9,
//         next: null
//       }
//     }
//   }
// }

let head = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}

let node = 2

console.log(JSON.stringify(deleteNode(head, node), null, 2));
// 4 ==> 5 ==> 9