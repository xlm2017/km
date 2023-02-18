// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

// 例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]





// 示例 1:

// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// 输出: 6 
// 解释: 节点 2 和节点 8 的最近公共祖先是 6。
// 示例 2:

// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// 输出: 2
// 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。


// 说明:

// 所有节点的值都是唯一的。
// p、q 为不同节点且均存在于给定的二叉搜索树中。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

  //如果根节点和p,q的差相乘是正数，说明这两个差值要么都是正数要么都是负数，也就是说
  //他们肯定都位于根节点的同一侧，就继续往下找

  while ((root.val - p.val) * (root.val - q.val) > 0){
    root = p.val < root.val ? root.left : root.right;
  }
  //如果相乘的结果是负数，说明p和q位于根节点的两侧，如果等于0，说明至少有一个就是根节点
  return root;

  // 作者：数据结构和算法
  // 链接：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/428739/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-3c/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

};

// [6,2,8,0,4,7,9,null,null,3,5]
let root = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
    },
    right: {
      val: 4,
      left: {
        val: 3
      },
      right: {
        val: 5
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 7
    },
    right: {
      val: 9
    }
  }
}

let p = 2, q = 8;
// 6


console.log(lowestCommonAncestor(root, p, q));