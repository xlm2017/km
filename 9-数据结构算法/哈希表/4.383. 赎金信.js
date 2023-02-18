// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

 

// 示例 1：

// 输入：ransomNote = "a", magazine = "b"
// 输出：false
// 示例 2：

// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false
// 示例 3：

// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true
 

// 提示：

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote 和 magazine 由小写英文字母组成


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let obj = {};
  for (let index = 0; index < magazine.length; index++) {
    const element = magazine[index];
    obj[element] = obj[element] ? ++obj[element] : 1;
  }
  for (let index = 0; index < ransomNote.length; index++) {
    const element = ransomNote[index];
    if(obj[element]){
      obj[element]--;
    }else{
      return false;
    }
  }
  return true;



 // 最佳性能的
  var x 
    magazine=magazine.split("")
    for(var i=0;i<ransomNote.length;i++){
        if( (x=magazine.indexOf(ransomNote[i])) > -1){
             magazine[x]=0
        }else{
            return false;
        }
    }
    
    return true;
};

let ransomNote = "aa", magazine = "aab";
// true

console.log(canConstruct(ransomNote, magazine));
