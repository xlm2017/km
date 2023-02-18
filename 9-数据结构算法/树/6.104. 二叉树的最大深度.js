// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

 

// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：2
// 示例 2：

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5
 

// 提示：

// 树中节点数的范围在 [0, 105] 内
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
 * @return {number}
 */
var minDepth = function(root) {
  if(!root){
    return 0;
  }
  let deep = 0;
  let arr = [root];
  while (arr.length) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      // if(!arr[i].left && !arr[i].right){
      //   return deep;
      // }
      if(arr[i].left){
        temp.push(arr[i].left);
      }
      if(arr[i].right){
        temp.push(arr[i].right);
      }     
    }
    arr = temp;
    deep++;
  }
  return deep;
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

console.log(minDepth(root1));