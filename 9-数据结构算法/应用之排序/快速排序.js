

// 快速排序"的思想很简单，整个排序过程只需要三步：
// 又称为划分交换排序

// （1）在数据集之中，选择一个元素作为"基准"（pivot）。

// （2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。

// （3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

// 举例来说，现在有一个数据集{85, 24, 63, 45, 17, 31, 96, 50}，怎么对其排序呢？

// 第一步，选择中间的元素45作为"基准"。（基准值可以任意选择，但是选择中间的值比较容易理解。）

// 第二步，按照顺序，将每个元素与"基准"进行比较，形成两个子集，一个"小于45"，另一个"大于等于45"。

// 第三步，对两个子集不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

function quick_sort (array, start, end) {
  // 数组长度为0和1退出
  if (end <= start) {
    return
  }
  // 设置一个基准数
  let mid = array[start]
  // 向右的游标
  let low = start
  // 向左的游标
  let high = end
  // 当low=>high时退出循环
  while (low < high) {
    // 如果low与high未重合，high指向的元素不比基准元素小，则high向左移动
    while (low < high && array[high] >= mid) {
      high -= 1
    }
    // 将high指向的元素放到low的位置上
    array[low] = array[high]
    // 如果low与high未重合，low指向的元素比基准元素小，则low向右移动
    while (array[low] < mid && low < high) {
      low += 1
    }
    // 将low指向的元素放到high的位置上
    array[high] = array[low]
  }
  // 退出循环后，low与high重合，此时所指位置为基准元素的正确位置
  array[low] = mid
  console.log("一次排序:", array, low, high);
  // 对基准元素左边的子序列进行快速排序
  quick_sort(array, start, low - 1)

  // 对基准元素右边的子序列进行快速排序
  quick_sort(array, low + 1, end)

}

let arr = [5, 4, 3, 8, 7, 2, 6, 1, 9];
let len = arr.length - 1;

quick_sort(arr, 0, len)

console.log("结果:", arr);

// 一次排序结果: [1, 4, 3, 2, 5, 7, 6, 8, 9]  // 4






// 图解 快速排序算法
// https://cuijiahua.com/blog/2017/12/algorithm_4.html