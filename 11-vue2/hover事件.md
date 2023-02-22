<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-22 11:51:25
 * @LastEditTime: 2023-02-22 13:51:48
 * @LastEditors: xlm
-->
mouseover
The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.


```html
<div class="mark-item" 
  :class="currMark === item.id ? 'active': ''"
  @mouseover="currMark = item.id"
>
```




# 比如给第三方组件ElementUI的button，在绑定mouseover和mouseout事件时，发现绑在按钮上时无效的。

解决方案：如果这个组件没处理这两个事件的话是绑不了的。可以添加.native修饰符，就可以把事件绑到组件的根元素上

```html
<el-button type="primary" icon="el-icon-search" plain round 
@mouseenter.native="knowledge = '即将推出，敬请期待'" 
@mouseleave.native="knowledge = '知识库搜索答案'">{{knowledge}}</el-button>



```


```js

addEventListener('mouseover', (event) => {});

onmouseover = (event) => { };

```