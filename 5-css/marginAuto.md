# 可用剩余空间

## margin:'0 auto'; 只对块元素起作用，还要设置width属性。

<style>
	.parent-panel {
    padding: 20px;
    background-color: darksalmon;
  }
  .main-panel {
    width: 60%;
    margin: auto;
    background-color: blanchedalmond;
    text-align-last: justify;
  }
</style>

<div class="parent-panel">
	<div class="main-panel">我居中了</div>
</div>

```html
<div class="parent-panel">
	<div class="main-panel">我居中了</div>
</div>
```

```css
.parent-panel {
  padding: 20px;
  background-color: darksalmon;
}
.main-panel {
  width: 60%;
  margin: auto;
  background-color: blanchedalmond;
  text-align-last: justify;
}
```

margin: auto 解决了 让一个 正常布局流(normal flow) 中 固定宽度 的 块 元素 水平 居中 的问题，其原理就是：在 writing-mode: horizontal-tb 和 direction: ltr 的前提下，当我们给一个块元素设置 margin-left: auto ( margin-right: auto ) 时，其计算值为该块元素的父级在水平方向上的可用剩余空间，二者都设置了就均分剩余空间，自然就让该元素水平方向居中了。


<style>
	.bottom-panel {
    display: flex;
    justify-content: space-evenly;
    overflow: auto;
  }
  .bottom-panel > .item {
    width: 30%;
    flex-shrink: 0;
  }
</style>

<ul class="bottom-panel">
  <li class="item">1</li>
  <li class="item">2</li>
  <li class="item">3</li>
  <li class="item">4</li>
  <li class="item">5</li>
  <li class="item">6</li>
</ul>


<style>
	.bottom-panel2 {
    display: flex;
    overflow: auto;
  }
  .bottom-panel2 > .item {
    width: 30%;
    flex-shrink: 0;
    margin-left: auto;
  }
  .bottom-panel2 > .item:last-child {
    margin-right: auto;
  }
</style>

<ul class="bottom-panel2">
  <li class="item">1</li>
  <li class="item"></li>
  <li class="item"></li>
  <li class="item"></li>
  <li class="item"></li>
  <li class="item">6</li>
</ul>


