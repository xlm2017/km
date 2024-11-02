var compress = function (chars) {
  const n = chars.length;
  let write = 0, left = 0;
  for (let read = 0; read < n; read++) {
    if (read === n - 1 || chars[read] !== chars[read + 1]) {
      chars[write++] = chars[read];
      let num = read - left + 1;
      if (num > 1) {
        const anchor = write;
        while (num > 0) {
          chars[write++] = '' + num % 10;
          num = Math.floor(num / 10);
        }
        reverse(chars, anchor, write - 1);
      }
      left = read + 1;
    }
  }
  return write;
};

const reverse = (chars, left, right) => {
  while (left < right) {
    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }
}

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/string-compression/solutions/948556/ya-suo-zi-fu-chuan-by-leetcode-solution-kbuc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。