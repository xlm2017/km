<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-23 14:37:48
 * @LastEditTime: 2023-02-24 11:15:45
 * @LastEditors: xlm
-->



# 

```js
// # 直接生效
import indexcss from './indextt.css';


// 引入json对象, 都无需导出
import indexcss from './indexcss.json';

```


```js

// 虽然官网有代码demo, 但是实际未生效, 找不到view.addStylesheetRules函数
rendition.hooks.render.register(function(view) {})

book.spine.hooks.serialize // Section is being converted to text
book.spine.hooks.content // Section has been loaded and parsed
rendition.hooks.render // Section is rendered to the screen
rendition.hooks.content // Section contents have been loaded
rendition.hooks.unloaded // Section contents are being unloaded


// css注入，因为epubjs的实现原理是iframe，而iframe中的dom不受我们的css控制，所以必须要注入css才能实现，

// 内容钩子
rendition.hooks.content.register(function(view) {
  let a = {
    ".picturebt001": {"margin-top": "0 !important;"},
  }
  view.addStylesheetRules(a);
})


```


```js

function addCss(rule) {
  let css = document.createElement('style');
  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = rule; // Support for IE
  else css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css);
}

// CSS rules
let rule  = '.red {background-color: red}';
    rule += '.blue {background-color: blue}';

// Load the rules and execute after the DOM loads
window.onload = function() {addCss(rule)};


```