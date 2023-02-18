// 给你一个正整数数组 price ，其中 price[i] 表示第 i 类糖果的价格，另给你一个正整数 k 。

// 商店组合 k 类 不同 糖果打包成礼盒出售。礼盒的 甜蜜度 是礼盒中任意两种糖果 价格 绝对差的最小值。

// 返回礼盒的 最大 甜蜜度。



// 示例 1：

// 输入：price = [13,5,1,8,21,2], k = 3
// 输出：8
// 解释：选出价格分别为 [13,5,21] 的三类糖果。
// 礼盒的甜蜜度为 min(|13 - 5|, |13 - 21|, |5 - 21|) = min(8, 8, 16) = 8 。
// 可以证明能够取得的最大甜蜜度就是 8 。
// 示例 2：

// 输入：price = [1,3,1], k = 2
// 输出：2
// 解释：选出价格分别为 [1,3] 的两类糖果。 
// 礼盒的甜蜜度为 min(|1 - 3|) = min(2) = 2 。
// 可以证明能够取得的最大甜蜜度就是 2 。
// 示例 3：

// 输入：price = [7,7,7,7], k = 2
// 输出：0
// 解释：从现有的糖果中任选两类糖果，甜蜜度都会是 0 。


// 提示：

// 1 <= price.length <= 105
// 1 <= price[i] <= 109
// 2 <= k <= price.length


/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
  const n = price.length;
  price.sort((a, b) => a - b);
  let dl = 0;
  let dr = Math.floor((price[n - 1] - price[0]) / (k - 1)) + 1;
  console.log("price:", price, dr);

  function check (d) { // 检查甜蜜度是否可取
    let cnt = 1, x0 = price[0];
    for (let x of price) {
      if (x >= x0 + d) {
        cnt++;
        x0 = x;
      }
    }
    return cnt >= k;
  }

  let ans = 0;
  while (dl <= dr) {
    let m = dl + Math.floor((dr - dl) / 2);
    if (check(m)) {
      ans = Math.max(ans, m);
      dl = m + 1;
    } else {
      dr = m - 1;
    }
  }
  return ans;

  // 作者：梦客
  // 链接：https://leetcode.cn/problems/maximum-tastiness-of-candy-basket/solutions/2032968/js-by-lianchang16-w1ye/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};

let price = [13, 5, 1, 8, 21, 2], k = 3;

console.log(maximumTastiness(price, k));