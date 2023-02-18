var magicalString = function (n) {
  if (n < 4) {
    return 1;
  }
  const s = new Array(n).fill(0);
  s[0] = '1';
  s[1] = '2';
  s[2] = '2';
  let res = 1;
  let i = 2;
  let j = 3;
  while (j < n) {
    let size = s[i].charCodeAt() - '0'.charCodeAt();
    const num = 3 - (s[j - 1].charCodeAt() - '0'.charCodeAt());
    while (size > 0 && j < n) {
      s[j] = String.fromCharCode('0'.charCodeAt() + num);
      if (num === 1) {
        ++res;
      }
      ++j;
      --size;
    }
    ++i;
  }
  return res;
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/magical-string/solutions/1936845/shen-qi-zi-fu-chuan-by-leetcode-solution-y5dg/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。