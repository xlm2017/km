
var len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap (arr) {   // 建立大顶堆
  len = arr.length;
  for (var i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }
}

function heapify (arr, i) {     // 堆调整
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}

function swap (arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapSort (arr) {
  buildMaxHeap(arr);
  for (var i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0);
  }
  return arr;
}


let arr = [ 2, 4, 9, 6, 1, 5 ];

console.log(heapSort(arr));


// 堆排序的基本思想是：
// 1.将待排序序列构造成一个大顶堆
// 2.此时，整个序列的最大值就是堆顶的根节点。
// 3.将其与末尾元素进行交换，此时末尾就为最大值。
// 4.然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了。

// 可以看到在构建大顶堆的过程中，元素的个数逐渐减少，最后就得到一个有序序列了.

// 优先队列的底层是最大堆或最小堆，最大堆或最小堆建议自己实现一下入堆、出堆的过程