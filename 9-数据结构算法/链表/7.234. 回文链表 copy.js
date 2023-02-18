
// // 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。



// 输入：head = [1,2,2,1]
// 输出：true

// 输入：head = [1,2]
// 输出：false


// 提示：

// 链表中节点数目在范围[1, 105] 内
// 0 <= Node.val <= 9
 

// 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



let frontPointer;

const recursivelyCheck = (currentNode) => {
  if (currentNode !== null) {
    if (!recursivelyCheck(currentNode.next)) {
        return false;
    }
    if (currentNode.val !== frontPointer.val) {
        return false;
    }
    frontPointer = frontPointer.next;
  }
  return true;
}

var isPalindrome = function(head) {
  frontPointer = head;
  return recursivelyCheck(head);
};



let head1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null
      }
    }
  }
}

console.log(isPalindrome(head1));