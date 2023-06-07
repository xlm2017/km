// 给你一个数组 nums ，数组中只包含非负整数。定义 rev(x) 的值为将整数 x 各个数字位反转得到的结果。比方说 rev(123) = 321 ， rev(120) = 21 。我们称满足下面条件的下标对 (i, j) 是 好的 ：

// 0 <= i < j < nums.length
// nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
// 请你返回好下标对的数目。由于结果可能会很大，请将结果对 109 + 7 取余 后返回。

 

// 示例 1：

// 输入：nums = [42,11,1,97]
// 输出：2
// 解释：两个坐标对为：
//  - (0,3)：42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121 。
//  - (1,2)：11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12 。
// 示例 2：

// 输入：nums = [13,10,35,24,76]
// 输出：4
 

// 提示：

// 1 <= nums.length <= 10^5
// 0 <= nums[i] <= 10^9


/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
  
  let mod = 10 ** 9 + 7;
  let arr = nums.map((item)=>{
    let str = (item + '').split("").reverse().join("");
    return str * 1;
  })
  // console.log(nums, arr);
  let map = new Map();
  let ok = 0;
  let notOk = [];
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === arr[i]){
      ok++;
    }else{
      map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);   
      notOk.push(nums[i]);
    }
  }
  
  let ans = 0;
  console.log(map);

  // ans = ans + ok > 1 ?  
  if(ok > 1){
    function math(n){ // 递归函数
      if(n < 0){
          return -1
      }else if(n === 0 || n === 1){
          return 1
      }else{
          return n * math(n-1)
      }
    }
    ans = ans + math(ok)/math(3)/2;
  }

  console.log(ok, ans, notOk);

  let arr2 = notOk.map((item)=>{
    let str = (item + '').split("").reverse().join("");
    return str * 1;
  })
  for (let i = 0; i < notOk.length; i++) {
    for (let j = i + 1; j < notOk.length; j++) {
      if(notOk[i] + arr2[j] === notOk[j] + arr2[i]){
        console.log("合格的:", notOk[i], notOk[j]);
        ans++
      }      
    }    
  }

  
  return ans % mod;
};

// let nums = [42,11,1,97];

let nums = [22,34,42,11,2,42,11,1,97];
// 13
console.log(countNicePairs(nums));



// let a = '012';
// console.log(a * 1);
// 12



function math(n){ // 递归函数
  if(n < 0){
      return -1
  }else if(n === 0 || n === 1){
      return 1
  }else{
      return n * math(n-1)
  }
}
// console.log(math(5)/math(3)/ 2);