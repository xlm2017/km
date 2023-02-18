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
  //方法1：新建链表存储反转后的链表
  let res = new ListNode(-1);
  let cur = res;
  const reverse = (node) => {
    if (node === null) return;
    console.log("递归中");
    reverse(node.next);//后序遍历
    console.log("递归细节");
    cur.next = node;//将节点从后往前存储到新建链表
    cur = cur.next;
  }
  reverse(head);
  cur.next = null;//避免成环
  console.log("新的链表:", res);
  return res.next;
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