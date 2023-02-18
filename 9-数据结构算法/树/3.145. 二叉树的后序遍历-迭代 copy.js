

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
  let result = []
  let stack = [] // 栈

  while (root != null || stack.length > 0) {
    if (root != null) {
      stack.push(root)
      result.unshift(root.val) // 头部插入
      root = root.right
    } else {
      root = stack.pop()
      root = root.left
    }
  }
  return result
};


// 借助某种操作达到逆反前序遍历的效果

// 接下来我们思考一下前序遍历和后序遍历之间的关系：

// 前序遍历顺序为：根 -> 左 -> 右

// 后序遍历顺序为：左 -> 右 -> 根

// 如果1： 我们将前序遍历中节点插入结果链表尾部的逻辑，修改为将节点插入结果链表的头部

// 那么结果链表就变为了：右 -> 左 -> 根

// 如果2： 我们将遍历的顺序由从左到右修改为从右到左，配合如果1

// 那么结果链表就变为了：左 -> 右 -> 根

// 这刚好是后序遍历的顺序

// 基于这两个思路，我们想一下如何处理：

// 修改前序遍历代码中，节点写入结果链表的代码，将插入队尾修改为插入队首

// 修改前序遍历代码中，每次先查看左节点再查看右节点的逻辑，变为先查看右节点再查看左节点



// 作者：Noko
// 链接：https://leetcode.cn/problems/binary-tree-postorder-traversal/solutions/12336/die-dai-jie-fa-shi-jian-fu-za-du-onkong-jian-fu-za/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


console.log(inorderTraversal(tree));


