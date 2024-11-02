// 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

// 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

 

// 示例 1：

// 输入：name = "alex", typed = "aaleex"
// 输出：true
// 解释：'alex' 中的 'a' 和 'e' 被长按。
// 示例 2：

// 输入：name = "saeed", typed = "ssaaedd"
// 输出：false
// 解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
 

// 提示：

// 1 <= name.length, typed.length <= 1000
// name 和 typed 的字符都是小写字母


/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  // 两个循环内计数器

  let len1 = name.length;
  let len2 = typed.length;
  let i = 0;
  let j = 0;
  while(i < len1 && j < len2){

      let count1 = 0;
      let c1 = name[i];
      while( i < len1 && c1 === name[i]){
          i++;
          count1++;
      }

      let count2 = 0;
      let c2 = typed[j];
      while( j < len2 && c2 === typed[j]){
          j++;
          count2++;
      }

      if(c1 !== c2 || count1 > count2){
       return false;
      }
  }
  return i === len1 && j ===len2;
};


// let names = "alex", typed = "aaleex"
// 输出：true

let names = "alex", typed = "aaleexa"

console.log(isLongPressedName(names, typed));