// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

// [2,2,2,1]
// [5,6,4]
// [7,8,6,1]



// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[8,0,7]
// 解释：342 + 465 = 807.

// 提示：

// 每个链表中的节点数在范围 [1, 100] 内
// 0 <= Node.val <= 9
// 题目数据保证列表表示的数字不含前导零

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  
  // 数值相加后的
  let value = 0;
  // 是否满一位
  let isMan = false;
  if(l1.val + l2.val >= 10){
    value = l1.val + l2.val - 10;
    isMan = true;
  }else{
    value = l1.val + l2.val;
    isMan = false;
  }
  let obj = {
    val: value,
    next: null,
  }
  let target = obj;

  let cur1 = l1.next;  
  let cur2 = l2.next; 

  if(!cur1 && !cur2){
    if(isMan){
      obj.next = {
        val: 1,
        next: null,
      }
      return target;
    }else{
      return target;
    }
  }
  // 目标链表, 尾插法
  while (cur1 || cur2 ) {

    if(!cur1){
      // l1已经到头, 只剩这l2了
      if(isMan){
        if(cur2.val + 1 >= 10){
          obj.next = {
            val: cur2.val + 1 - 10,
            next: null,
          }
          obj = obj.next;

          if(!cur2.next){
            obj.next = {
              val: 1,
              next: null,
            }
            return target;
          }

          isMan = true;
          cur2 = cur2.next;
          continue;
        }else{
          obj.next = {
            val: cur2.val + 1,
            next: cur2.next
          }
          return target;
        }

      }else{
        obj.next = cur2;
        return target;
      }
    }
    if(!cur2){
      // l2已经到头, 只剩这l1了
      if(isMan){
        if(cur1.val + 1 >= 10){
          obj.next = {
            val: cur1.val + 1 - 10,
            next: null,
          }
          obj = obj.next;

          if(!cur1.next){
            obj.next = {
              val: 1,
              next: null,
            }
            return target;
          }

          isMan = true;
          cur1 = cur1.next;
          continue;
        }else{
          obj.next = {
            val: cur1.val + 1,
            next: cur1.next
          }
          return target;
        }

      }else{
        obj.next = cur1;
        return target;
      }
    }
    // 数值相加后的
    let value = 0;
    // 是否满一位
    if(isMan){
      if(cur1.val + cur2.val + 1  >= 10){
        value = cur1.val + cur2.val + 1 - 10;
        isMan = true;
      }else{
        value = cur1.val + cur2.val + 1;
        isMan = false;
      }
    }else{
      if(cur1.val + cur2.val  >= 10){
        value = cur1.val + cur2.val - 10;
        isMan = true;
      }else{
        value = cur1.val + cur2.val;
        isMan = false;
      }
    }
    

    obj.next = {
      val: value,
      next: null,
    }
    obj = obj.next;

    cur1 = cur1.next;
    cur2 = cur2.next;

    if(!cur1 && !cur2){
      if(isMan){
        obj.next = {
          val: 1,
          next: null,
        }
        return target;
      }else{
        return target;
      }
    }
  }

  return target;
};

// let node1 = {
//   val: 9,
//   next: {
//     val: 9,
//     next: {
//       val: 1,
//       next: null
//     }
//   }
// }
// let node2 = {
//   val: 1,
//   next: null
// }


// let node1 = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 3,
//       next: null
//     }
//   }
// }
// let node2 = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 6,
//       next: {
//         val: 9,
//         next: null
//       }
//     }
//   }
// }

let node1 = {
  val: 5,
  next: null
}
let node2 = {
  val: 5,
  next: null
}

console.log(JSON.stringify(addTwoNumbers(node1, node2), null, 2));