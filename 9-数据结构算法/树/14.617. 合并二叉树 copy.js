// 给你两棵二叉树： root1 和 root2 。

// 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。

// 返回合并后的二叉树。

// 注意: 合并过程必须从两个树的根节点开始。

 

// 示例 1：


// 输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// 输出：[3,4,5,5,4,null,7]
// 示例 2：

// 输入：root1 = [1], root2 = [1,2]
// 输出：[2,2]
 

// 提示：

// 两棵树中的节点数目在范围 [0, 2000] 内
// -10^4 <= Node.val <= 10^4




/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if (root1 == null) {
    return root2;
  }
  if (root2 == null) {
      return root1;
  }
  let mergedS = {
    val: 0,
    left: null,
    right: null,
  }
  function dfs(node1, node2, merged){
    merged.val = node1.val + node2.val;
    merged.left = {}
    merged.right = {}
    dfs(node1.left, node1.left, merged.left);
    dfs(node2.right, node2.right, merged.right);
  }
  dfs(root1, root2, mergedS);
  return mergedS;
};

// let root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7];

let root1 = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5
    }
  },
  right: {
    val: 2,
  }
}

let root2 = {
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

console.log(mergeTrees(root1, root2));


