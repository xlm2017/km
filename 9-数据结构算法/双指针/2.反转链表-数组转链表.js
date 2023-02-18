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
  if (!head) {
    return head;
  }
  let arr = [head.val];
  let next = head.next;
  while (next) {
    arr.push(next.val)
    next = next.next
  }
  arr.reverse();
  console.log(arr);

  // 定义头指针
  // let header = {
  //   next: {}
  // }

  let header = {
    // index: 0, 
    val: arr[0],
    next: null
  };
  // 定义链表对象
  let obj = header;
  // 数组转链表
  for (let i = 1; i < arr.length; i++) {
    obj.next = {
      // index: i,
      val: arr[i],
      next: null
    };
    obj = obj.next;
  }
  return header;
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

console.log("反转结果:", JSON.stringify(reverseList(node), null, 2));