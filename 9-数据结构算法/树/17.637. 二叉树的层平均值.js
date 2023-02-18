// 给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。

 

// 示例 1：



// 输入：root = [3,9,20,null,null,15,7]
// 输出：[3.00000,14.50000,11.00000]
// 解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
// 因此返回 [3, 14.5, 11] 。
// 示例 2:



// 输入：root = [3,9,20,15,7]
// 输出：[3.00000,14.50000,11.00000]
 

// 提示：

// 树中节点数量在 [1, 104] 范围内
// -2^31 <= Node.val <= 2^31 - 1



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
var averageOfLevels = function(root) {
  if(!root) return [];
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let sum = 0;
    let len = queue.length;
    let temp = [];
    for (let i = 0; i < len; i++) {
      if(queue[i].left){
        temp.push(queue[i].left);
      }
      if(queue[i].right){
        temp.push(queue[i].right);
      }
      
      sum = sum + queue[i].val;
      // sum = sum + queue[i].val === 0 ? 0 : queue[i].val / len;
      // [0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,-0.00002]
    }
    res.push(sum ? sum / len : 0);
    queue = temp;
  }
  return res;
};

let root1 = {
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

console.log(averageOfLevels(root1));