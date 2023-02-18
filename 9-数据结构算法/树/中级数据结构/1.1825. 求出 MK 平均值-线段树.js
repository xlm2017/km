// 给你两个整数 m 和 k ，以及数据流形式的若干整数。你需要实现一个数据结构，计算这个数据流的 MK 平均值 。

// MK 平均值 按照如下步骤计算：

// 如果数据流中的整数少于 m 个，MK 平均值 为 -1 ，否则将数据流中最后 m 个元素拷贝到一个独立的容器中。
// 从这个容器中删除最小的 k 个数和最大的 k 个数。
// 计算剩余元素的平均值，并 向下取整到最近的整数 。
// 请你实现 MKAverage 类：

// MKAverage(int m, int k) 用一个空的数据流和两个整数 m 和 k 初始化 MKAverage 对象。
// void addElement(int num) 往数据流中插入一个新的元素 num 。
// int calculateMKAverage() 对当前的数据流计算并返回 MK 平均数 ，结果需 向下取整到最近的整数 。
 

// 示例 1：

// 输入：
// ["MKAverage", "addElement", "addElement", "calculateMKAverage", "addElement", "calculateMKAverage", "addElement", "addElement", "addElement", "calculateMKAverage"]
// [[3, 1], [3], [1], [], [10], [], [5], [5], [5], []]
// 输出：
// [null, null, null, -1, null, 3, null, null, null, 5]

// 解释：
// MKAverage obj = new MKAverage(3, 1); 
// obj.addElement(3);        // 当前元素为 [3]
// obj.addElement(1);        // 当前元素为 [3,1]
// obj.calculateMKAverage(); // 返回 -1 ，因为 m = 3 ，但数据流中只有 2 个元素
// obj.addElement(10);       // 当前元素为 [3,1,10]
// obj.calculateMKAverage(); // 最后 3 个元素为 [3,1,10]
//                           // 删除最小以及最大的 1 个元素后，容器为 [3]
//                           // [3] 的平均值等于 3/1 = 3 ，故返回 3
// obj.addElement(5);        // 当前元素为 [3,1,10,5]
// obj.addElement(5);        // 当前元素为 [3,1,10,5,5]
// obj.addElement(5);        // 当前元素为 [3,1,10,5,5,5]
// obj.calculateMKAverage(); // 最后 3 个元素为 [5,5,5]
//                           // 删除最小以及最大的 1 个元素后，容器为 [5]
//                           // [5] 的平均值等于 5/1 = 5 ，故返回 5
 

// 提示：

// 3 <= m <= 105
// 1 <= k*2 < m
// 1 <= num <= 105
// addElement 与 calculateMKAverage 总操作次数不超过 10^5 次。




// 抄的
function SegTree(left, right) {
  this.left = left;     // 节点的左端点
  this.right = right;    // 节点的右端点
  this.leftChild = null;
  this.rightChild = null;
  this.countSum = 0;
  this.valueSum = 0;
}
SegTree.buildTree = function buildTree(left, right) {
  const node = new SegTree(left, right);
  if (left !== right) {
      const mid = (left + right) >> 1;
      node.leftChild = buildTree(left, mid);
      node.rightChild = buildTree(mid + 1, right);
  }
  return node;
}
SegTree.prototype.isLeafNode = function() {
  return !this.leftChild;
}
SegTree.prototype.includes = function(position) {
  return this.left <= position && this.right >= position;
}
SegTree.prototype.pushUp = function() {
  this.valueSum = this.leftChild.valueSum + this.rightChild.valueSum;
  this.countSum = this.leftChild.countSum + this.rightChild.countSum;
}
// 在 position 处增加 addCount 个数字
SegTree.prototype.update = function(position, addCount) {
  if (this.isLeafNode()) {
      this.countSum += addCount;
      this.valueSum += addCount * position;
      return;
  }
  if (this.leftChild.includes(position)) {
      this.leftChild.update(position, addCount);
  } else {
      this.rightChild.update(position, addCount);
  }
  this.pushUp();
}
// 查询前 count 个数的和
SegTree.prototype.query = function (count) {
  if (this.isLeafNode()) return this.left * count;
  if (this.countSum === count) return this.valueSum;
  if (this.leftChild.countSum === count) return this.leftChild.valueSum;
  if (this.leftChild.countSum < count)
      return this.leftChild.valueSum + this.rightChild.query(count - this.leftChild.countSum);
  return this.leftChild.query(count);
}

/**
* @param {number} m
* @param {number} k
*/
var MKAverage = function(m, k) {
  // n <= 100000
  this.m = m;
  this.k = k;
  // segment
  this.segTree = SegTree.buildTree(1, 10000);
  this.queue = [];
};

/**
* @param {number} num
* @return {void}
*/
MKAverage.prototype.addElement = function(num) {
  this.queue.push(num);
  this.segTree.update(num, 1);
  if (this.queue.length > this.m) {
      this.segTree.update(this.queue.shift(), -1);
  }
};

/**
* @return {number}
*/
MKAverage.prototype.calculateMKAverage = function() {
  const { m, k } = this;
  if (this.queue.length < m) return -1;
  const minK = this.segTree.query(k);
  const minM_K = this.segTree.query(m - k);
  return Math.floor((minM_K - minK) / (m - 2 * k));
};

/**
* Your MKAverage object will be instantiated and called as such:
* var obj = new MKAverage(m, k)
* obj.addElement(num)
* var param_2 = obj.calculateMKAverage()
*/

// 作者：我不吃饼干
// 链接：https://leetcode.cn/problems/finding-mk-average/solutions/722149/ti-gong-yi-ban-javascriptde-xian-duan-sh-htj4/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。






let obj = new MKAverage(3, 1); 
obj.addElement(3);        // 当前元素为 [3]
obj.addElement(1);        // 当前元素为 [3,1]
let v = obj.calculateMKAverage(); // 返回 -1 ，因为 m = 3 ，但数据流中只有 2 个元素
console.log("v:", v);

obj.addElement(10);       // 当前元素为 [3,1,10]
let v2 = obj.calculateMKAverage(); // 最后 3 个元素为 [3,1,10]
console.log("v2:", v2);
                          // 删除最小以及最大的 1 个元素后，容器为 [3]
                          // [3] 的平均值等于 3/1 = 3 ，故返回 3

obj.addElement(5);        // 当前元素为 [3,1,10,5]
obj.addElement(5);        // 当前元素为 [3,1,10,5,5]
obj.addElement(5);        // 当前元素为 [3,1,10,5,5,5]
let v3 = obj.calculateMKAverage(); // 最后 3 个元素为 [5,5,5]
console.log("v3:", v3);

