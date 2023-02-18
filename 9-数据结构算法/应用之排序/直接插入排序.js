

// 打扑克牌时整理牌面一样
// 1.首先将数组第1个数看成是一个有序序列。

// 2.将数组的第2个数按照关键字大小插入到这个有序序列中，插入后得到了一包含两个数的有序序列。

// 3.接下来再重复上面的步骤将第3，第4……第n-1个数分别插入到该有序序列中，最终得到一个包含n个数的有序序列。

function sort (arr) {
  for (var index = 1; index < arr.length; index++) {
    var end = index;
    var element = arr[index];
    while (end > 0 && element < arr[end - 1]) {
      arr[end] = arr[end - 1];
      end--;
    }
    arr[end] = element;
  }
}

let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];

sort(arr);


// 1.时间复杂度
// 最好情况就是全部有序，此时只需遍历一次，最好的时间复杂度为O ( n ) O(n)O(n)
// 最坏情况全部反序，内层每次遍历已排序部分，最坏时间复杂度为O ( n 2 ) O(n^2)O(n 
// 2
//  )

// 综上，因此直接插入排序的平均时间复杂度为O ( n 2 ) O(n^2)O(n 
// 2
//  )

// 2.空间复杂度
// 辅助空间是常量
// 平均的空间复杂度为：O ( 1 ) O(1)O(1)

// 3.算法稳定性
// 相同元素的前后顺序是否改变


// 插入到比它大的数前面，所以直接插入排序是稳定的


{
  //原数组
  let arr = [1, 3, 5, 7, 34, 2, 467, 2, 56, 26, 43, 402, 782, 34];
  for (let i = 1; i < arr.length; i++) {
    //当前项
    let currentItem = arr[i];
    //i-1以前的都是有序的子序列
    let j = i - 1;
    //依次把比当前项大的往右侧移动，直到找到符合条件的位置
    while (currentItem < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    //赋值
    arr[j + 1] = currentItem;
  }
  console.log(arr);

}

{
  // 插入排序
  function insertionSort (arr) {
    if (arr.length <= 1) {
      return arr
    }
    for (var i = 1; i < arr.length; i++) {
      var j = i - 1 // j 是有序区间的最大下标
      var val = arr[i] // val 是无序区间的首个数据，用来与有序区间的各个数做对比
      for (; j >= 0; j--) {
        if (arr[j] > val) { // 由于要求排序从小到大，也就是说 val 比 arr[j] 小的时候，val 需要排在 arr[j] 前面，arr[j] 需要移位
          arr[j + 1] = arr[j]
        } else {
          break // 当不需要移位时，由于有序区间是有序的，直接跳出循环即可
        }
      }
      arr[j + 1] = val
    }
    return arr
  }
}