

// 最大值最小，最小值最大；可以直接看成二分的代名词



// 二分查找并非只用来查找某个成员，它也可以用来查找解，当解的数量是唯一且有限制的时候

// 比如本题：贪心行不通的情况下可以从答案反向思考。

// 假设每个袋子里有x个球，要把每个袋子分为几个不超过y个球的袋子，则需要(x-1)/y向下取整次操作。

// 比如一个袋子101个球，最多100个一袋，则需要分割一次（注意本身就有一个袋子了）。

// 所以二分查找解，代入检查，使得满足maxOperations的情况下y尽可能小就行了。

// 作者：GELEI
// 链接：https://leetcode.cn/problems/minimum-limit-of-balls-in-a-bag/solutions/2026544/by-gelei-k-o5q2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


var minimumSize = function(nums, maxOperations) {
  let left = 1, right = Math.max(...nums);
  let ans = 0;
  while (left <= right) {
      // 二分值y 
      const y = Math.floor((left + right) / 2);
      console.log("y:", y, left, right);
      let ops = 0;
      for (const x of nums) {
          console.log("x:", x, Math.floor((x - 1) / y));
          ops += Math.floor((x - 1) / y);
          console.log("累计操作次数:", ops, nums);
      }

      // 调整二分边界
      if (ops <= maxOperations) {
          ans = y;
          right = y - 1;
          console.log("left-:", left);
          console.log("right:", right);
        } else {
          left = y + 1;
          console.log("left:", left);
          console.log("right--:", right);
      }

      console.log("\n");
  }
  return ans;
};



let nums = [7, 17];
let opr = 4;

// 7   9   8
// 7   9   4 4
// 7   5 4 4 4
// 4 3 5 4 4 4  

console.log(minimumSize(nums, opr));