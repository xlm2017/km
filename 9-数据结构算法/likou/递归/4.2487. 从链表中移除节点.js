// 给你一个链表的头节点 head 。

// 对于列表中的每个节点 node ，如果其右侧存在一个具有 严格更大 值的节点，则移除 node 。

// 返回修改后链表的头节点 head 。

 

// 示例 1：



// 输入：head = [5,2,13,3,8]
// 输出：[13,8]
// 解释：需要移除的节点是 5 ，2 和 3 。
// - 节点 13 在节点 5 右侧。
// - 节点 13 在节点 2 右侧。
// - 节点 8 在节点 3 右侧。
// 示例 2：

// 输入：head = [1,1,1,1]
// 输出：[1,1,1,1]
// 解释：每个节点的值都是 1 ，所以没有需要移除的节点。
 

// 提示：

// 给定列表中的节点数目在范围 [1, 105] 内
// 1 <= Node.val <= 105



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
var removeNodes = function(head) {

  // 递归
  if(!head.next) return head;

  head.next = removeNodes(head.next);

  if(head.val < head.next.val){
    return head.next;
  }else{
    return head;
  }

};

// head = [5,2,13,3,8]
// 输出：[13,8]
let head = {
  val: 5,
  next: {
    val: 2,
    next: {
      val: 13,
      next: {
        val: 3,
        next: {
          val: 8,
          next: null
        }
      }
    } 
  }
}


console.log(removeNodes(head));