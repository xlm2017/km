# 层叠上下文

<img src="../assets/css/zindex.png" style="width:450px">

## 什么是“层叠上下文”
层叠上下文(stacking context)，是HTML中一个三维的概念。在CSS2.1规范中，每个盒模型的位置是三维的，分别是平面画布上的X轴，Y轴以及表示层叠的Z轴。一般情况下，元素在页面上沿X轴Y轴平铺，我们察觉不到它们在Z轴上的层叠关系。而一旦元素发生堆叠，这时就能发现某个元素可能覆盖了另一个元素或者被另一个元素覆盖。
如果一个元素含有层叠上下文，(也就是说它是层叠上下文元素)，我们可以理解为这个元素在Z轴上就“高人一等”，最终表现就是它离屏幕观察者更近。

## 如何产生“层叠上下文”

CSS3中的属性对层叠上下文的影响
CSS3中出现了很多新属性，其中一些属性对层叠上下文也产生了很大的影响。如下：

父元素的display属性值为flex|inline-flex，子元素z-index属性值不为auto的时候，子元素为层叠上下文元素；
- 元素的opacity属性值不是1；
- 元素的transform属性值不是none；
- 元素mix-blend-mode属性值不是normal`；
- 元素的filter属性值不是none；
- 元素的isolation属性值是isolate；
- will-change指定的属性值为上面任意一个；
- 元素的-webkit-overflow-scrolling属性值设置为touch。

CSS3中，元素属性满足以上条件之一，就会产生层叠上下文。我们用第1条来做一个简单的解释说明。


通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index值越大就越是在上层。z-index元素的position属性需要是relative，absolute或是fixed。

z-index属性在下列情况下会失效：

- 父元素position为relative时，子元素的z-index失效。解决：父元素position改为absolute或static；

- 元素没有设置position属性为非static属性。解决：设置该元素的position属性为relative，absolute或是fixed中的一种；

- 元素在设置z-index的同时还设置了float浮动。解决：float去除，改为display：inline-block



如何形成层叠上下文
在以下情况下，文档中的任何元素 只要拥有以下条件之一 即可形成堆叠上下文：

根元素：

- 文档的根元素（html）。
- position：

值为absolute 或者relative ，并且z-index的值不为auto的元素。
值为 fixed 或 sticky的元素（sticky可用于所有移动浏览器，但不适用于较旧的桌面浏览器）。


容器：

- 元素是flex容器的子元素，并且其z-index的值不是auto。
- 元素是grid容器的子元素，并且其z-index值不是auto。
- opacity：
  
opacity的值小于的元素1（请参见不透明度的规范）。
其他：

具有以下任一属性的元素，并且其值不是 none：
- transform
- filter（滤镜）
- perspective
- clip-path（裁剪）
- mask/ mask-image/mask-border
- mix-blend-mode的值不是normal的元素。
- 属性isolation（隔离）的值为isolate的元素。（该属性就是可以主动申请一个 层叠上下文）
- 以下为当前兼容性不足或者不推荐的但能生成 层叠上下文 的技术：

- 属性-webkit-overflow-scrolling的值touch为的元素。
- 属性will-change值不为初始值的元素（重要提示： will-change旨在用作最后手段，以尝试解决现有的性能问题。不应将其用于预期性能问题。）。
- 属性contain的值layout，或者paint，或包括它们中的一个复合值（即contain: strict，contain: content）。（**这是一项实验性技术，**请在生产中使用它之前仔细检查浏览器兼容性表。）
综上：

层叠上下文可以被其他层叠上下文包含，并一起创建层叠上下文的层次结构

每个层叠上下文和其兄弟独立开来；处理层叠上下文时仅考虑后代元素

每个层叠上下文都是独立的，将元素的内容堆叠之后，将按照父层叠上下文的堆叠顺序考虑整个元素；

**注意：**比较堆叠顺序时，将只比较同级 DOM 的堆叠顺序，相同情况下再考虑子元素，直到一方比另一方大。


**css 性能优化**

在浏览器渲染过程中，每个 DOM 节点都会对应一个 LayoutObject，当他们的 LayoutObject 处于相同的坐标空间时，即 Z 轴上位于同一平面，就会形成一个 RenderLayers ，也就是渲染层，此文简称 Layer。

Layer 将同一坐标空间的 LayoutObject 组织起来，保证页面元素以正确的顺序合成，这时候就会出现层合成（composite）。

某些特殊的渲染层会被认为是 合成层。合成层拥有单独的处理单元（GraphicsLayer）,而其他不是合成层的渲染层 Layer，则和第一个拥有独立处理单元的父层共用一个处理单元。

那么上文的层叠上下文除了能帮助我们正确了解和处理元素在 Z 轴上的展示意外，当我们对层叠上下文进行优化处理时，可以得到 合成层 的 css 性能优化。

但是 层叠上下文 与 Layer 之间的关系可以 笼统地概括为：有自己的 layer 的元素则必定是一个层叠上下文，而是层叠上下文的元素不一定有自己的 layer。
