// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

// 换句话说，s1 的排列之一是 s2 的 子串 。



// 示例 1：

// 输入：s1 = "ab" s2 = "eidbaooo"
// 输出：true
// 解释：s2 包含 s1 的排列之一 ("ba").
// 示例 2：

// 输入：s1= "ab" s2 = "eidboaoo"
// 输出：false


// 提示：

// 1 <= s1.length, s2.length <= 104
// s1 和 s2 仅包含小写字母


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

  // 使用数组记录每个字符出现的次数
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    arr[char.charCodeAt() - 'a'.charCodeAt()]++;
  }
  // console.log("arr:", arr);
  // [
  // 1, 1, 0, 1, 1, 0, 0, 0,
  // 1, 0, 0, 0, 0, 0, 3, 0,
  // 0, 0, 0, 0, 0, 0, 0, 0,
  // 0, 0
  // ]

  function isAnagram(str) {
    let array = [...arr];
    // console.log("str:", str, array);
    // 比较两个字符串中每个字符出现的次数是否相同
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      array[char.charCodeAt() - 'a'.charCodeAt()]--;
      if (array[char.charCodeAt() - 'a'.charCodeAt()] < 0) {
        return false;
      }
    }
    return true;
  }  

  let winSize = s1.length;
  for (let i = 0; i <= s2.length - winSize; i++) {
    let str = s2.slice(i, i + winSize);
    if(isAnagram(str)){
      return true;
    }    
  }
  return false;
};



let s1 = "ab", s2 = "eidbaooo";
// true

// let s1 = "ab", s2 = "eidboaoo";
// false

console.log(checkInclusion(s1, s2));