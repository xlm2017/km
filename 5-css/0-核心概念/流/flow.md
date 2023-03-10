# 文档流

脱离常规流的元素
下列元素会脱离常规流：

- floated items。浮动的元素
- items with position: absolute (including position: fixed which acts in the same way)。通过设置 position 属性为 absolute 或者 fixed 的元素
- the root element (html) 根元素


脱离常规流的元素会创建一个新的块级格式化上下文（Block Formatting Context: BFC）环境，其中包含的所有元素构成了一个小的布局环境，与页面中的其他内容分隔开来。而根元素，作为页面中所有内容的容器，自身脱离常规流，为整个文档创建了一个块级格式化上下文环境。