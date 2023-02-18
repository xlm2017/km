
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 



// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]
// 示例 2：

// 输入：l1 = [], l2 = []
// 输出：[]
// 示例 3：

// 输入：l1 = [], l2 = [0]
// 输出：[0]

// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

  const prehead = new ListNode(-1);

  console.log("prehead:", prehead);
  
  let prev = prehead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
        prev.next = l1;
        l1 = l1.next;
    } else {
        prev.next = l2;
        l2 = l2.next;
    }
    prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  console.log("prehead:", prehead);
  
  return prehead.next;
};

// let arr1 = [1,2,4];
// let arr2 = [1,3,4];

let arr1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    }
  }
}

let arr2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    }
  }
}



console.log(JSON.stringify(mergeTwoLists(arr1, arr2), null, 2));