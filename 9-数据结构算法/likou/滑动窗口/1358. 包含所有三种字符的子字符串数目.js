

// 给你一个字符串 s ，它只包含三种字符 a, b 和 c 。

// 请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。

 

// 示例 1：

// 输入：s = "abcabc"
// 输出：10
// 解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。
// 示例 2：

// 输入：s = "aaacb"
// 输出：3
// 解释：包含 a，b 和 c 各至少一次的子字符串为 "aaacb", "aacb" 和 "acb" 。
// 示例 3：

// 输入：s = "abc"
// 输出：1
 

// 提示：

// 3 <= s.length <= 5 x 10^4
// s 只包含字符 a，b 和 c 。

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {

   let cnt = 0;
   let map = new Map();
   let len = s.length;
   let l = 0, r = 0;  
   while (r < s.length) {
    map.set(s[r], (map.get(s[r]) || 0)+1)
    while (map.size === 3) {
       // 以当前l为开头的符合条件的子串个数 
       cnt += len - r; 
       if(map.get(s[l]) === 1){
        map.delete(s[l])
       }else{
        map.set(s[l], map.get(s[l]) - 1)
       }
       l++;
    }
    r++;
   }
   return cnt;
};

// let s = "abcabc";
// 10

let s = "aaacb";
// 3

console.log(numberOfSubstrings(s));






/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings2 = function(s) {
   const count = [0, 0, 0];
   const a = 'a'.charCodeAt();
   let [l, r, ans] = [0, 0, 0];
 
   while (r < s.length) {
     count[s.charCodeAt(r++) - a]++;
 
     while (count[0] > 0 && count[1] > 0 && count[2] > 0)
       --count[s.charCodeAt(l++) - a];
      
     ans += l;
   }
 
   return ans;
 };