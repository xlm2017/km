// 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

// 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

// 题目数据保证答案符合 32 位带符号整数范围。

 

// 示例 1：

// 输入：s = "rabbbit", t = "rabbit"
// 输出：3
// 解释：
// 如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
// rabbbit
// rabbbit
// rabbbit
// 示例 2：

// 输入：s = "babgbag", t = "bag"
// 输出：5
// 解释：
// 如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag
 

// 提示：

// 0 <= s.length, t.length <= 1000
// s 和 t 由英文字母组成


var numDistinct = function (s, t) {
  if(t.length() > s.length()) return 0; // s长度小于t时间直接返回0
        int ns = s.length(), nt = t.length();
        int[] pre = new int[nt + 1], cur = new int[nt + 1];
        char[] chss = s.toCharArray(), chst = t.toCharArray();
        pre[0] = 1;
        cur[0] = 1; // 当t为空串时，此行是必须的
        for(int i = 1; i <= ns; i++){
            for(int j = 1; j <= nt; j++){
                if(chss[i - 1] == chst[j - 1]) cur[j] = pre[j - 1] + pre[j];
                else cur[j] = pre[j];
            }
            pre = Arrays.copyOf(cur, nt + 1); // for(int k = 0; k <= nt; k++) pre[k] = cur[k];
        }
        return cur[nt];
};




let s = "babgbag", t = "bag";
// 5

console.log(numDistinct(s, t));