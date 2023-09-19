// 中位数是有序序列最中间的那个数。如果序列的长度是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。

// 例如：

// [2,3,4]，中位数是 3
// [2,3]，中位数是 (2 + 3) / 2 = 2.5
// 给你一个数组 nums，有一个长度为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。



// 示例：

// 给出 nums = [1,3,-1,-3,5,3,6,7]，以及 k = 3。

// 窗口位置                      中位数
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       1
//  1 [3  -1  -3] 5  3  6  7      -1
//  1  3 [-1  -3  5] 3  6  7      -1
//  1  3  -1 [-3  5  3] 6  7       3
//  1  3  -1  -3 [5  3  6] 7       5
//  1  3  -1  -3  5 [3  6  7]      6
//  因此，返回该滑动窗口的中位数数组 [1,-1,-1,3,5,6]。



// 提示：

// 你可以假设 k 始终有效，即：k 始终小于等于输入的非空数组的元素个数。
// 与真实值误差在 10 ^ -5 以内的答案将被视作正确答案。


var medianSlidingWindow = function (nums, k) {
  // 二分优化插入和删除速度
  let res = [];
  let l = 0;
  let r = 0;
  let array = [];
  let index1 = Math.floor(k / 2);
  let index2 = Math.floor(k / 2) - 1
  let isOdd = k % 2;
  for (; r < nums.length; r++) {
    
    // array.push(nums[r]);
    let index = searchInsert(array, nums[r]);
    array.splice(index, 0, nums[r]);

    if (r - l + 1 === k) {
      
      // let arr = [...array];
      // arr.sort((a, b) => a - b);
      // if (isOdd) {
      //   res.push(arr[index1])
      //   // 奇数
      // } else {
      //   // 偶数
      //   let n = arr[index1];
      //   let m = arr[index2];
      //   res.push((n / 2 + m / 2).toFixed(5));
      // }

      if (isOdd) {
        res.push(array[index1])
      }else{
        let n = array[index1];
        let m = array[index2];
        res.push((n / 2 + m / 2).toFixed(5));
      }


      // array.shift();
      let index = search(array, nums[l]);
      array.splice(index, 1);
      l++
    }
  }
  return res;
};

// 返回插入下标
var searchInsert = function (nums, target) {
  const n = nums.length;
  let left = 0, right = n - 1, ans = n;
  while (left <= right) {
    let mid = ((right - left) >> 1) + left;
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

// 返回目标的下标
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
      const mid = Math.floor((right - left) / 2) + left;
      const num = nums[mid];
      if (num === target) {
          return mid;
      } else if (num > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return -1;
};


let nums = [1,3,-1,-3,5,3,6,7], k = 3;
// [1,-1,-1,3,5,6]

// let nums = [1, 4, 2, 3], k = 4;
// 3.5

console.log(medianSlidingWindow(nums, k));