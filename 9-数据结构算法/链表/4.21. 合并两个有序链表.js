
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

  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  
  let cur1 = list1;
  let cur2 = list2;


  let target = {
    val: -1,
    next: null
  };
  // 尾插法
  let obj = target;

  while (cur1 || cur2) {
    console.log('\n');
    if(cur1 && cur2){
      // console.log("cur1:", cur1);
      // console.log("cur2:", cur2);
      // console.log("target:", target.next);

      if(cur1.val <= cur2.val){

        obj.next = {
          val: cur1.val,
          next: null
        }
        obj = obj.next;

        cur1 = cur1.next;
        continue;
      }
      // js:70
      // if(cur1.val > cur2.val){
      if(cur1.val > cur2.val){

        obj.next = {
          val: cur2.val,
          next: null
        }
        obj = obj.next;

        cur2 = cur2.next;
        continue;
      }
    }

    if(!cur1){
      obj.next = cur2;
      return target.next;
    }
    if(!cur2){
      obj.next = cur1;
      return target.next;
    }

    // 两个都空了
  }
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