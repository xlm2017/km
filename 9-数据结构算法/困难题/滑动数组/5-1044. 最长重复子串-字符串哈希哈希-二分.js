// 给你一个字符串 s ，考虑其所有 重复子串 ：即 s 的（连续）子串，在 s 中出现 2 次或更多次。这些出现之间可能存在重叠。

// 返回 任意一个 可能具有最长长度的重复子串。如果 s 不含重复子串，那么答案为 "" 。



// 示例 1：

// 输入：s = "banana"
// 输出："ana"
// 示例 2：

// 输入：s = "abcd"
// 输出：""


// 提示：

// 2 <= s.length <= 3 * 104
// s 由小写英文字母组成

// 宫水三叶题解

https://leetcode.cn/problems/longest-duplicate-substring/solutions/1172474/gong-shui-san-xie-zi-fu-chuan-ha-xi-ying-hae9/


// 如果最长重复字串的长度是3，那么len<=3时都会存在重复字串，len=4时就不会了


var longestDupSubstring = function (s) {
  let len = 0, end;
  let l = 1, r = s.length - 1;
  while (l <= r) {
    const mid = l + r >> 1;
    const res = check(s, mid);
    if (res != -1) {
      len = mid;
      end = res;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return len == 0 ? "" : s.substring(end - len + 1, end + 1);
};

function check (s, len) {
  const base = 26;
  const mod = 131_0000_0007;
  const set = new Set();
  let sum = getCode(s[0]);
  let high = 1;
  for (let i = 1; i < len; i++) {
    sum = (base * sum + getCode(s[i])) % mod;
    high = high * base % mod;
  }
  set.add(sum);
  for (let i = len; i < s.length; i++) {
    sum = (base * (sum - high * getCode(s[i - len])) + getCode(s[i])) % mod;
    if (sum < 0) {
      sum += mod;
    }
    if (set.has(sum)) {
      return i;
    }
    set.add(sum);
  }
  return -1;
}

function getCode (a) {
  return a.charCodeAt() - "a".charCodeAt();
}

// let s = "banana";
// "ana"

// let s = "abcabc";

// let s = "abcd";
// ""

let s = "nnpxouomcofdjuujloanjimymadkuepightrfodmauhrsy";
// ma


console.log(longestDupSubstring(s));

