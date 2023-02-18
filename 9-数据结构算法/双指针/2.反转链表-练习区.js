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



function reverseList(nodeList){

  let cur = nodeList;
  // 循环   循环条件, 借助迭代变量,不用修改原对象

  let pre = null;
  let a = true;
  while (cur && a) {

    setTimeout(() => {
      a = false;
    }, 2000);

    console.log(cur.val);

    // cur = cur.next;

    // cur.next 节点指向 cur, 数据域1所在的节点, 指针域指向null

    // 1 --> 2 --> 3 --> 4 --> 5

    // 1 <-- 2 <-- 3 <-- 4 <-- 5

    let temp = cur.next;

    cur.next = pre;

    pre = cur;

    console.log('pre:', pre);

    cur = temp;


  }
  return pre;
}




console.log("反转结果:", reverseList(node));
