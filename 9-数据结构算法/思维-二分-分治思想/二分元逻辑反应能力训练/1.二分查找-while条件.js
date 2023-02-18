// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


// 示例 1:

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
// 示例 2:

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1
 

// 提示：

// 你可以假设 nums 中的所有元素是不重复的。
// n 将在 [1, 10000]之间。
// nums 的每个元素都将在 [-9999, 9999]之间。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // nums.sort();
  // nums.sort((a,b)=>a-b);
  // console.log(nums);
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // while(left <= right) 的终止条件是 left == right + 1，写成区间的形式就是 [right + 1, right]，
    // 或者带个具体的数字进去 [3, 2]，可见这时候区间为空，因为没有数字既大于等于 3 又小于等于 2 的吧。
    // 所以这时候 while 循环终止是正确的，直接返回 -1 即可。


    // 死循环了
    // let middle = Math.floor((left + right) / 2) + 1;

    // 
    let middle = Math.floor((left + right) / 2);

    // 防止 left + right 溢出
    // let middle = Math.floor(left + (right - left)/2);

    if(target === nums[middle]){
      return middle;
    }
    if(target > nums[middle]){
      left = middle + 1;
    }else{
      right = middle - 1;
    }
  }
  return -1;
};

let nums = [-1,0,3,5,9,12], target = 9;

console.log(search(nums, target));
