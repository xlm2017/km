/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let minLength = s.length + 1;  // 目标子串长度, 要求最短
  let start = s.length;   // 目标子串的起始位置

  let map = {};
  // 字符种类
  let kind = 0;
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]++
    } else {
      map[t[i]] = 1
      kind++;
    }
    // need[a] = (need[a] || 0) + 1;
  }
  // console.log(map);

  // let left, right = 0;
  let left = 0, right = 0;

  for (; right < s.length; right++) {
    let rightChar = s[right];
    if (map[rightChar] !== undefined) {
      map[rightChar]--;
    }
    if (map[rightChar] === 0) {
      kind--;
    }


    // 说明字符种类已经凑齐并且数量也凑齐了, 当前窗口包含所有字符
    while (kind === 0) {
      // 记录当前子串的位置
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        start = left;
      }

      // 抛弃当前的左指针上的字符, 左指针向右移动
      let leftChar = s[left];
      if (map[leftChar] !== undefined) map[leftChar]++; // 被舍弃的是目标字符，缺失个数+1
      if (map[leftChar] > 0) kind++;      // 如果缺失个数新变为>0，缺失的种类+1
      left++;
      // console.log("left:", leftChar, left);
    }
  }
  // console.log("start:", start, minLength);
  if (start == s.length) return "";
  return s.substring(start, start + minLength); // 根据起点和minLen截取子串
};