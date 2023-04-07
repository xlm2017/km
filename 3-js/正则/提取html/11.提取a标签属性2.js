/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-29 09:23:46
 * @LastEditTime: 2023-03-29 09:38:18
 * @LastEditors: xlm
 */



const htmlString = `
  <ul>
    <li><a href="https://www.example.com/">Example</a></li>
    <li><a href="#anchor">Anchor</a></li>
    <li><a href="/path/to/page.html">Page</a></li>
    <li><a href="#">Empty</a></li>
  </ul>
`;

const regex = /(<a\s[^>]*?href="([^"]*)"[^>]*?>)/gi;
const replacedHtmlString = htmlString.replace(regex, (match, p1, p2) => {
  if (p2.includes('http')) {
    return p1;
  } else {
    return p1.replace(p2, 'aaa');
  }
});

console.log(replacedHtmlString);