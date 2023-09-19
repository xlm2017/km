// 给你单链表的头结点 head ，请你找出并返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。



// 示例 1：


// 输入：head = [1,2,3,4,5]
// 输出：[3,4,5]
// 解释：链表只有一个中间结点，值为 3 。
// 示例 2：


// 输入：head = [1,2,3,4,5,6]
// 输出：[4,5,6]
// 解释：该链表有两个中间结点，值分别为 3 和 4 ，返回第二个结点。


// 提示：

// 链表的结点数范围是 [1, 100]
// 1 <= Node.val <= 100


function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


let front = 0;
let back = 0;
var middleNode = function (head) {
  if (head == null)
    return head;
  front++;
  let cur = front;
  let temp = middleNode(head.next);
  back++;
  if (temp == null && (cur == back || cur - 1 == back))
    return head;
  return temp;
};



let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
        // next: {
        //   val: 5,
        //   next: null
        // }
      }
    }
  }
}

console.log(middleNode(head));