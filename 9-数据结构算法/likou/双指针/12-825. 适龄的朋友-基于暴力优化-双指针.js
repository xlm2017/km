// 在社交媒体网站上有 n 个用户。给你一个整数数组 ages ，其中 ages[i] 是第 i 个用户的年龄。

// 如果下述任意一个条件为真，那么用户 x 将不会向用户 y（x != y）发送好友请求：

// ages[y] <= 0.5 * ages[x] + 7
// ages[y] > ages[x]
// ages[y] > 100 && ages[x] < 100
// 否则，x 将会向 y 发送一条好友请求。

// 注意，如果 x 向 y 发送一条好友请求，y 不必也向 x 发送一条好友请求。另外，用户不会向自己发送好友请求。

// 返回在该社交媒体网站上产生的好友请求总数。



// 示例 1：

// 输入：ages = [16,16]
// 输出：2
// 解释：2 人互发好友请求。
// 示例 2：

// 输入：ages = [16,17,18]
// 输出：2
// 解释：产生的好友请求为 17 -> 16 ，18 -> 17 。
// 示例 3：

// 输入：ages = [20,30,100,110,120]
// 输出：3
// 解释：产生的好友请求为 110 -> 100 ，120 -> 110 ，120 -> 100 。


// 提示：

// n == ages.length
// 1 <= n <= 2 * 104
// 1 <= ages[i] <= 120



/**
 * @param {number[]} ages
 * @return {number}
 */

// 当 ages[x] 增加时，
// 上述区间的左右边界均单调递增，
// 因此如果我们将数组 ages 进行升序排序，
// 那么就可以在遍历 ages[x]的同时，
// 使用两个指针 left 和 right
// 维护满足要求的 ages[y] 的左右边界。
// 当 xxx 向后移动一个位置时

// 同向双指针, 同样基于有序数组
// 构造if while条件, 使范围呈现出某一特征的单调性的变化, 这里是下标值的非单调递减

// 构造出两个指针某一方向随着迭代表现出的单调性

var numFriendRequests = function (ages) {
  // 
  ages.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let ans = 0;
  for (const age of ages) {
    if (age < 15) {
      continue;
    }

    // age可发送请求的左端点
    while (ages[left] <= 0.5 * age + 7) {
      left++;
    }

    // age可发送请求的右端点
    // while (right + 1 < ages.length && ages[right + 1] <= age) {
    //   right++;
    // }
    while (right < ages.length && ages[right] <= age) {
      right++;
    }
    ans += right - left - 1;
  }
  return ans;
};



let ages = [20, 30, 100, 110, 120]
// 输出：3


console.log(numFriendRequests(ages));