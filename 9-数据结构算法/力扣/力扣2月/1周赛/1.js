// 示例 1：

// 输入：gifts = [25,64,9,4,100], k = 4
// 输出：29
// 解释： 
// 按下述方式取走礼物：
// - 在第一秒，选中最后一堆，剩下 10 个礼物。
// - 接着第二秒选中第二堆礼物，剩下 8 个礼物。
// - 然后选中第一堆礼物，剩下 5 个礼物。
// - 最后，再次选中最后一堆礼物，剩下 3 个礼物。
// 最后剩下的礼物数量分别是 [5,8,9,4,3] ，所以，剩下礼物的总数量是 29 。
// 示例 2：

// 输入：gifts = [1,1,1,1], k = 4
// 输出：4
// 解释：
// 在本例中，不管选中哪一堆礼物，都必须剩下 1 个礼物。 
// 也就是说，你无法获取任一堆中的礼物。 
// 所以，剩下礼物的总数量是 4 。
 

// 提示：

// 1 <= gifts.length <= 103
// 1 <= gifts[i] <= 109
// 1 <= k <= 103


/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  while(k > 0){
    k--;
    let max = Math.max(...gifts);
    let index = gifts.indexOf(max);
    gifts[index] = Math.floor(Math.sqrt(max));
  }
  let sum = 0;
  for (let i = 0; i < gifts.length; i++) {
    sum += gifts[i];
  }
  return sum;
};


let gifts = [25,64,9,4,100], k = 4;

console.log(pickGifts(gifts, 4));