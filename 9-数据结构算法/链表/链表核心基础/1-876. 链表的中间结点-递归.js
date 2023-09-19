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


// 快指针走两步, 慢指针走一步

// 快指针走完, 慢指针必然在中间

var middleNode = function (head) {
  return getNextAndCount(head, 0).node;
};

const getNextAndCount = (node, num) => {
  if (!node) return { node: node, num: num };
  let tempRet = getNextAndCount(node.next, ++num);
  if (tempRet.num - num == Math.floor((tempRet.num - 1) / 2)) {
    return { node: node, num: tempRet.num }
  } else {
    return { node: tempRet.node, num: tempRet.num }
  }
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