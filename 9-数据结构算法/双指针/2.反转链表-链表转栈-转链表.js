// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。


// 示例 1：


// 输入：head = [1, 2, 3, 4, 5]
// 输出：[5, 4, 3, 2, 1]
// 示例 2：


// 输入：head = [1, 2]
// 输出：[2, 1]
// 示例 3：

// 输入：head = []
// 输出：[]


// 提示：

// 链表中节点的数目范围是[0, 5000]
//   - 5000 <= Node.val <= 5000


// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

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
  if (!head.next) {
    return head;
  }
  let arr = [head.val];
  let next = head.next;
  while (next) {
    arr.push(next.val)
    next = next.next
  }
  console.log(arr);
  let res = {
    val: 0,
    next: null
  };

  for (let i = arr.length - 1; i >= 0; i--) {
    res.val = arr[i];
    if (i - 1 >= 0) {
      res.next = {};
    } else {
      res.next = null;
    }
  }


  return res;

};

// let node = [1, 2, 3, 4, 5];
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

console.log("反转结果:", reverseList(node));

// 错误思路