

let tree = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3
    }
  }
}

// 1 3 2

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
var inorderTraversal = function(root) {
  function traverse(node) {
    if(!node){
      return;
    }
    // console.log('前序遍历:', node.val);
    traverse(node.left);
    console.log('中序遍历:', node.val);
    traverse(node.right);
    // console.log('后序遍历:', node.val);
  }
  traverse(root);
  
  return res;
};

console.log(inorderTraversal(tree));