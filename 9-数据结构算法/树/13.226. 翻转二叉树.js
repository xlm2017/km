// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

 

// 示例 1：



// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]
// 示例 2：



// 输入：root = [2,1,3]
// 输出：[2,3,1]
// 示例 3：

// 输入：root = []
// 输出：[]


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
 * @return {TreeNode}
 */
var invertTree = function(root) {

  function dfs(node){
    if(!node) return;
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    // console.log('前序:', node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);

  return root;
};

let root1 = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1
    },
    right: {
      val: 3
    }
  },
  right: {
    val: 7,
    left: {
      val: 6,
    },
    right: {
      val: 9
    }
  }
}

console.log(JSON.stringify(invertTree(root1), null, 2));