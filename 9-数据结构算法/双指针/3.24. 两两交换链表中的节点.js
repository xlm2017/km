// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

// 示例 1：
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]


// 示例 2：
// 输入：head = []
// 输出：[]

// 示例 3：
// 输入：head = [1]
// 输出：[1]

// 提示：
// 链表中节点的数目在范围 [0, 100] 内
// 0 <= Node.val <= 100

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
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let cur = head;
  let i = 0;
  while (cur) {
    if (i % 2 === 0 && cur.next) {
      // 偶数, 需要和 后一个节点进行交换
      // 临时变量
      let temp = cur.next.val;
      cur.next.val = cur.val
      cur.val = temp;
    }
    cur = cur.next
    i++;
  }
  return head;
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

console.log("结果:", JSON.stringify(swapPairs(node), null, 2));