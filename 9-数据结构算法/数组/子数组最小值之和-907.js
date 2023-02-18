

// 示例 1：

// 输入：arr = [3,1,2,4]
// 输出：17
// 解释：
// 子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 
// 最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
// 示例 2：

// 输入：arr = [11,81,94,43,3]
// 输出：444


// 提示：

// 1 <= arr.length <= 3 * 104
// 1 <= arr[i] <= 3 * 104


/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let sum = 0;
  let array = [];
  // 暴力解法, 双层for循环计算出所有的子数组, 然后再算出子数组的最小值
  for (let i = 0; i < arr.length; i++) {
    // const element1 = arr[i];

    let curMin = arr[i];
    for (let j = i; j < arr.length - i; j++) {
      // const element2 = arr[j];
      // array.push(element1);
      // i = 0; j < 4
      if (curMin <= arr[j]) {
        // array.push(curMin);
        // sum += curMin;
      } else {
        curMin = arr[j];
        // array.push(arr[j]);
        // sum += curMin;
      }
      console.log("J;", j, arr[j])
      console.log("最小值:", curMin)
      sum += curMin;
    }
  }

  return sum;
};



var submit = function (arr) {
  let sum = 0;
  // 双循环 
  for (let i = 0; i < arr.length; i++) {
    let curMin = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < curMin) {
        curMin = arr[j];
      }
      sum += curMin;
    }
    console.log("下一轮开始i:", i, '\n');
  }
  sum = sum % (1000000000 + 7);
  return sum;
};

let arr = [3, 1, 2, 4];
console.log(sumSubarrayMins(arr));

// js支持的整数的有效范围是，-2的53次方至2的53次方

// 也就是-9007199254740992~9007199254740992。


// 输出
// 2508796223
// 预期结果
// 508796209

// 508796223 + 7 = 508796230
// 返回答案模 10^9 + 7 。



// 滑动窗口做法
function submit2 (arr) {
  for (let i = 0; i < arr.length; i++) {

  }
}




// 输入：arr = [11,81,94,43,3]
// 输出：444

var submit3 = function (arr) {
  let ans = 0;
  let len = arr.length;
  // 栈中存放下标
  let stack = [len];
  let every = 0;
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      let del = stack.pop();
      every -= arr[del] * (stack[stack.length - 1] - del);
    }
    every += arr[i] * (stack[stack.length - 1] - i);
    stack.push(i);
    //console.log(stack,every);
    ans = (ans + every) % 1000000007;
  }
  return ans;
};

// 作者：mindhacker
// 链接：https://leetcode.cn/problems/sum-of-subarray-minimums/solutions/1931486/by-c2area-xnq8/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。