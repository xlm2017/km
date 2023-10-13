/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-10-12 17:32:38
 * @LastEditTime: 2023-10-12 17:33:02
 * @LastEditors: xlm
 */


// 声明提升提升的是对函数或变量的声明，而不是赋值！

(() => {
  console.log(a); //当时我的答案：undefined 正确答案：ƒ a(){}
  var a = 10;
  console.log(a); //10
  a = 20;
  function a(){};
  console.log(a); //我的答案：ƒ a(){} 正确答案：20
})()
