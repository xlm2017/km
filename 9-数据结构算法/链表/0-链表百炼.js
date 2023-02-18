/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var fun = function(head) {
  
  // 头插法, 新的值插入后面
  let cur = {}
  let header = cur;

  function traverse(node) {
    if(node){

      console.log("前序-递归:", node.val);
      

      traverse(node.next);
      
    }
  }
  traverse(head);
  console.log("header", header);
  return header;
};

let head1 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2
    }
  }
}

console.log(fun(head1));