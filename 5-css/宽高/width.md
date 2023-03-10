# 宽度.

- length
使用绝对值定义宽度。

- percentage
使用外层元素的容纳区块宽度（the containing block's width）的百分比定义宽度。

- auto
  浏览器将会为指定的元素计算并选择一个宽度。

- max-content Experimental
元素内容固有的（intrinsic）合适宽度。

(内容宽度最大, 无视父级容器宽度限制)

- min-content Experimental
元素内容固有的最小宽度。

(当每一列空间都不够的时候, 文字能断就断, 中文随便断, 英文单词不能断. preferred minimum width || minimum content width)

- fit-content Experimental
  (包裹性 shrink-to-fit)
取以下两种值中的较大值：

  固有的最小宽度

  固有首选宽度（max-content）和可用宽度（available）两者中的较小值
可表示为：min(max-content, max(min-content,  length-percentage))

- -webkit-fill-available
  充分利用可用空间


# 原则

- 无宽度, 保持流体特性.(即自动分配水平空间)