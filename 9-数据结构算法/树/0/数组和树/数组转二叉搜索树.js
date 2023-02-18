

function BinTreeNode (data) {  // 创建树节点函数
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
}
function BinaryTree () {
  this.root = null;
}
BinaryTree.prototype.insert = function (node) {  // 向节点中插入元素
  let binTreeNode = new BinTreeNode(node);
  if (this.root === null) {
    this.root = binTreeNode;
  } else {
    let curr_node = this.root;
    let parent;
    while (true) {
      parent = curr_node;
      // 新加入的值如果小于父节点，则为左子树，否则为右子树
      if (node < curr_node.data) {
        curr_node = curr_node.leftChild;
        if (curr_node === null) {
          parent.leftChild = binTreeNode;
          break;
        }
      } else {
        curr_node = curr_node.rightChild;
        if (curr_node === null) {
          parent.rightChild = binTreeNode;
          break;
        }
      }
    }
  }
}
// 测试数据
var bt = new BinaryTree();
var nums = [12, 10, 19, 3, 2, 10, 15, 13];
for (var i = 0; i < nums.length; i++) {
  bt.insert(nums[i]);
}
console.log(bt.root);