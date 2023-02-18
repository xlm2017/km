// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

// [2,2,2,1]
// [5,6,4]
// [7,8,6,1]



// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[8,0,7]
// 解释：342 + 465 = 807.

// 提示：

// 每个链表中的节点数在范围 [1, 100] 内
// 0 <= Node.val <= 9
// 题目数据保证列表表示的数字不含前导零

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 如果两个链表的长度不同，则可以认为长度短的链表的后面有若干个 000 
var addTwoNumbers = function(l1, l2) {
  let head = null, tail = null;
  let carry = 0;
  while (l1 || l2) {
      const n1 = l1 ? l1.val : 0;
      const n2 = l2 ? l2.val : 0;
      const sum = n1 + n2 + carry;
      if (!head) {
          head = tail = new ListNode(sum % 10);
      } else {
          tail.next = new ListNode(sum % 10);
          tail = tail.next;
      }
      carry = Math.floor(sum / 10);
      if (l1) {
          l1 = l1.next;
      }
      if (l2) {
          l2 = l2.next;
      }
  }
  if (carry > 0) {
      tail.next = new ListNode(carry);
  }
  return head;
};



// let node1 = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 3,
//       next: null
//     }
//   }
// }
// let node2 = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 4,
//       next: null
//     }
//   }
// }

// let node1 = {
//   val: 9,
//   next: {
//     val: 9,
//     next: {
//       val: 1,
//       next: null
//     }
//   }
// }
// let node2 = {
//   val: 1,
//   next: null
// }


// let node1 = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 3,
//       next: null
//     }
//   }
// }
// let node2 = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 6,
//       next: {
//         val: 9,
//         next: null
//       }
//     }
//   }
// }

let node1 = {
  val: 5,
  next: null
}
let node2 = {
  val: 5,
  next: null
}

console.log(JSON.stringify(addTwoNumbers(node1, node2), null, 2));