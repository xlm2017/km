// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

 

// 示例 1：


// 输入：root = [1,2,2,3,4,4,3]
// 输出：true
// 示例 2：


// 输入：root = [1,2,2,null,3,null,3]
// 输出：false
 

// 提示：

// 树中节点数目在范围 [1, 1000] 内
// -100 <= Node.val <= 100
 

// 进阶：你可以运用递归和迭代两种方法解决这个问题吗？


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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root) return true;
  // 递归判断是否对称
  function traverse(left, right){
    if(!left && !right) return;
    if(!left || !right) {
      return false;
    } 
    // if(left.val !== right.val) {
    //   return false;
    // }
    return left.val === right.val && traverse(left.left, right.right) && traverse(left.right, right.left);
  }

  return traverse(root.left, root.right);
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

console.log(isSymmetric(root1));
