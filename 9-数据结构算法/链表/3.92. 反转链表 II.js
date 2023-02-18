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

  // 1 --> 2 --> 3 --> 4 --> 5
  // 1 -->  2 <-- 3 <-- 4  --> 5
   
  // 双指针反转链表指定区域

  // 前一个指针
  let pre = null;

  // 当前指针
  let cur = head;

  // 节点当前深度
  let deep = 0;

  // 大链表中间反转后的局部小链表
  centerNode = null;
  // 
  let xunhuan = true;
  let rightNode = null;
  while (cur && xunhuan) {
    setTimeout(() => {
      xunhuan = false;
      console.log("结束循环");
    }, 2000);
    deep++;
    if (deep < left){
      let temp = cur.next;
      pre = cur;
      pre.next = null;
      cur = temp;
      console.log("pre:", pre);

    } else if(deep >= left && deep <= right){

      // 开始反转的节点
      // 记录当前不需要反转的部分
      let temp = cur.next;
      cur.next = centerNode;
      centerNode = cur;
      cur = temp;

      console.log("centerNode:", centerNode);

      if(deep === left){
        rightNode = centerNode;
      }
      
      if(deep === right){
        // 最后一次翻转了
        if(temp){
          // centerNode.next = temp;
          
          // 1 --> 4 --> 3 --> 2 --> 5  

          console.log('剩余的链:', temp, rightNode);
          console.log('翻转的部分:', centerNode);

          rightNode.next = temp;
          pre.next = centerNode;
        }else{
          // 终点了
          pre.next = centerNode;
        }
        break;
      }
    } 
    
  }

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


console.log("反转结果:", JSON.stringify(reverseBetween(node, 2, 4)));