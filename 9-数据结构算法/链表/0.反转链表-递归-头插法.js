/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

  // 头插法  
  // 超出输出限制
  
  let dummy = new ListNode(0);
  let p = dummy;

  function traverse(node) {
    if(node){

      let cur = {
        val: node.val,
        next: null
      }
      cur.next = p.next; //head接在temp的后面
      p.next = cur;
      
      console.log("前序-递归:", dummy);

      traverse(node.next);

      // console.log("倒序-递归2:", node);

    }
  }
  traverse(head);
  return dummy.next;
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

console.log(reverseList(head1));