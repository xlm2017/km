// 给定一个二叉搜索树 root 和一个目标结果 k，如果二叉搜索树中存在两个元素且它们的和等于给定的目标结果，则返回 true。

 

// 示例 1：


// 输入: root = [5,3,6,2,4,null,7], k = 9
// 输出: true
// 示例 2：


// 输入: root = [5,3,6,2,4,null,7], k = 28
// 输出: false
 

// 提示:

// 二叉树的节点个数的范围是  [1, 104].
// -104 <= Node.val <= 104
// 题目数据保证，输入的 root 是一棵 有效 的二叉搜索树
// -105 <= k <= 105



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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {

  let obj = {};
  let flag = false;
  function traverse(node) {
    if(!node){
      return;
    }
    if(node.left){
      traverse(node.left);
    }
    if(obj[node.val]){
      flag = true;
      return true;
    }else{
      obj[k - node.val] = true;
    }
    if(node.right){
      traverse(node.right);
    }
  }

  traverse(root);
  return flag;
};

let root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 6,
    right: {
      val: 7
    }
  }
}

let k = 9;

console.log(findTarget(root, k));