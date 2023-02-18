


// 查找某个数在数组中的下标

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if(nums[mid] === target){
      return mid;
    }
    if(nums[mid] < target){
      left = mid + 1;
    }else{
      right = mid;
    }
  }
  return -1;
}

let nums = [1,2,3,4,5,6,7,8,9];
let target = 6;

console.log(binarySearch(nums, target));
// 5



// 模板分析

// 关键属性
// 1. 查找条件可以在不与元素的两侧进行比较的情况下确定 (或使用它周围的特定元素).
// 2. 不需要后处理, 因为每步中, 你都在检查是否找到了元素, 如果到达末尾, 则知道未找到该元素.



// 区分语法

// 1. 初始条件: left = 0, right = length - 1
// 2. 终点: left > right
// 3. 向左查找: right = mid - 1;
// 4. 向右查找: left = mid + 1;