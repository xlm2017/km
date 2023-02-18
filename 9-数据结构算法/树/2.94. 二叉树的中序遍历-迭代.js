

let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3
    },
  },
  right: {
    val: 8,
    left: {
      val: 9
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
var inorderTraversal = function (root) {
  let arr = [];
  // 思路： 中序遍历顺序是 左节点>父节点>右节点
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let cur = stack[stack.length - 1];
    if (cur.left) {
      stack.push(cur.left);
    } else {
      console.log("左树已经到头了:", stack);
      let node = stack.pop();
      arr.push(node.val);
      root = node.right;
      // 避免死循环
      // break;
    }
  }
  return arr;
};

console.log(inorderTraversal(tree));




var inorderTraversal2 = function (root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/binary-tree-inorder-traversal/solutions/412886/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。