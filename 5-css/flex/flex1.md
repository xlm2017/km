<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-22 11:32:53
 * @LastEditTime: 2023-02-22 11:48:46
 * @LastEditors: xlm
-->

# MDN flex
https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex



flex: 1;
# flex-shrink: 0;  元素不缩放              默认值为1, 默认缩放

此属性是以下 CSS 属性的简写：

flex-grow     设置 flex 项 主尺寸 的 flex 增长系数。  负值无效，默认为 0。
flex-shrink   指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。
flex-basic    指定了 flex 元素在主轴方向上的初始大小。如果不使用 box-sizing 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸

# 如果设置了宽度，flex-basis的值是width，所有子项平分取去掉flex-basis的剩余空间

# 直观的记忆是，如果设置了flex: 1，所有子项平分父亲，不管子项是否设置了固定宽度。
/* 固有的尺寸关键词 */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

width 值可以是 <length>; 该值也可以是一个相对于其父弹性盒容器主轴尺寸的百分数 。负值是不被允许的。默认为 auto。





/* 关键字值 */
flex: auto;
flex: initial;
flex: none;

/* 一个值，无单位数字：flex-grow */
flex: 2;

/* 一个值，width/height: flex-basis */
flex: 10em;
flex: 30px;
flex: min-content;

/* 两个值：flex-grow | flex-basis */
flex: 1 30px;

/* 两个值：flex-grow | flex-shrink */
flex: 2 2;

/* 三个值：flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/*全局属性值 */
flex: inherit;
flex: initial;
flex: unset;


# flex: initial;
initial
元素会根据自身宽高设置尺寸。
它会缩短自身以适应 flex 容器，
但不会伸长并吸收 flex 容器中的额外自由空间来适应 flex 容器。相当于将属性设置为"flex: 0 1 auto"。

auto
元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 "flex: 1 1 auto".

none
元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为"flex: 0 0 auto"。


<'flex-grow'>
定义 flex 项目的 flex-grow 。负值无效。省略时默认值为 1。 (初始值为 0)

<'flex-shrink'>
定义 flex 元素的 flex-shrink 。负值无效。省略时默认值为1。 (初始值为 1)

<'flex-basis'>
定义 flex 元素的 flex-basis 属性。若值为0，则必须加上单位，以免被视作伸缩性。省略时默认值为 0。(初始值为 auto)