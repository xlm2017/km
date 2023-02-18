

let tree = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3
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
var inorderTraversal = function(root) {

  let res = [];
  function traverse(node) {
    if(!node){
      return;
    }
    // console.log('前序遍历:', node.val);
    traverse(node.left);
    // console.log('中序遍历:', node.val);
    // res.push(node.val)
    traverse(node.right);
    console.log('后序遍历:', node.val);
    res.push(node.val);
    // 1 2 3 4 5 6 7 8 9
  }

  traverse(root);
  
  return res;
};


let tree2 = {
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
      left: {
        val: 5
      }
    },
    right: {
      val: 7
    }
  }
}



let tree3 = {
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

console.log(inorderTraversal(tree2));