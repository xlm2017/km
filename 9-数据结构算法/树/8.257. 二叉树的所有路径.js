
// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

// 叶子节点 是指没有子节点的节点。

 
// 示例 1：


// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]
// 示例 2：

// 输入：root = [1]
// 输出：["1"]

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

//
//           2
//        9     20
//            15   7
//
//
//
//
//
//


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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = [];
  // 用于回溯
  let stack = [];
  // stack.push(root.val);
  function backtracking(node){
    if(!node.left && !node.right){
      stack.push(node.val);
      let str = [...stack].join("->");
      res.push(str);
      return;
    }
    stack.push(node.val);
    if(node.left){
      backtracking(node.left);
      stack.pop();
      // if(node.right){
      //   backtracking(node.right);
      //   stack.pop();
      // }
    }
    if(node.right){
      backtracking(node.right);
      stack.pop();
    }
  }
  backtracking(root);
  return res;
};

console.log(binaryTreePaths(root1));