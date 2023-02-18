// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 

// 示例 1：


// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]
// 示例 2：

// 输入：head = [5], left = 1, right = 1
// 输出：[5]
 

// 提示：

// 链表中节点数目为 n
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n


// 1234567 left = 2  right = 6

// 1 65 4 32 7

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  // 边界处理
  if(!head.next){
    return head;
  }
  if(left === right){
    return head;
  }

  // 前一个指针
  let pre = null;
  let center = null;
  let end = null;
  // 当前指针
  let cur = head;
  // 节点当前深度
  let deep = 0;

  while (cur) {
    deep++;
    // console.log('链表值:', deep, cur.val);

    let temp = cur.next;
    
    if(deep === left - 1){
      console.log("当前开始前-节点:", cur);
      pre = cur;
      let temp = JSON.parse(JSON.stringify(head));
      pre.next = null;
      head = temp;
    }

    if(deep >=left && deep <=right){
      console.log('翻转中:', cur.val);
      cur.next = center;
      center = cur;
    }
    
    if(deep === right + 1){
      console.log("当前结束后-节点:", cur);
      end = cur;
    }
    
    cur = temp;
  }
  
  console.log('三部分:', pre, end, center);

  pre.next = center;

  return pre;
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

let node2 = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}


// console.log("反转结果:", JSON.stringify(reverseBetween(node2, 1, 2)));


console.log("反转结果:", JSON.stringify(reverseBetween(node, 3, 4)));
// [1,2,4,3,5]