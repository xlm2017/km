/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let ans = [];
   for(let i = 0; i < numRows; i++){
    if(i === 0){
        ans.push([1]);
        continue;
    }
    let temp = [];
    let arr = ans[i - 1];
    // console.log("arr:", arr);
    for(let j = 0; j <= arr.length; j++){
      if(j === 0){
          temp.push(arr[j]);
          continue;
      }
      if(j < arr.length){
        temp.push(arr[j - 1] + arr[j])
      }
      if(j === arr.length){
        temp.push(arr[j-1]);
        continue; 
      }
    }
    ans.push(temp); 
   }
   return ans;
};

// 示例 1:

// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 示例 2:

// 输入: numRows = 1
// 输出: [[1]]

console.log(generate(5));


// 官解
var generate2 = function(numRows) {
  const ret = [];

  for (let i = 0; i < numRows; i++) {
      const row = new Array(i + 1).fill(1);
      for (let j = 1; j < row.length - 1; j++) {
          row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
      }
      ret.push(row);
  }
  return ret;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/pascals-triangle/solutions/510638/yang-hui-san-jiao-by-leetcode-solution-lew9/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。