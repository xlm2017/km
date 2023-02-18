// 给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。

// 「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。

 

// 示例 1：

// 输入：arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
// 输出：2
// 解释：
// 对于 arr1[0]=4 我们有：
// |4-10|=6 > d=2 
// |4-9|=5 > d=2 
// |4-1|=3 > d=2 
// |4-8|=4 > d=2 
// 所以 arr1[0]=4 符合距离要求

// 对于 arr1[1]=5 我们有：
// |5-10|=5 > d=2 
// |5-9|=4 > d=2 
// |5-1|=4 > d=2 
// |5-8|=3 > d=2
// 所以 arr1[1]=5 也符合距离要求

// 对于 arr1[2]=8 我们有：
// |8-10|=2 <= d=2
// |8-9|=1 <= d=2
// |8-1|=7 > d=2
// |8-8|=0 <= d=2
// 存在距离小于等于 2 的情况，不符合距离要求 

// 故而只有 arr1[0]=4 和 arr1[1]=5 两个符合距离要求，距离值为 2
// 示例 2：

// 输入：arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
// 输出：2
// 示例 3：

// 输入：arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
// 输出：1



/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  
  if(d === 0){
    return arr1.length;
  }

  arr1.sort((a, b)=>a-b)
  arr2.sort((a, b)=>a-b)

  let ans = 0;
  for (let i = 0; i < arr1.length; i++) {
    if(arr2.length === 1){
      if(Math.abs(arr1[i] - arr2[0]) > d){
        ans++;
      }
      continue;
    }
    let left = 0;
    let right = arr2.length - 1;
    // 二分法, 计算出最接近的数
    while (left < right) {
      let mid = left + Math.floor((right - left)/2);
      if(arr2[mid] === arr1[i]){
        break;
      }
      if(arr2[mid] > arr1[i]){
        right = mid - 1;
      }else{
        left = mid + 1;
      }
    }

    let min = null;
    if(left === arr2.length - 1){
      min = Math.min(Math.abs(arr1[i] - arr2[left-1]), Math.abs(arr1[i] - arr2[left]));
    }else{
      min = Math.min(Math.abs(arr1[i] - arr2[left]), Math.abs(arr1[i] - arr2[left+1]));
    }

    console.log("left-right:", left, right, arr2[left], min);
    if(min > d){
      ans++;
      console.log(arr1[i]);
    }
  }

  // 4   5   8
  // 1   8   9   10

  return ans;
};


// let arr1 = [4,5,8];
// let arr2 = [10,9,1,8];
// 2

// let arr1 = [1,2,3,4];
// let arr2 = [-4,-3,6,10,20,30];
// let d = 3;
// 2

// let arr1 = [2,1,100,3];
// let arr2 = [-5,-2,10,-3,7];
// let d = 6;
// 1

let arr1 = [-3,10,2,8,0,10];
let arr2 = [-9,-1,-4,-9,-8];
let d = 9;
// 2

console.log(findTheDistanceValue(arr1, arr2, d));