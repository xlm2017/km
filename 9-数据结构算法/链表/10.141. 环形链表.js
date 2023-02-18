

// 环形链表


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  var map = new Map()
  while (head) {
    if (map.has(head)) {
      return true
    } else {
      map.set(head)
      head = head.next
    }
  }
  return false
};


let head = {
  val: 1, 
  next: {
    val: 2,
    next: null
  }
}

head.next.next = head


console.log(hasCycle(head));