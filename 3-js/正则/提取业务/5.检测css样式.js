/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-07 11:20:06
 * @LastEditTime: 2023-03-07 16:58:12
 * @LastEditors: xlm
 */

let html = `<p id="dkaudio_id_001-000-001" style="margin-bottom:-2em;">
  <img style="height:3em;text-align: right;" src="blob:http://localhost:5174/d73a1048-860c-4ca9-98f7-db96beb02a9e">
  <img style="height:3em;text-align: center;" src="blob:http://localhost:5174/d73a1048-860c-4ca9-98f7-db96beb02a9e">
  &nbsp;
  </p>`


//  目标

// 检测到img标签中存在 text-align: right 这个属性时, 则将这个属性添加到他的父元素的style样式中



let str1 = `text-align:right`
let str2 = `text-align : center`

let reg1 = /text-align[\s]*:[\s]*([^\s'";]*)/g;

console.log(reg1.test(str1), reg1.test(str2));

let arr = html.match(reg1);

console.log("arr:", arr);


