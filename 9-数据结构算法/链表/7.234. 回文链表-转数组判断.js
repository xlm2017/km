
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
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let res = true;
  let arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  // console.log('arr:', arr);
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[arr.length - 1 - i] && i <= arr.length - 1 - i){
      return false;
    }    
  }

  // for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
  //   if (vals[i] !== vals[j]) {
  //       return false;
  //   }
  // }


  return res;
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