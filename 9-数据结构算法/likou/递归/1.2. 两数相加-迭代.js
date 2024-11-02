// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。


// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
  let head = null;
  let tail = null;
  // 保存当前的进位值
  let carry = 0;
  // 通常情况下, 无法像数组直接取最后一个节点的值
  // 但是本题中, 输入的两个链表都是逆序存储数字的位数的, 所以可以加, 
  // 只是结果放在末尾, 新的链表需要采用头插法组装.
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    // 存储到新链表中
    if (!head) {
      // 初始化, 注释也是可以的
      // head = new ListNode(sum % 10);
      // tail = head;
      tail = new ListNode(sum % 10);
      head = tail;
    } else {
      // 第二位起, 如何存入链表的头部 ?
      // 再抽象一个变量, 把这个当前值存一份变成尾部
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    // 重置进位
    carry = Math.floor(sum / 10);
    
    // 迭代
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  console.log("观察两个链-head:", head);
  console.log("观察两个链表-tail:", tail);
  console.log("=============================");
  return head;
};


let l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}

let l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}


console.log(addTwoNumbers(l1, l2));
