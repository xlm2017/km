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

  //          1 --> 2 --> 3 --> 4 --> 5 --> null

  // null <-- 1 <-- 2 <-- 3 <-- 4 <-- 5

  //          5 --> 4 --> 3 --> 2 --> 1 --> null

  // 第一个节点指向null, 第二个节点起, 后一个节点指向前一个节点

  
  // 目标节点
  let target = null;
  
  // 定义一个用来迭代的节点
  let cur = head;
  while (cur) {
    let temp = cur.next;

    // 迭代节点的下一个节点指向前一个节点
    cur.next = target;

    // 不能反过来, 否则当头结点的时候, target节点为空
    target = cur;
    
    console.log('迭代-target:', target);
    
    cur = temp;
  }
  return target;
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




var reverseList2 = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/reverse-linked-list/solutions/551596/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。