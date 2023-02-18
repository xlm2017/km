// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

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
var reverseList = function (head) {

  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseList(head.next);
  
  console.log("newHead:", newHead);
  
  head.next.next = head;
  head.next = null;
  return newHead;
};

let node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

console.log("反转结果:", JSON.stringify(reverseList(node), null, 2));




// var reverseList2 = function(head) {
//   if (head == null || head.next == null) {
//       return head;
//   }
//   const newHead = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return newHead;
// };

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/reverse-linked-list/solutions/551596/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。