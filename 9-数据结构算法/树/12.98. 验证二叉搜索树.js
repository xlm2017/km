// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
 

// 示例 1：


// 输入：root = [2,1,3]
// 输出：true
// 示例 2：


// 输入：root = [5,1,4,null,null,3,6]
// 输出：false
// 解释：根节点的值是 5 ，但是右子节点的值是 4 。
 

// 提示：

// 树中节点数目范围在[1, 104] 内
// -231 <= Node.val <= 231 - 1

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
var isValidBST = function(root) {
  let arr = [];
  let flag = true;
  function traverse(node){
    if(!flag){
      return;
    }
    if(!node){
      return;
    }
    traverse(node.left);

    // 中序遍历, 二层搜索树
    console.log(node.val);
    if(arr.length && node.val <= arr[arr.length - 1]){
      console.log("不合格");
      flag = false;
      return;
    }
    arr.push(node.val);

    traverse(node.right);
  }
  traverse(root);
  return flag;
};

let root1 = {
  val: 2,
  left: {
    val: 1
  },
  right: {
    val: 3
  }
}

// true


let root2 = {
  val: 5,
  left: {
    val: 1
  },
  right: {
    val: 4,
    left: {
      val: 3,
    },
    right: {
      val: 6
    }
  }
}

console.log(isValidBST(root1));
// console.log(isValidBST(root2));

// 相当于中序遍历