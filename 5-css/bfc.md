# 块格式化上下文（Block Formatting Context，BFC） 是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建块格式化上下文：

* 根元素（html>）
* 浮动元素（float 值不为 none）
* 绝对定位元素（position 值为 absolute 或 fixed）
* display 值为 
* inline-block
 
* flow-root 的元素
 
* table-cell，HTML 表格单元格默认值
* table-caption，HTML 表格标题默认值
* table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、tr、tbody、thead、tfoot 的默认值）或 inline-table）匿名表格单元格元素
 
* 弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
 
* 网格元素（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
 
* overflow 值不为 visible、clip 的块元素
* contain 值为 layout、content 或 paint 的元素
* 多列容器（column-count 或 column-width (en-US) 值不为 auto，包括column-count 为 1）
* column-span 值为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中 (规范变更, Chrome bug)


格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 BFC，而不是更改布局，因为它将：

* 包含内部浮动 (父级盒子塌陷)
* 排除外部浮动 (避免受到外部浮动盒子干扰)
* 阻止 外边距重叠

BFC就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠
计算BFC的高度时，浮动元素也参与计算