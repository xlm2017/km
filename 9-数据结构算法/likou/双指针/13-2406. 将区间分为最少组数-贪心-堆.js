// 给你一个二维整数数组 intervals ，其中 intervals[i] = [lefti, righti] 表示 闭 区间 [lefti, righti] 。

// 你需要将 intervals 划分为一个或者多个区间 组 ，每个区间 只 属于一个组，且同一个组中任意两个区间 不相交 。

// 请你返回 最少 需要划分成多少个组。

// 如果两个区间覆盖的范围有重叠（即至少有一个公共数字），那么我们称这两个区间是 相交 的。比方说区间 [1, 5] 和 [5, 8] 相交。



// 示例 1：

// 输入：intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]
// 输出：3
// 解释：我们可以将区间划分为如下的区间组：
// - 第 1 组：[1, 5] ，[6, 8] 。
// - 第 2 组：[2, 3] ，[5, 10] 。
// - 第 3 组：[1, 10] 。
// 可以证明无法将区间划分为少于 3 个组。
// 示例 2：

// 输入：intervals = [[1,3],[5,6],[8,10],[11,13]]
// 输出：1
// 解释：所有区间互不相交，所以我们可以把它们全部放在一个组内。


// 提示：

// 1 <= intervals.length <= 105
// intervals[i].length == 2
// 1 <= lefti <= righti <= 106



/**
 * @param {number[][]} intervals
 * @return {number}
 */
function minGroups(intervals) {
  // 优先级队列, 小根堆
  class Heap{
      data = [];
      build(arr){
          this.data = [];
          if(!(this.data instanceof Array)) return false; 
          for(let i = 0; i < arr.length; i++){
              this.insert(arr[i]);
          }
          return this.data;
      }
      insert(d){
          if(!(this.data instanceof Array)) return false;
          this.data.push(d);
          let curIndex = this.data.length - 1;
          let fatherIndex = Math.floor((curIndex - 1) / 2);
          while(fatherIndex >= 0){
              if(this.data[curIndex] < this.data[fatherIndex]){
                  const temp = this.data[fatherIndex];
                  this.data[fatherIndex] = this.data[curIndex];
                  this.data[curIndex] = temp;
                  curIndex = fatherIndex;
                  fatherIndex = Math.floor((curIndex - 1) / 2);
              }
              else break;
          }
      }
      delete(){
          if(!(this.data instanceof Array)) return false;
          const top = this.data[0], last = this.data.pop();
          if(this.data.length === 0) return top;
          this.data[0] = last;
          let curIndex = 0, leftChild = 2 * (curIndex + 1) - 1, rightChild = 2 * (curIndex + 1);
          while(leftChild < this.data.length){
              let maxIndex = rightChild >= this.data.length || this.data[leftChild] < this.data[rightChild] ? leftChild : rightChild;
              if(this.data[curIndex] > this.data[maxIndex]){
                  const temp = this.data[maxIndex];
                  this.data[maxIndex] = this.data[curIndex];
                  this.data[curIndex] = temp;
                  curIndex = maxIndex;
                  leftChild = 2 * (curIndex + 1) - 1, rightChild = 2 * (curIndex + 1)
              }
              else break;
          }
          return top;
      }
  }
  const heap = new Heap();
  intervals.sort((a, b) => a[0] - b[0]);
  for(let interval of intervals){
      if(heap.data.length > 0 && heap.data[0] < interval[0]) heap.delete();
      heap.insert(interval[1]);
  }
  return heap.data.length;
}

// 作者：navyl
// 链接：https://leetcode.cn/problems/divide-intervals-into-minimum-number-of-groups/solutions/1816531/by-navyl-v-i6rh/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


let intervals = [[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]]
// 输出：3


console.log(minGroups(intervals));