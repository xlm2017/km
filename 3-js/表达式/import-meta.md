<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-03 10:47:28
 * @LastEditTime: 2023-03-03 11:11:54
 * @LastEditors: xlm
-->


import.meta是一个给 JavaScript 模块暴露特定上下文的元数据属性的对象。它包含了这个模块的信息，比如说这个模块的 URL。


# mdn

<script type="module" src="my-module.mjs"></script>

console.log(import.meta); // { url: "file:///home/user/my-module.mjs" }


# 
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/import.meta


# vite
```js

function getImageUrl(name) {
  return new URL(`../lib/images/${name}`, import.meta.url).href
}


```