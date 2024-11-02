// 给你一个只包含小写英文字母的字符串 s 。

// 每一次 操作 ，你可以选择 s 中两个 相邻 的字符，并将它们交换。

// 请你返回将 s 变成回文串的 最少操作次数 。

// 注意 ，输入数据会确保 s 一定能变成一个回文串。



// 示例 1：

// 输入：s = "aabb"
// 输出：2
// 解释：
// 我们可以将 s 变成 2 个回文串，"abba" 和 "baab" 。
// - 我们可以通过 2 次操作得到 "abba" ："aabb" -> "abab" -> "abba" 。
// - 我们可以通过 2 次操作得到 "baab" ："aabb" -> "abab" -> "baab" 。
// 因此，得到回文串的最少总操作次数为 2 。
// 示例 2：

// 输入：s = "letelt"
// 输出：2
// 解释：
// 通过 2 次操作从 s 能得到回文串 "lettel" 。
// 其中一种方法是："letelt" -> "letetl" -> "lettel" 。
// 其他回文串比方说 "tleelt" 也可以通过 2 次操作得到。
// 可以证明少于 2 次操作，无法得到回文串。


// 提示：

// 1 <= s.length <= 2000
// s 只包含小写英文字母。
// s 可以通过有限次操作得到一个回文串。




/**
 * @param {string} s
 * @return {number}
 */
var minMovesToMakePalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  s = s.split("");
  let ans = 0;

  while (l < r) {
    if (s[l] !== s[r]) {
      // 从r位置向左寻找 s[l] 并且 l !== r  (同时防止s[l]是唯一的值)
      let k = r - 1;
      let cnt = 1;

      // 这里有逻辑缺陷, 例如, r向前一位后, 已经和另一边对称了, 可以跳过这个移动下一个
      while (k !== l && s[k] !== s[l]) {
        cnt++;
        k--;
      }
      // 说明这是唯一的一个数, 这个数应该移动到中间去
      if (k === l) {
        let mid = Math.floor(s.length / 2);
        console.log("l:", s[l], s[mid], s, l, k);
        ans += mid - l;

        // 交换字符, 问题很大
        // let temp = s[mid];
        // s[mid] = s[l];
        // s[l] = temp;

        let temp = s[l];
        s.splice(l, 1);
        s.splice(mid, 0, temp); 
        continue;
      }
        // 交换字符
        // let temp = s[k];
        // s[k] = s[r];
        // s[r] = temp;

        let temp = s[k];
        s.splice(k, 1);
        s.splice(r, 0, temp); 

        // console.log("交换后的结果:", s, cnt);
        ans += cnt;
    }
    l++;
    r--;
  }
  return ans;
};



let s = "aabb"
// 输出：2


// let s2 = "letelt"
// 输出：2

// let s2 = "aabbc"

let s2 = "abcdeabcd"

// console.log(minMovesToMakePalindrome(s));
console.log(minMovesToMakePalindrome(s2));