/*
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-07 15:47:07
 * @LastEditTime: 2023-03-07 16:09:48
 * @LastEditors: xlm
 */



let text =  `
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  
  <title>扉页</title>

<link href="../Styles/stylesheet.css" type="text/css" rel="stylesheet"/>
<link href="../Styles/stylesheet.css" type="text/css" rel="stylesheet">

      <style>
      *{
        color: red;
      }
      body{
        padding-bottom: 0px !important;    
        background-size: contain;
      }
      </style>
    </head>

<body style="qz-vertical-align:middle;background-color:#fffde4;">
 <div class="image-static">

    <img style="width: 100%;text-align:center;" src="../Images/cover.jpeg"/>

  </div>
</body>
</html>
`;
  
// 转换后的link标签未闭合
let reg2 = /(<link[^>]*[^\/])>/g;

let arr = text.match(reg2);
console.log(arr);

for (const iterator of arr) {
  console.log("item:", iterator);
}

text = text.replaceAll(reg2, "$1/>");

console.log(text);