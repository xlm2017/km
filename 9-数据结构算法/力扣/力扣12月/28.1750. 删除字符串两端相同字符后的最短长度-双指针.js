// 给你一个只包含字符 'a'，'b' 和 'c' 的字符串 s ，你可以执行下面这个操作（5 个步骤）任意次：

// 选择字符串 s 一个 非空 的前缀，这个前缀的所有字符都相同。
// 选择字符串 s 一个 非空 的后缀，这个后缀的所有字符都相同。
// 前缀和后缀在字符串中任意位置都不能有交集。
// 前缀和后缀包含的所有字符都要相同。
// 同时删除前缀和后缀。
// 请你返回对字符串 s 执行上面操作任意次以后（可能 0 次），能得到的 最短长度 。

 

// 示例 1：

// 输入：s = "ca"
// 输出：2
// 解释：你没法删除任何一个字符，所以字符串长度仍然保持不变。
// 示例 2：

// 输入：s = "cabaabac"
// 输出：0
// 解释：最优操作序列为：
// - 选择前缀 "c" 和后缀 "c" 并删除它们，得到 s = "abaaba" 。
// - 选择前缀 "a" 和后缀 "a" 并删除它们，得到 s = "baab" 。
// - 选择前缀 "b" 和后缀 "b" 并删除它们，得到 s = "aa" 。
// - 选择前缀 "a" 和后缀 "a" 并删除它们，得到 s = "" 。
// 示例 3：

// 输入：s = "aabccabba"
// 输出：3
// 解释：最优操作序列为：
// - 选择前缀 "aa" 和后缀 "a" 并删除它们，得到 s = "bccabb" 。
// - 选择前缀 "b" 和后缀 "bb" 并删除它们，得到 s = "cca" 。
 

// 提示：

// 1 <= s.length <= 10^5
// s 只包含字符 'a'，'b' 和 'c' 。

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  if(s.length === 1){
    return 1;
  }
  // 左侧指针
  let left = 0;
  // 右侧指针
  let right = s.length - 1;
  // 两个指针相遇的时候, 说明为0, 停止的时候, 说明不能再删了
  while (left < right) {
    if(s[left] === s[right]) {
      // 两边都尽可能匹配更多的
      while (true) {
        if(left + 1 < right && s[left] === s[left + 1]){
          left++;
        }else{
          break;
        }
      }
      while (true) {
        if(right - 1 > left && s[right] === s[right - 1]){
          right--;
        }else{
          break;
        }
      }
      // console.log("一轮相等后:", left, right);
      left++;
      right--;  
      if(left === right){
        return 1;
      }
    }else{
      // console.log("剩余:", s.slice(left, right));
      return right - left + 1;
    }
  }
  return 0;
};

let s1 = 'cabaabac'
// 0
let s2 = 'cabac'
// 2

let s3 = 'aca'
// 1

let s4 = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbacccabbabccaccbacaaccacacccaccbbbacaabbccbbcbcbcacacccccccbcbbabccaacaabacbbaccccbabbcbccccaccacaccbcbbcbcccabaaaabbbbbbbbbbbbbbb';
// 109

let s5 = 'a'
// 1

console.log(minimumLength(s5));
