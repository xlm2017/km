/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-01 16:35:30
 * @LastEditTime: 2023-03-01 16:43:07
 * @LastEditors: xlm
 */


// 思否
// https://segmentfault.com/q/1010000011917817?utm_source=sf-similar-question

let str = `<section>
             dfdfdfdfdfdfdfdfdfdfdfdf
           </section>

           <section>
             dfdfddfdfdfdf
             <section>
               ddfddfdfddfdfdf
             </section>
           </section>
`;

str = `<section>dfdfdfdfdfdfdfdfdfdfdfdf</section><section>dfdfddfdfdfdf<section>ddfddfdfddfdfdf</section></section>
`;

// let reg = /<section>(<section>\n.*?<\/section>|.\n)*?<\/section>/g;
let reg = /<section>(<section>.*?<\/section>|.)*?<\/section>/g;
// let reg = /<section>.*?(<\/section>)+/g

// console.log(reg.exec(str));

let arr = str.matchAll(reg);

// console.log("length:", arr.length);

for (const iterator of arr) {
  console.log("iterator:", iterator);
}