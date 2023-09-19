// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：

// L0 → L1 → … → Ln - 1 → Ln
// 请将其重新排列后变为：

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。



// 示例 1：



// 输入：head = [1,2,3,4]
// 输出：[1,4,2,3]
// 示例 2：



// 输入：head = [1,2,3,4,5]
// 输出：[1,5,2,4,3]


// 提示：

// 链表的长度范围为 [1, 5 * 104]
// 1 <= node.val <= 1000



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  
  

};

// head = [1,2,3,4,5]
// 输出：[1,5,2,4,3]


let head = {
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


console.log(reorderList(head));