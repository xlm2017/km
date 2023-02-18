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
  
};

let price = [13, 5, 1, 8, 21, 2], k = 3;

console.log(maximumTastiness(price, k));



class Solution:
def maximumTastiness(self, price: List[int], k: int) -> int:
    path=[]
    math=[]
    mins=[]
    def bs(index=0):
        if len(path)==k:
            #这里不能直接对math排序，会影响回溯的pop，其实可不用排序，不过比赛的时候写乱了
            temp=math[:]
            temp.sort()
            mins.append(temp[0])
            return
        for i in range(index,len(price)):
            count=0
            if index!=0:
                for j in path:
                    count+=1
                    math.append(abs(j-price[i]))
            path.append(price[i])
            #递归
            bs(i+1) 
            #回溯
            for _ in range(count):
                math.pop()
            if index==0:
                math.clear()
            path.pop()
    bs()
    mins.sort()
    return mins[-1]

作者：Sandersonm
链接：https://leetcode.cn/problems/maximum-tastiness-of-candy-basket/solutions/2032667/pytho-by-upbeat-sandersonm5p-t08p/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。