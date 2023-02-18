
// 插入排序的优化版本

let arr = [49, 31, 63, 85, 75, 15, 26, 49, 53, 3];


const shellSort = (arr) => {
  const length = arr.length
  if (length <= 1) {
      return arr
  }
  for (let gap = Math.floor(length / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < length; i++) {
          let j = i;
          let current = arr[i];
          while (j - gap >= 0 && current < arr[j - gap]) {
              arr[j] = arr[j - gap];
              j = j - gap;
          }
          arr[j] = current;
      }
  }
  return arr
}

console.log(shellSort(arr));