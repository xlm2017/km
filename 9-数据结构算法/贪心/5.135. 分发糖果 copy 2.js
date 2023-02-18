// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

// 你需要按照以下要求，给这些孩子分发糖果：

// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。

 

// 示例 1：

// 输入：ratings = [1,0,2]
// 输出：5
// 解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
// 示例 2：

// 输入：ratings = [1,2,2]
// 输出：4
// 解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
//      第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
 

// 提示：

// n == ratings.length
// 1 <= n <= 2 * 104
// 0 <= ratings[i] <= 2 * 104


/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let len = ratings.length;
  let arr = new Array(len).fill(0);


  for (let i = 0; i < len; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    } else {
      arr[i] = 1;
    }
  }

  console.log("arr:", arr);
  
  let right = 0, ret = 0;
  for (let i = len - 1; i > -1; i--) {
    if (i < len - 1 && ratings[i] > ratings[i + 1]) {
      right++;
    } else {
      right = 1;
    }
    ret += Math.max(arr[i], right);
  }
  // console.log("arr:", arr);
  return ret; 
};

// let ratings = [1,2,2];
// 4


// let ratings = [1,0,2];
// 5

let ratings = [1,2,87,87,87,2,1];
// 13


 console.log(candy(ratings));