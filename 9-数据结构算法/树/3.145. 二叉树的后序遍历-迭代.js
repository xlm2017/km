

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

// 1 2 3 4 5 6 7 8 9

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
var inorderTraversal = function (root) {
  let arr = [];
  // 思路： 后序遍历顺序是 左节点 > 右节点 > 父节点


  let stack = [];


  while (root) {
    while (root.left) {
      // console.log("left:", root.val);
      stack.push(root);
      root = root.left;
    }
    if(root.right){
      root = root.right;
    }
    if(!root.left && !root.right){
      console.log("最底层:", root.val, root);
      arr.push(root.val);
      // 弹出收集的4
      root = stack.pop();   
      // 弹出后的元素不再执行左侧子树, 避免重复
      console.log("弹出节点:", root);
      root.left = null;   
    }
  }
  return arr;
};

console.log(inorderTraversal(tree));


