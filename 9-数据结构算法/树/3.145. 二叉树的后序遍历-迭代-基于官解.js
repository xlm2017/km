



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
  // 迭代, 模拟栈,  递归中的隐式栈变为显式栈  
  let res = [];
  if(!root){
    return res;
  }
  
  let stack = [];
  let prev = null;
  while (root != null || stack.length) {
    
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();

    if (root.right == null || root.right == prev) {
      res.push(root.val);
      prev = root;
      root = null;
    } else { 
      stack.push(root);
      root = root.right;
    }

  }
  
  return res;
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

// 1 2 3 4 5 6 7 8 9

console.log(inorderTraversal(tree));


// class Solution {
//   public List<Integer> postorderTraversal(TreeNode root) {
//       List<Integer> res = new ArrayList<Integer>();
//       if (root == null) {
//           return res;
//       }

//       Deque<TreeNode> stack = new LinkedList<TreeNode>();
//       TreeNode prev = null;
//       while (root != null || !stack.isEmpty()) {
//           while (root != null) {
//               stack.push(root);
//               root = root.left;
//           }
//           root = stack.pop();
//           if (root.right == null || root.right == prev) {
//               res.add(root.val);
//               prev = root;
//               root = null;
//           } else {
//               stack.push(root);
//               root = root.right;
//           }
//       }
//       return res;
//   }
// }

