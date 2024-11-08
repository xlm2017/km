// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

 

// 示例 1：

// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
// 示例 2：

// 输入：s = ["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]
 

// 提示：

// 1 <= s.length <= 105
// s[i] 都是 ASCII 码表中的可打印字符



/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  // let mid = s.length % 2 ? Math.floor(s.length / 2) : Math.floor(s.length / 2) - 1; 
  // let temp = null;
  // for(let i = 0, j = s.length - 1 ; i <= mid; i++, j--){
  //   temp = s[i];
  //   s[i] = s[j];
  //   s[j] = temp;
  // }
  // return s;

  let l = -1, r = s.length;
  while(++l < --r) [s[l], s[r]] = [s[r], s[l]];
};