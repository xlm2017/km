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
        price.sort()
        #左开右开
        left=0
        right=price[-1]+1   #这里灵神给出了时间复杂度更低的上界(price[-1]-price[0])//(k-1)+1
        while left+1<right:
            mid=(left+right)>>1
            count=1      #肯定至少能取一类糖果
            p=price[0]      #从最小开始，后面才有最多可能
            for i in price:
                if i>=p+mid:    #寻找p后面的第一个元素和p之间满足要求价格差
                    count+=1    #找到计数
                    p=i 
            if count<k:     #如果总共找到的满足甜蜜度的类数小于K证明猜测的mid大了
                right=mid
            else:
                left=mid
        return left

作者：Sandersonm
链接：https://leetcode.cn/problems/maximum-tastiness-of-candy-basket/solutions/2032667/pytho-by-upbeat-sandersonm5p-t08p/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。