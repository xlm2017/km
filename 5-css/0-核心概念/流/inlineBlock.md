行内元素（inline-block）是会有默认的元素空隙的，但是在很多情况我们需要元素无缝链接展示，默认的margin:0;padding:0;是不起作用的，本文列举了几种css的方法来对默认空隙进行修改，且兼容多种浏览器。

<div class="demo">
  <span>什么什么</span><span>这是什么</span>
  <span>不知道哦</span>
  <div style="display: inline-block;">不知道哦</div>
  <div style="display: inline-block;">不知道哦</div>
</div>



<style>
    div{
        display: inline-block;
    }
    div .child1{
        width: 100px;
        height: 100px;
        background-color: red;
    }
    div .child2{
        width: 100px;
        height: 100px;
        background-color: yellow;
    }
</style>

<div>
  <div class="child1">11111</div>
  <div class="child2">22222</div>
</div>

# 真实的html上有间隙,空格造成的


在CSS布局中，如果我们想要将一些元素在同一行显示，其中的一种方法就是把要同行显示的元素设置display属性为inline-block，但是你会发现这些同行显示的inline-block元素之间经常会出现一定的空隙，这就是“换行符/空格间隙问题”。

display：inline；强制变成行内元素

display：block；强制变成块元素

而display：inline-block；顾名思义就是行内块的意思了，他具备了行内元素(包括标签和文字内容)不换行的特征，同时也有块元素可以设置宽高的特征）

- 使用font-size：0  父元素设置, 子元素如果需要字就单独设置字大小
- 移除空格
- 使用margin负值
- letter-spacing
- word-spacing

- inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化；
- inline元素设置width,height属性无效；
- inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。


- inline-block
  
 既具有block的宽度高度特性又具有inline的在同行展示的特性。

- inline-block 元素也可以设置 vertical-align属性（因为这个垂直对齐属性只对 只对行内元素、表格单元格元素生效：不能用它垂直对齐块级元素）。
- HTML 中的换行符、空格符、制表符等合并为空白符，字体大小不为 0 的情况下，空白符自然占据一定的宽度，使用inline-block 会产生了元素间的空隙。