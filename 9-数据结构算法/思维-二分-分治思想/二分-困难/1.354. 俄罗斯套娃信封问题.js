// 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。

// 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

// 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

// 注意：不允许旋转信封。

 
// 示例 1：

// 输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出：3
// 解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
// 示例 2：

// 输入：envelopes = [[1,1],[1,1],[1,1]]
// 输出：1
 

// 提示：

// 1 <= envelopes.length <= 105
// envelopes[i].length == 2
// 1 <= wi, hi <= 105

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort((a,b)=>{
    if(a[0] === b[0]){
      return b[1] - a[1];
    }else{
      return a[0] - b[0];
    }
  })
  
  let arr = envelopes.map((item)=>{
    return item[1]
  })
  console.log(envelopes, arr);

  // 求出数组arr的最长递增子序列即可
  let tail = new Array(arr.length);
  tail = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > tail[tail.length - 1]){
      tail.push(arr[i]);
    }else{
      let left = 0;
      let right = tail[tail.length - 1];
      while (left < right) {
        let mid = (left + right) >> 1;
        if(tail[mid] < arr[i]){
          left = mid + 1;
        }else{
          right = mid;
        }
      }
      tail[left] = arr[i];
    }    
  }
  return tail.length;
};


let envelopes = [[5,4],[6,7],[6,4],[2,3]];

console.log(maxEnvelopes(envelopes));