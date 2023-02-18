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

// 3 <= m <= 10^5
// 1 <= k*2 < m
// 1 <= num <= 10^5
// addElement 与 calculateMKAverage 总操作次数不超过 10^5 次。


/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function(m, k) {
  this.m = m;
  this.k = k;
  this.array = [];
  // 维护一个k个最大值 和 k个最小值数组, 这样可以省去排序的时间
  this.max = [];  // k个
  this.min = [];  // k个
  // 剩余的需要计算的数组
  this.center = [];  // 中间的
};

/** 
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function(num) {
  this.array.push(num);
  if(this.min.length === this.k){
    if(this.max.length === this.k){
      // 装入center数组
    }else{
      this.max.push(num);
    }
  }else{
    this.min.push(num);
  }
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function() {
  if(this.array.length < this.m){
    return -1;
  }else{
    console.log(this.array);
    let res = this.array.slice(-1 * this.m);
    res.sort((a,b)=>a-b);
    // console.log("res:", res);
    let arr = res.slice(this.k, res.length - this.k);
    // console.log("arr:", arr);
    let total = arr.reduce((t, i)=> t + i);
    return Math.floor(total / arr.length);
  }
};



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

