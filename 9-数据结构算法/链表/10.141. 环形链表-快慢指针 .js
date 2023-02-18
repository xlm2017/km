

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

/**
 * @think 方法三 双指针
 * 快指针走两步，慢指针走一步
 * 如果是环，快指针一定能追上慢指针
 *  否则快指针一定会走到链尾
 * @time O(n)
 * @space O(1)
 */

// 作者：careteen
// 链接：https://leetcode.cn/problems/linked-list-cycle/solutions/24697/jsshi-xian-si-chong-fang-fa-by-careteenl/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


var hasCycle = function(head) {
  if (!head || !head.next) return false
  var slow = head,
    fast = head.next
  while (fast != slow) {
    if (!fast || !fast.next) return false
    fast = fast.next.next
    slow = slow.next
  }
  return true;
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