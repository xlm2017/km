// 给定二叉树的根节点 root ，返回所有左叶子之和。

//  

// 示例 1：



// 输入: root = [3,9,20,null,null,15,7] 
// 输出: 24 
// 解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
// 示例 2:

// 输入: root = [1]
// 输出: 0
//  

// 提示:

// 节点数在 [1, 1000] 范围内
// -1000 <= Node.val <= 1000


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/sum-of-left-leaves
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {

  let sum = 0;
  function traverse(node) {

    if(!node){
      return;
    }

    if(node.left){
      
      traverse(node.left);
      if(!node.left.left && !node.left.right){
        // console.log("左子节点:", node.left.val);
        sum += node.left.val;
      }
    }

    if(!node.left && !node.right){
      // console.log("子节点2:", node.val);
    }

    if(node.right){
      traverse(node.right);
    }
    
    // console.log("后序遍历:", node.val);
  }
  traverse(root);
  return sum;
};



let tree = {
  val: 9,
  left: {
    val: 4,
    left: {
      val: 1
    },
    right: {
      val: 3,
      left: {
        val: 2
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 6,
      right: {
        val: 5
      }
    },
    right: {
      val: 7
    }
  }
}

console.log(sumOfLeftLeaves(tree));