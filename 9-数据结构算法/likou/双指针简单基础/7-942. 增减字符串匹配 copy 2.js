// 由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:

// 如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I' 
// 如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D' 
// 给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个 。

 

// 示例 1：

// 输入：s = "IDID"
// 输出：[0,4,1,3,2]
// 示例 2：

// 输入：s = "III"
// 输出：[0,1,2,3]
// 示例 3：

// 输入：s = "DDI"
// 输出：[3,2,0,1]
 

// 提示：

// 1 <= s.length <= 105
// s 只包含字符 "I" 或 "D"



/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  s =  s + "I";
  let arr = new Array(s.length).fill().map((item, index)=> [index, s[index]]);
  console.log("arr:", arr);
  arr.sort((a,b)=>{
    console.log(a, b);
    // 此 a,b 并不是相邻的两个数, 如果那样, 算法复杂度就是o(n)了, 还不花空间, 就离谱了
    if(a[1] === 'I'){
      return -1;
    }else{
      return 1;
    }  
  })
  let res = arr.map((item)=>item[0]);
  return res;
};


let s = "IDID"
// 输出：[0,4,1,3,2]


console.log(diStringMatch(s));