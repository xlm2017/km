<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-03-07 10:34:37
 * @LastEditTime: 2023-03-07 10:36:23
 * @LastEditors: xlm
-->


# load 事件

load 事件在整个页面及所有依赖资源如样式表和图片都已完成加载时触发。它与 DOMContentLoaded 不同，后者只要页面 DOM 加载完成就触发，无需等待依赖资源的加载。

该事件不可取消，也不会冒泡。

当页面完全加载后在控制台打印一段信息：

```js
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

// 也可以使用 onload 事件处理器属性实现：

window.onload = (event) => {
  console.log('page is fully loaded');
};
```


## 只是图片加载完, 并不是指图片渲染完成. 思考为什么这样设计? 


## 如何在图片渲染之前确定页面布局 ? 或者保证图片的渲染不影响布局 ? 