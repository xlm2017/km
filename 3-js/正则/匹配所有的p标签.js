/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-01 14:34:50
 * @LastEditTime: 2023-03-01 16:01:24
 * @LastEditors: xlm
 */


let str = `<p>123456789X一二三四五六七八九十X1

</p>
<p>123456789X一</p>

<p>电饭</p>
`;

// 匹配'x'仅当'x'前面是'y'.这种叫做后行断言。
// ?<=

let arr = str.match(/(?<=<p>)[\s\S]*?(?=<\/p>)/g);

/* <p class="pp">ddf>/p></p> */
// p有属性的不能被匹配到

// 注意: 不能匹配到嵌套p

console.log(arr);


let str2 = `<p>123456789X一二三四五六七八九十X1

</p>
<p>123456789X一</p>

<p class="ppp">电饭锅</p>

<p>
  <h2>wwww</h2> 
  <p>123456789X一</p>
</p>

`;

let arr2 = str2.match(/(?<=<p[^>]*>)[\s\S]*?(?=<\/p[^>]*>)/g);
console.log('匹配标签:', arr2);




// 嵌套标签
let str3 = `<p>123456789X一二三四五六七八九十X1

</p>
<p>
  <h2>wwww</h2> 
  <p>123456789X一</p>
</p>

<p class="ppp">电饭锅</p>
`;

let arr3 = str3.match(/(?<=<p[^>]*>)[\s\S]*?(?=<\/p[^>]*>)/g);
console.log('匹配嵌套标签:', arr3);