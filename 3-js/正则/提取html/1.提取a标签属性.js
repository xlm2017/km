/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-29 09:23:46
 * @LastEditTime: 2023-03-29 09:33:45
 * @LastEditors: xlm
 */



let str = `<a class="footnote" href="#footid_01003001" 
      style="text-align: center; margin: 0px auto;">《元和姓纂》书影
      <img class="inline12" src="blob:http://localhost:5173/5da58fc1-d9ed-4ec8-ba2e-1e3f1f1e3ff0">
      </a>`;



// 提取href属性

// let reg = /\<a/g;


const regex = /(<a\s[^>]*?href="([^"]*)"[^>]*?>)/i;
const match = str.match(regex);

if (match) {
  const hrefValue = match[2];
  console.log(hrefValue);
} else {
  console.log('No match found');
}
