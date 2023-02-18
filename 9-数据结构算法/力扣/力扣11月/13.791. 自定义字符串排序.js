// 给定两个字符串 order 和 s 。order 的所有单词都是 唯一 的，并且以前按照一些自定义的顺序排序。

// 对 s 的字符进行置换，使其与排序的 order 相匹配。更具体地说，如果在 order 中的字符 x 出现字符 y 之前，那么在排列后的字符串中， x 也应该出现在 y 之前。

// 返回 满足这个性质的 s 的任意排列 。



// 示例 1:

// 输入: order = "cba", s = "abcd"
// 输出: "cbad"
// 解释: 
// “a”、“b”、“c”是按顺序出现的，所以“a”、“b”、“c”的顺序应该是“c”、“b”、“a”。
// 因为“d”不是按顺序出现的，所以它可以在返回的字符串中的任何位置。“dcba”、“cdba”、“cbda”也是有效的输出。
// 示例 2:

// 输入: order = "cbafg", s = "abcd"
// 输出: "cbad"


// 提示:

// 1 <= order.length <= 26
// 1 <= s.length <= 200
// order 和 s 由小写英文字母组成
// order 中的所有字符都 不同

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  if (s.length === 1) {
    return s;
  }
  let array = s.split("");
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) { //如果左边的索引大于等于右边的索引说明整理完毕
      return
    }
    let i = left
    let j = right
    // const baseVal = order.indexOf(arr[j]) // 取无序数组最后一个数为基准值
    const baseVal = arr[j] // 取无序数组最后一个数为基准值
    while (i < j) { //把所有比基准值小的数放在左边大的数放在右边
      while (i < j && order.indexOf(arr[i]) <= order.indexOf(baseVal)) { //找到一个比基准值大的数交换
        i++
      }
      arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
      while (j > i && order.indexOf(arr[j]) >= order.indexOf(baseVal)) { //找到一个比基准值小的数交换
        j--
      }
      arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
    }
    arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    sort(arr, left, j - 1) // 将左边的无序数组重复上面的操作
    sort(arr, j + 1, right) // 将右边的无序数组重复上面的操作
  }
  // const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
  // sort(newArr)
  // return newArr
  sort(array)
  return array;
};

let order = "cbafg", s = "abcd";  // 没有d
console.log("排序结果:", customSortString(order, s));   // cbad



const quickSort = (array) => {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) { //如果左边的索引大于等于右边的索引说明整理完毕
      return
    }
    let i = left
    let j = right
    const baseVal = arr[j] // 取无序数组最后一个数为基准值
    while (i < j) { //把所有比基准值小的数放在左边大的数放在右边
      while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
        i++
      }
      arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
      while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
        j--
      }
      arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
    }
    arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    sort(arr, left, j - 1) // 将左边的无序数组重复上面的操作
    sort(arr, j + 1, right) // 将右边的无序数组重复上面的操作
  }
  const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
  sort(newArr)
  return newArr
}

let arr1 = [2, 6, 5, 4, 1, 7, 8, 3, 9];
console.log("快速排序:", quickSort(arr1));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]