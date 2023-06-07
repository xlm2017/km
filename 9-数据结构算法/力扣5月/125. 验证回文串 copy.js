// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

// 字母和数字都属于字母数字字符。

// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。



// 示例 1：

// 输入: s = "A man, a plan, a canal: Panama"
// 输出：true
// 解释："amanaplanacanalpanama" 是回文串。
// 示例 2：

// 输入：s = "race a car"
// 输出：false
// 解释："raceacar" 不是回文串。
// 示例 3：

// 输入：s = " "
// 输出：true
// 解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
// 由于空字符串正着反着读都一样，所以是回文串。


// 提示：

// 1 <= s.length <= 2 * 105
// s 仅由可打印的 ASCII 字符组成


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //大写转换小写
  s=s.toLowerCase();  
  // 长度
  let nb=s.length
  // 初始化左右指针
  let l=0;
  let r=nb-1;
  // 判断左右指针大小
  while(l<=r){
      // 是否为数字字母字符
      let reg=/^[a-zA-Z0-9]$/;
      // 那边不是向下走一个下标
      let tpl;
      let tpr;
      if(reg.test(s[l])){
         tpl=s[l];
      }
      else{
          l++;
          continue 
      }
       if(reg.test(s[r])){
         tpr=s[r];
      }
      else{
          r--;
          continue 
      }
      // 判断左右是否相等
      if(tpl==tpr){
          // 左右加加
          l++;
          r--;
      }else{
          // 不相等false
          console.log(tpl+" "+tpr)
          return false;
      }   
  }
  return true;
};

// let s = "race a car";
// false

// let s = "A man, a plan, a canal: Panama";
// true

let s = "0P";
true

console.log(isPalindrome(s));