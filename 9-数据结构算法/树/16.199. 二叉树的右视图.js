// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 

// 示例 1:



// 输入: [1,2,3,null,5,null,4]
// 输出: [1,3,4]
// 示例 2:

// 输入: [1,null,3]
// 输出: [1,3]
// 示例 3:

// 输入: []
// 输出: []
 

// 提示:

// 二叉树的节点个数的范围是 [0,100]
// -100 <= Node.val <= 100 


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root) return [];
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    res.push(queue[queue.length - 1].val);
    let temp = [];
    for (let i = 0; i < queue.length; i++) {
      if(queue[i].left){
        temp.push(queue[i].left);
      }
      if(queue[i].right){
        temp.push(queue[i].right);
      }
    }
    queue = temp;
  }
  return res;
};


let root1 = {
  val: 2,
  left: {
    val: 1,
    right: {
      val: 4
    }
  },
  right: {
    val: 3,
    right: {
      val: 7
    }
  }
}


// 分析可知, 获取层序遍历的最后一个元素即可
console.log(rightSideView(root1));