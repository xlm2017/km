// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

// 示例 1：

// 输入：nums = [3,2,3]
// 输出：3
// 示例 2：

// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2
 

// 提示：
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 摩尔投票法
  // let major = nums[0];
  // let count = 1;
  // for (let i = 1; i < nums.length; i++) {
  //   if(count === 0){
  //     major = nums[i];
  //     count = 1;
  //     console.log("major:", major, count);
  //     continue;
  //   }    
  //   if(major === nums[i]){
  //     count++;
  //   }else{
  //     count--;
  //   }
  // }
  // return major;


  // 优化性能
  // 摩尔投票法
  let major = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if(major === nums[i]){
      count++;
    }else{
      count--;
      if(count === 0){
        major = nums[i];
        count = 1;
      }   
    }
    if(count > nums.length){
        return major;
    }
  }
  return major;
};


// let nums = [2,2,1,1,1,2,2];


let nums = [10,9,9,9,10];
// 9

console.log(majorityElement(nums));



// 为了理解一个代码量很短的算法，先通过更复杂的数据结构和空间复杂度了解会更为具体，然后去掉冗余就得到了简短的算法。

// 重点：首先请考虑最基本的摩尔投票问题，找出一组数字序列中出现次数大于总数1/2的数字（并且假设这个数字一定存在）。
// 显然这个数字只可能有一个。摩尔投票算法是基于这个事实：每次从序列里选择两个不相同的数字删除掉（或称为“抵消”），
// 最后剩下一个数字或几个相同的数字，就是出现次数大于总数一半的那个。
// 请首先认同这个事实，这里不证明了~如果你已经了解摩尔投票法的代码，只是无法理解其中变量的实际意义是什么，你可以根据以上这个事实自己再理一遍。
// 所以我们的目标就是：删除，删除，删除。删到不能删除为止。实现的算法从第一个数开始扫描整个数组，
// 有两个变量(参考第一答题者的变量名)major和count。
// 其实这两个变量想表达的是一个“隐形的数组”array，array存储的是“当前暂时无法删除的数字”，
// 我们先不要管major和count，只考虑这个array，同时再维护一个结果数组result，result里面存储的是每次删除一对元素之后的当前结果。为了方便理解举一个示例

// 作者：喝七喜
// 链接：https://www.zhihu.com/question/49973163/answer/235921864
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。