// 中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。

// 例如 arr = [2,3,4] 的中位数是 3 。
// 例如 arr = [2,3] 的中位数是 (2 + 3) / 2 = 2.5 。
// 实现 MedianFinder 类:

// MedianFinder() 初始化 MedianFinder 对象。

// void addNum(int num) 将数据流中的整数 num 添加到数据结构中。

// double findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10-5 以内的答案将被接受。

// 示例 1：

// 输入
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// 输出
// [null, null, null, 1.5, null, 2.0]

// 解释
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // 返回 1.5 ((1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
// 提示:

// -105 <= num <= 105
// 在调用 findMedian 之前，数据结构中至少有一个元素
// 最多 5 * 104 次调用 addNum 和 findMedian



class MinHeap {
  heap = []

  swap(index1, index2) {
      let temp = this.heap[index1]
      this.heap[index1] = this.heap[index2]
      this.heap[index2] = temp
  }

  insert(value) {
      this.heap.push(value)
      this.shiftUp(this.heap.length - 1)
  }

  shiftUp(index) {
      let parentNodeIndex = (index - 1) >> 1
      if (index != 0 && this.heap[index] < this.heap[parentNodeIndex]){
          this.swap(parentNodeIndex, index)
          this.shiftUp(parentNodeIndex)
      }

  }

  shiftDown(index) {
      let leftNodeIndex = (index + 1) * 2 - 1,
          rightNodeIndex = (index + 1) * 2

      if(leftNodeIndex  < this.heap.length && this.heap[leftNodeIndex] < this.heap[index]) {
          this.swap(index, leftNodeIndex)
          this.shiftDown(leftNodeIndex)
      }
      if(rightNodeIndex < this.heap.length && this.heap[rightNodeIndex] < this.heap[index]) {
          this.swap(index, rightNodeIndex)
          this.shiftDown(rightNodeIndex)
      }
  }
}

class BigHeap {
  heap = []

  swap(index1, index2) {
      let temp = this.heap[index1]
      this.heap[index1] = this.heap[index2]
      this.heap[index2] = temp
  }

  insert(value) {
      this.heap.push(value)
      this.shiftUp(this.heap.length - 1)
  }

  shiftUp(index) {
      let parentNodeIndex = (index - 1) >> 1
      if (index != 0 && this.heap[index] > this.heap[parentNodeIndex]){
          this.swap(parentNodeIndex, index)
          this.shiftUp(parentNodeIndex)
      }

  }

  shiftDown(index) {
      let leftNodeIndex = (index + 1) * 2 - 1,
          rightNodeIndex = (index + 1) * 2

      if(leftNodeIndex  < this.heap.length && this.heap[leftNodeIndex] > this.heap[index]) {
          this.swap(index, leftNodeIndex)
          this.shiftDown(leftNodeIndex)
      }
      if(rightNodeIndex < this.heap.length && this.heap[rightNodeIndex] > this.heap[index]) {
          this.swap(index, rightNodeIndex)
          this.shiftDown(rightNodeIndex)
      }
  }
}


var MedianFinder = function() {
  this.mini_heap = new MinHeap()
  this.big_heap = new BigHeap()
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  // 添加操作
  if (this.mini_heap.heap.length == this.big_heap.heap.length) {
      if (num > this.big_heap.heap[0]) {
          this.mini_heap.insert(num)
      }else {
          this.big_heap.insert(num)
      }
  }else if(this.mini_heap.heap.length > this.big_heap.heap.length) {
      if(num < this.mini_heap.heap[0]) {
          this.big_heap.insert(num)
      }else {
          // 本来应该加到最小堆
          //把最小堆堆顶给最大堆，自己的堆顶换成num
          this.big_heap.insert(this.mini_heap.heap[0])
          this.mini_heap.heap[0] = num
          this.mini_heap.shiftDown(0)
      }
  }else if(this.mini_heap.heap.length < this.big_heap.heap.length) {
      if(num > this.big_heap.heap[0]) {
          this.mini_heap.insert(num)
      }else {
          this.mini_heap.insert(this.big_heap.heap[0])
          this.big_heap.heap[0] = num
          this.big_heap.shiftDown(0)
      }
  }
  // console.log(this.big_heap, this.mini_heap)
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  // 比较最大/小堆的大小
  if (this.mini_heap.heap.length == this.big_heap.heap.length) {
      return (this.mini_heap.heap[0] + this.big_heap.heap[0]) / 2
  }else if (this.mini_heap.heap.length > this.big_heap.heap.length) {
      return this.mini_heap.heap[0]
  }else {
      return this.big_heap.heap[0]
  }
};

// 作者：阿巴阿巴
// 链接：https://leetcode.cn/problems/find-median-from-data-stream/solutions/1666080/javascriptban-jie-ti-si-lu-by-ityou-o-prdb/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。