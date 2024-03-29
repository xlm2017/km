// 给定一个二进制数组 nums 和一个整数 k 。

// k位翻转 就是从 nums 中选择一个长度为 k 的 子数组 ，
// 同时把子数组中的每一个 0 都改成 1 ，把子数组中的每一个 1 都改成 0 。

// 返回数组中不存在 0 所需的最小 k位翻转 次数。如果不可能，则返回 -1 。

// 子数组 是数组的 连续 部分。



// 示例 1：

// 输入：nums = [0,1,0], K = 1
// 输出：2
// 解释：先翻转 A[0]，然后翻转 A[2]。
// 示例 2：

// 输入：nums = [1,1,0], K = 2
// 输出：-1
// 解释：无论我们怎样翻转大小为 2 的子数组，我们都不能使数组变为 [1,1,1]。
// 示例 3：

// 输入：nums = [0,0,0,1,0,1,1,0], K = 3
// 输出：3
// 解释：
// 翻转 A[0],A[1],A[2]: A变成 [1,1,1,1,0,1,1,0]
// 翻转 A[4],A[5],A[6]: A变成 [1,1,1,1,1,0,0,0]
// 翻转 A[5],A[6],A[7]: A变成 [1,1,1,1,1,1,1,1]


// 提示：

// 1 <= nums.length <= 105
// 1 <= k <= nums.length

// 由于我们总是对连续的一段进行「相同」的操作，同时只有「奇数」次数的翻转才会真正改变当前位置上的值。

// 自然而然，我们会想到使用数组 arr 来记录每一位的翻转次数。

// 同时我们又不希望是通过「遍历记 arr 的 k 位进行 +1」来完成统计。

// 因此可以使用差分数组来进行优化：当需要对某一段 [l,r] 进行 +1 的时候，只需要 arr[l]++ 和 arr[r + 1]-- 即可。


var minKBitFlips = function (A, K) {
  // 区间统一增加 === 差分
  // 解题, 抄了

  // 创建一个差分数组
  let def = new Array(A.length).fill(0)
  // ans 代表最少翻转次数
  // rev 代表当前数值
  // 通过 rev + A[i]
  let rev = 0, ans = 0;
  for (let i = 0; i < A.length; i++) {
    // def[i] 代表被翻转的次数
    // rev 当前数值 = 上个数值+差分数组
    // 为啥可以这么写？
    // 因为目标为全1，相当于差分数组全0
    rev += def[i];
    // 判断当前值是否为需要翻转？
    if ((A[i] + rev) % 2 === 0) {
      // 是否超出长度？ 超出说明无法翻转成功
      if ((i + K) > A.length) {
        return -1;
      }
      // 最小翻转次数+1
      ++ans;
      // 由于当前数被翻转，从0到1 所以当前数值需要+1
      ++rev;
      // 由于当前数被翻转（所有[i,i+k] 的def +1) 又由于差分数组的原因：只影响开始和最后一个数值。 
      // 因为：def[i] +1
      // 所以：def[i+k] 应该-1
      --def[i + K];
    }
  }
  return ans;
};


let nums = [0, 0, 0, 1, 0, 1, 1, 0], k = 3;
// 3

console.log(minKBitFlips(nums, k));




 //差分
 var minKBitFlips2 = function(nums, k) {
  let count = 0,reSum = 0
  for(let i=0;i<nums.length;i++){
      if(i-k >=0 && nums[i-k]<0) reSum--
      if(((reSum&1)^nums[i])==0){
          if(i+k > nums.length) return -1;
          nums[i]=~nums[i];//使用取反标记已被翻转，还原 if(A[i]<0) A[i] = ~A[i];
          reSum++;
          count++;
      }
  }
  return count
};