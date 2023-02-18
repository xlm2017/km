// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

 

// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]
 

// 提示：

// 树中节点数目在范围 [0, 2000] 内
// -1000 <= Node.val <= 1000

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root){
    return [];
  }
  let res = [];
  let stack = [ root ];
  while (stack.length) {
    let arr = [];
    let vals = [];
    for (let i = 0; i < stack.length; i++) {
      // console.log("stack[i]:", stack[i]);
      vals.push(stack[i].val);
      if(stack[i].left){
        arr.push(stack[i].left);
      }
      if(stack[i].right){
        arr.push(stack[i].right);
      }
    }
    res.push(vals);
    stack = arr;
    // console.log("stack:", stack);

  }
  return res;
};

let root1 = {
  val: 2,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
}

console.log(levelOrder(root1));