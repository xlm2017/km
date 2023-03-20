/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-14 19:24:59
 * @LastEditTime: 2023-03-14 19:25:29
 * @LastEditors: xlm
 */



let href = "http://localhost:5174/OEBPS/Text/Section002-044.xhtml#footid_02044001"
let index = href.lastIndexOf("/");
console.log(href.substring(index+1));


// href.substring(href.lastIndexOf("/") + 1)