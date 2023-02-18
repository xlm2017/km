

// 子串的定位操作: 通常被称做串的模式匹配

function findIndexSubStr (mainStr, subStr) {

  for (let i = 0; i < mainStr.length; i++) {
    const element = mainStr[i];
    // 子串首位匹配了当前的字符
    if (subStr[0] === element) {
      console.log("子串首位匹配了当前的字符", element, i);
      let k = 1;
      while (k < subStr.length && i + k < mainStr.length) {
        if (subStr[k] === mainStr[i + k]) {
          console.log("子串的下一位与主串的匹配位置的下一位:", k)
          // continue;
          if (k === subStr.length - 1) {
            console.log("匹配到了子串最后一位且相同")
            return i;
          }
        } else {
          break;
        }
        k++;
      }
    }
  }

  return -1;
}

let mainStr = 'goodgoogle';
let subStr = 'google';

console.log("\n子串出现的位置:", findIndexSubStr(mainStr, subStr));