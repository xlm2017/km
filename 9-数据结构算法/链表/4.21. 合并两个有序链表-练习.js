
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
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  
  let prehead = {
    val: -1,
    next: {},
  }
  let dummyHead = prehead;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummyHead.next = list1
      list1 = list1.next;
    } else {
      dummyHead.next = list2;
      list2 = list2.next;
    }
    dummyHead = dummyHead.next;
  }
  dummyHead.next = list1 ? list1 : list2;

  return prehead.next;
};

// let arr1 = [1,2,4];
// let arr2 = [1,3,4];
// ：[1,1,2,3,4,4]

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