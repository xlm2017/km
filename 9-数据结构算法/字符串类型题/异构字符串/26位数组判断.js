

function isAnagram(str1, str2) {
  // 判断两个字符串的长度是否相同
  if (str1.length !== str2.length) {
    return false;
  }
  
  // 使用数组记录每个字符出现的次数
  const arr = new Array(26).fill(0);
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    arr[char.charCodeAt() - 'a'.charCodeAt()]++;
  }
  
  // 比较两个字符串中每个字符出现的次数是否相同
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    arr[char.charCodeAt() - 'a'.charCodeAt()]--;
    if (arr[char.charCodeAt() - 'a'.charCodeAt()] < 0) {
      return false;
    }
  }
  
  return true;
}

// 示例
console.log(isAnagram('abc', 'cba')); // true
console.log(isAnagram('abc', 'cbd')); // false
