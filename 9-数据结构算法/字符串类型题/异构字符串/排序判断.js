

function isAnagram(str1, str2) {
  // 判断两个字符串的长度是否相同
  if (str1.length !== str2.length) {
    return false;
  }
  
  // 将两个字符串转换为字符数组，并对数组进行排序
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();
  
  // 比较两个排序后的字符数组是否相同
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}

// 示例
console.log(isAnagram('abc', 'cba')); // true
console.log(isAnagram('abc', 'cbd')); // false