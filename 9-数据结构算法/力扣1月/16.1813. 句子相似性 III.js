// 一个句子是由一些单词与它们之间的单个空格组成，且句子的开头和结尾没有多余空格。比方说，"Hello World" ，"HELLO" ，"hello world hello world" 都是句子。
// 每个单词都 只 包含大写和小写英文字母。

// 如果两个句子 sentence1 和 sentence2 ，可以通过往其中一个句子插入一个任意的句子（可以是空句子）而得到另一个句子，那么我们称这两个句子是 相似的 。
// 比方说，sentence1 = "Hello my name is Jane" 且 sentence2 = "Hello Jane" ，我们可以往 sentence2 中 "Hello" 和 "Jane" 之间插入 "my name is" 得到 sentence1 。

// 给你两个句子 sentence1 和 sentence2 ，如果 sentence1 和 sentence2 是相似的，请你返回 true ，否则返回 false 。

 

// 示例 1：

// 输入：sentence1 = "My name is Haley", sentence2 = "My Haley"
// 输出：true
// 解释：可以往 sentence2 中 "My" 和 "Haley" 之间插入 "name is" ，得到 sentence1 。
// 示例 2：

// 输入：sentence1 = "of", sentence2 = "A lot of words"
// 输出：false
// 解释：没法往这两个句子中的一个句子只插入一个句子就得到另一个句子。
// 示例 3：

// 输入：sentence1 = "Eating right now", sentence2 = "Eating"
// 输出：true
// 解释：可以往 sentence2 的结尾插入 "right now" 得到 sentence1 。
// 示例 4：

// 输入：sentence1 = "Luky", sentence2 = "Lucccky"
// 输出：false
 

// 提示：

// 1 <= sentence1.length, sentence2.length <= 100
// sentence1 和 sentence2 都只包含大小写英文字母和空格。
// sentence1 和 sentence2 中的单词都只由单个空格隔开。


/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {

  if(sentence1.length === sentence2.length){
    if(sentence1 === sentence2){
      return true;
    }else{
      return false;
    }
  }else{
    let temp1 = sentence1.length > sentence2.length ? sentence1 : sentence2;
    let temp2 = sentence1.length > sentence2.length ? sentence2 : sentence1;
    sentence1 = temp1;
    sentence2 = temp2;
    let arr1 = sentence1.split(" ");
    let arr2 = sentence2.split(" ");
    if(arr1.length === arr2.length){
      return false;
    }
    let notEqual = [];
    let j = 0;
    for (let i = 0; i < arr1.length; i++) {
      if(j >= arr2.length){
        if(notEqual.length){
          console.log("变换的地方2:", notEqual);
          return false;
        } else{
          return true;
        }  
      }else{
        if(arr1[i] === arr2[j]){
          j++;
        }else{
          if(notEqual.length){
            if(notEqual[notEqual.length - 1] + 1 === i){
              notEqual.push(i);
            }else{
              // 变换的地方
              console.log("变换的地方:", notEqual);
              return false;
            }
          }else{
            notEqual.push(i);
          }
        }
      }   
    }
    return true;
  }

};

// let sentence1 = "My name is Haley", sentence2 = "My Haley";

// let sentence1 = "of", sentence2 = "A lot of words";

// let sentence1 = "Luky", sentence2 = "Lucccky";

let sentence1 = "A";
let sentence2 = "a A b A";
// true;

console.log(areSentencesSimilar(sentence1, sentence2));